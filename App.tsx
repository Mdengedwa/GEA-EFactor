
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { UserProfile, Answers, Scores, Competency } from './types';
import { COMPETENCIES, AGE_OPTIONS } from './constants';
import Header from './components/Header';
import UserProfileForm from './components/UserProfileForm';
import Questionnaire from './components/Questionnaire';
import ResultsDashboard from './components/ResultsDashboard';
import ProgressBar from './components/ProgressBar';

const TOTAL_COMPETENCIES = COMPETENCIES.length;

const App: React.FC = () => {
  const [step, setStep] = useState(0); // 0: profile, 1-8: questionnaire, 9: results

  const getInitialState = <T,>(key: string, defaultValue: T): T => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
    } catch (error) {
      console.error(`Error reading from localStorage key “${key}”:`, error);
    }
    return defaultValue;
  };

  const [userProfile, setUserProfile] = useState<UserProfile>(() =>
    getInitialState<UserProfile>('userProfile', { name: '', age: '', area: '', email: '' })
  );

  const [answers, setAnswers] = useState<Answers>(() => {
    const initialAnswers = getInitialState<Answers>('answers', {});
    COMPETENCIES.forEach(c => {
      if (!initialAnswers[c.id]) {
        initialAnswers[c.id] = Array(c.statements.length).fill(0);
      }
    });
    return initialAnswers;
  });

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);
  
  const scores = useMemo<Scores>(() => {
    const newScores: Scores = {};
    for (const competency of COMPETENCIES) {
      const competencyAnswers = answers[competency.id] || [];
      const sum = competencyAnswers.reduce((sum, score) => sum + score, 0);
      // The score for a competency is the average of its statement ratings.
      newScores[competency.id] = competencyAnswers.length > 0 ? sum / competencyAnswers.length : 0;
    }
    return newScores;
  }, [answers]);

  const handleProfileSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setStep(1);
  };

  const handleAnswerChange = (competencyId: string, statementIndex: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [competencyId]: [
        ...prev[competencyId].slice(0, statementIndex),
        value,
        ...prev[competencyId].slice(statementIndex + 1),
      ]
    }));
  };
  
  const allQuestionsAnswered = useMemo(() => {
    if (step === 0) return false;
    if (step > TOTAL_COMPETENCIES) return true;
    const currentCompetencyId = COMPETENCIES[step - 1]?.id;
    return answers[currentCompetencyId]?.every(answer => answer > 0) ?? false;
  }, [answers, step]);

  const handleNext = () => {
    if (step < TOTAL_COMPETENCIES) {
      setStep(prev => prev + 1);
    } else {
      setStep(TOTAL_COMPETENCIES + 1); // Go to results
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    } else if (step === 1) {
      setStep(0);
    }
  };

  const handleRetake = useCallback(() => {
    const newAnswers: Answers = {};
    COMPETENCIES.forEach(c => {
        newAnswers[c.id] = Array(c.statements.length).fill(0);
    });
    setAnswers(newAnswers);
    setUserProfile({ name: '', age: '', area: '', email: '' });
    localStorage.removeItem('answers');
    localStorage.removeItem('userProfile');
    setStep(0);
  }, []);

  const renderContent = () => {
    if (step === 0) {
      return <UserProfileForm initialProfile={userProfile} onSubmit={handleProfileSubmit} />;
    }
    if (step > 0 && step <= TOTAL_COMPETENCIES) {
      const currentCompetency = COMPETENCIES[step - 1];
      return (
        <Questionnaire
          competency={currentCompetency}
          answers={answers[currentCompetency.id]}
          onAnswerChange={handleAnswerChange}
          onNext={handleNext}
          onBack={handleBack}
          isLastStep={step === TOTAL_COMPETENCIES}
          allQuestionsAnswered={allQuestionsAnswered}
        />
      );
    }
    if (step > TOTAL_COMPETENCIES) {
      return (
        <ResultsDashboard
          userProfile={userProfile}
          scores={scores}
          onRetake={handleRetake}
        />
      );
    }
    return null;
  };

  return (
    <div className="bg-light min-h-screen text-dark">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {step > 0 && step <= TOTAL_COMPETENCIES + 1 && (
            <ProgressBar currentStep={step} totalSteps={TOTAL_COMPETENCIES + 1} />
        )}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg transition-all duration-500">
          {renderContent()}
        </div>
      </main>
       <footer className="text-center py-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Global Enterprise Academy SA. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;