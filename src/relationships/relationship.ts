import { Tree } from '../data-structure/tree';
import { Children } from './children';
import { Father } from './father';
import { MaternalAunt } from './maternal-aunt';
import { Mother } from './mother';
import { Siblings } from './siblings';

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

export const RelationshipObject: (tree: Tree<Person>) => {
  [x: string]: Relationship;
} = (tree: Tree<Person>) => {
  return {
    mother: new Mother(tree),
    father: new Father(tree),
    children: new Children(tree),
    siblings: new Siblings(tree),
    'maternal-aunt': new MaternalAunt(tree),
  };
};
