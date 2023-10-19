import { Person } from '../relationships/relationship';

export interface TreeNode<Person> {
  data: Person;
  children: Tree<Person>[];
}

export class Tree<T> {
  root: TreeNode<Person> | undefined = undefined;
  length = 0;
  public insert(data: Person): Tree<T> {
    if (!this.root) {
      this.root = { data, children: [] };
      return this;
    }

    const child = new Tree<T>();

    this.root.children.push(child.insert(data));
    this.length++;
    return child;
  }
}
