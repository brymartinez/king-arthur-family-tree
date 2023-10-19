export class Person {
  name: string;
  gender: Gender;
  spouse?: {
    name: string;
    gender: Gender;
  };
}

export type Gender = 'Male' | 'Female';

export interface Relationship {
  get(name: string): Person[];
}
