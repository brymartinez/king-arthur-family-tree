import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Father implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    return [this.traversePreOrder(name, this.tree.root)];
  }

  private traversePreOrder(name: string, root: TreeNode<Person>, result = []) {
    for (const child of root.children) {
      if (child.root.data.name === name) {
        return root.data.gender === 'Male' ? root.data : root.data.spouse;
      } else {
        this.traversePreOrder(name, child.root, result);
      }
    }
  }
}
