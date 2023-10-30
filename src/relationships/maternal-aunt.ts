import { PersonNotFoundError } from '../errors/error';
import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class MaternalAunt implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    return [];
  }
}
