
export interface UserProfile {
  name: string;
  age: string;
  area: string;
  email: string;
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  statements: string[];
  insight: string;
  developmentUrl?: string;
}

export interface Answers {
  [competencyId: string]: number[];
}

export interface Scores {
  [competencyId: string]: number;
}