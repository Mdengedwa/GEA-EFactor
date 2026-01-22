
import React from 'react';
import { Competency } from '../types';
import NumberSelector from './StarRating';

interface CompetencySectionProps {
  competency: Competency;
  answers: number[];
  onAnswerChange: (competencyId: string, statementIndex: number, value: number) => void;
}

const CompetencySection: React.FC<CompetencySectionProps> = ({ competency, answers, onAnswerChange }) => {
  return (
    <div>
      <div className="text-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-bold text-dark">{competency.title}</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{competency.description}</p>
      </div>
      <div className="space-y-8">
        {competency.statements.map((statement, index) => (
          <div key={index} className="sm:flex sm:items-center sm:justify-between">
            <p className="text-base text-gray-800 mb-2 sm:mb-0 sm:w-1/2">{index + 1}. {statement}</p>
            <div className="sm:w-1/2 flex justify-center">
              <NumberSelector
                rating={answers[index]}
                onRatingChange={(value) => onAnswerChange(competency.id, index, value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetencySection;
