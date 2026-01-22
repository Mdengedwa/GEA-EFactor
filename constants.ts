
import { Competency } from './types';

export const AGE_OPTIONS = [
  'Under 25',
  '25-34',
  '35-44',
  '45-54',
  '55+',
];

export const COMPETENCIES: Competency[] = [
  {
    id: 'creativity',
    title: 'Creativity & Innovation',
    description: 'The ability to generate novel ideas, identify opportunities, and create new value.',
    statements: [
      'I frequently come up with new ideas and solutions to problems.',
      'I am able to see opportunities that others might miss.',
      'I enjoy experimenting with new approaches and taking calculated risks.',
      'I can adapt existing products or services in innovative ways.',
      'I am resourceful in finding ways to overcome obstacles and constraints.',
    ],
    insight: 'High scorers are idea generators who thrive on novelty and finding new ways to create value. Development in this area could involve structured brainstorming techniques or exposure to diverse industries.',
    developmentUrl: 'https://www.youtube.com/watch?v=pA6yGkAvA0Y&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=2&pp=iAQB'
  },
  {
    id: 'action_orientation',
    title: 'Outcome & Action Orientation',
    description: 'A focus on achieving results, being decisive, and maintaining momentum.',
    statements: [
      'I set clear, challenging goals for myself and my projects.',
      'I am proactive and take initiative rather than waiting to be told what to do.',
      'I am persistent in the face of setbacks and don\'t give up easily.',
      'I focus on execution and getting things done efficiently.',
      'I make decisions quickly, even with incomplete information.',
    ],
    insight: 'This competency is about execution. Strong individuals are finishers who are driven by results. To improve, focus on project management skills and breaking large goals into smaller, actionable steps.',
    developmentUrl: 'https://www.youtube.com/watch?v=w3KKpdrG2oc&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=5&pp=iAQB'
  },
  {
    id: 'negotiation',
    title: 'Assertion & Negotiation',
    description: 'The capacity to communicate needs clearly, influence others, and negotiate favorable outcomes.',
    statements: [
      'I can confidently state my opinion, even when it is unpopular.',
      'I am effective at persuading others to support my ideas.',
      'I can negotiate effectively to achieve win-win outcomes.',
      'I am comfortable handling conflict and difficult conversations.',
      'I can say "no" to requests that are not aligned with my priorities.',
    ],
    insight: 'This reflects your ability to influence the world around you. High scores indicate strong communicators and deal-makers. Practice active listening and understanding others\' motivations to enhance this skill.',
    developmentUrl: 'https://www.youtube.com/watch?v=rQFP4uRr0Dw&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=3&pp=iAQB'
  },
  {
    id: 'marketing',
    title: 'Personal Marketing',
    description: 'The skill of building a personal brand and effectively promoting oneself and one\'s ideas.',
    statements: [
      'I am clear about my personal brand and what I stand for.',
      'I am good at presenting my ideas in a compelling way.',
      'I actively seek opportunities to showcase my skills and achievements.',
      'I am comfortable with public speaking and presenting to groups.',
      'I effectively use storytelling to connect with and influence others.',
    ],
    insight: 'This is about creating visibility and credibility for yourself and your venture. Those strong here are natural promoters. To grow, focus on crafting a compelling narrative and identifying key communication channels.',
    developmentUrl: 'https://www.youtube.com/watch?v=nMvaSozKA4k&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=4&pp=iAQB'
  },
  {
    id: 'finance',
    title: 'Financial Acumen',
    description: 'Understanding and applying financial principles to make sound business decisions.',
    statements: [
      'I understand key financial statements (P&L, Balance Sheet, Cash Flow).',
      'I am able to create and manage a budget effectively.',
      'I understand the key metrics that drive business profitability.',
      'I am confident in making decisions with financial implications.',
      'I understand different funding options and investment principles.',
    ],
    insight: 'Entrepreneurs must speak the language of money. A high score suggests financial literacy. If this is a low area, consider a basic accounting or finance for non-financial managers course.',
    developmentUrl: 'https://www.youtube.com/watch?v=3a2PkBAFkVo&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=10&pp=iAQB'
  },
  {
    id: 'leadership',
    title: 'Leadership & Teamwork',
    description: 'The ability to inspire and guide others towards a common goal and to collaborate effectively.',
    statements: [
      'I can inspire and motivate others to achieve a shared vision.',
      'I am effective at delegating tasks and empowering others.',
      'I am a good listener and value the input of my team members.',
      'I am skilled at building and managing effective teams.',
      'I provide constructive feedback to help others develop.',
    ],
    insight: 'No entrepreneur succeeds alone. This competency is about multiplying your impact through others. Strengths here indicate an ability to build a strong culture. Development involves learning different leadership styles and coaching techniques.',
    developmentUrl: 'https://www.youtube.com/watch?v=RBWjvUgTQsA&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=6&pp=iAQB'
  },
  {
    id: 'mastery',
    title: 'Personal Mastery & Confidence',
    description: 'Self-awareness, resilience, and a commitment to continuous learning and self-improvement.',
    statements: [
      'I have a high degree of self-awareness regarding my strengths and weaknesses.',
      'I am resilient and can bounce back quickly from failures or disappointments.',
      'I actively seek feedback and am committed to personal growth.',
      'I manage my time and energy effectively to maintain high performance.',
      'I maintain a positive attitude, even under pressure.',
    ],
    insight: 'This is the internal foundation of an entrepreneur. High scores suggest strong self-regulation and a growth mindset. Practices like mindfulness, journaling, and seeking mentorship can bolster this area.',
    developmentUrl: 'https://www.youtube.com/watch?v=nMvaSozKA4k&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=4&pp=iAQB'
  },
  {
    id: 'networking',
    title: 'Networking & Selling',
    description: 'The ability to build strategic relationships and effectively sell products, services, or ideas.',
    statements: [
      'I am proactive in building and maintaining my professional network.',
      'I am comfortable initiating conversations with new people.',
      'I am effective at identifying customer needs and aligning my offering.',
      'I am persuasive and can close a sale or secure commitment.',
      'I see networking as an opportunity to create mutual value, not just self-promotion.',
    ],
    insight: 'This is the lifeblood of business development. Strong networkers and sellers build valuable connections and drive revenue. To improve, focus on genuine relationship-building and consultative selling approaches.',
    developmentUrl: 'https://www.youtube.com/watch?v=881l1lDqUA0&list=PLCD_vOJUk19NZO6B9X8bfXv_7IxFKXLgW&index=8&pp=iAQB'
  }
];