
import React from 'react';

interface NumberSelectorProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ rating, onRatingChange }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const tooltips: { [key: number]: string } = {
    1: 'Almost Never',
    4: 'Generally',
    7: 'Almost Always',
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center space-x-1 sm:space-x-2">
        {numbers.map(num => (
          <button
            key={num}
            type="button"
            onClick={() => onRatingChange(num)}
            aria-label={`Rate ${num}`}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ${
              rating === num
                ? 'bg-primary text-white scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
       <div className="h-6 mt-2 text-sm text-gray-500 font-medium">
        {tooltips[rating] || (rating ? `Selected: ${rating}` : 'Select a rating')}
      </div>
    </div>
  );
};

export default NumberSelector;
