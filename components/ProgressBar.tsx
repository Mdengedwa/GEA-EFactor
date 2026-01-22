
import React from 'react';
import { COMPETENCIES } from '../constants';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps -1)) * 100;

  let stepLabel = '';
  if (currentStep > 0 && currentStep <= COMPETENCIES.length) {
    stepLabel = `Section ${currentStep} of ${COMPETENCIES.length}: ${COMPETENCIES[currentStep-1].title}`;
  } else if (currentStep > COMPETENCIES.length) {
    stepLabel = "Results";
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-600">
        <span>{stepLabel}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-secondary h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
