
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { AGE_OPTIONS } from '../constants';

interface UserProfileFormProps {
  initialProfile: UserProfile;
  onSubmit: (profile: UserProfile) => void;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ initialProfile, onSubmit }) => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
    if(errors[name]) {
        setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!profile.name.trim()) newErrors.name = 'Name is required.';
    if (!profile.age) newErrors.age = 'Please select an age group.';
    if (!profile.area.trim()) newErrors.area = 'Area/Region is required.';
    return newErrors;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    onSubmit(profile);
  };

  return (
    <div className="animate-fade-in">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-2">Welcome to the Assessment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            This tool is designed to help you understand your entrepreneurial strengths and areas for development. Please answer each question honestly based on your typical behavior.
            </p>
        </div>

      <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded-r-lg mb-8">
        <h3 className="font-bold text-lg text-primary mb-2">Instructions</h3>
        <p className="text-gray-700">
          For each statement, please rate yourself on a scale of <strong>1 to 7</strong>, where:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
            <li><strong>1</strong> = Almost Never</li>
            <li><strong>4</strong> = Generally</li>
            <li><strong>7</strong> = Almost Always</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-2xl font-semibold text-dark border-b pb-2">Your Profile</h3>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age Group</label>
          <select
            id="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm`}
          >
            <option value="" disabled>Select your age</option>
            {AGE_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area/Region</label>
          <input
            type="text"
            id="area"
            name="area"
            value={profile.area}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm`}
          />
          {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div className="text-right">
          <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors">
            Start Assessment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
