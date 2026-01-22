
import React from 'react';
import { Competency } from '../types';
import CompetencySection from './CompetencySection';

interface QuestionnaireProps {
  competency: Competency;
  answers: number[];
  onAnswerChange: (competencyId: string, statementIndex: number, value: number) => void;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
  allQuestionsAnswered: boolean;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  competency,
  answers,
  onAnswerChange,
  onNext,
  onBack,
  isLastStep,
  allQuestionsAnswered,
}) => {
  return (
    <div className="animate-fade-in">
      <CompetencySection
        competency={competency}
        answers={answers}
        onAnswerChange={onAnswerChange}
      />
      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={onBack}
          className="py-2 px-6 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!allQuestionsAnswered}
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLastStep ? 'View Results' : 'Next Section'}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
