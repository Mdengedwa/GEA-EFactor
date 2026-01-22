
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Scores } from '../types';
import { COMPETENCIES } from '../constants';

interface RadarChartComponentProps {
  scores: Scores;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ scores }) => {
  const chartData = COMPETENCIES.map(competency => ({
    subject: competency.title.replace(' & ', ' & \n'),
    score: scores[competency.id],
    fullMark: 7,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#4B5563', fontSize: 12 }} 
        />
        <PolarRadiusAxis angle={30} domain={[0, 7]} tickCount={8} />
        <Radar 
            name="Your Average Score" 
            dataKey="score" 
            stroke="#1E40AF" 
            fill="#3B82F6" 
            fillOpacity={0.6} 
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
          }}
          formatter={(value: number) => value.toFixed(1)}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
