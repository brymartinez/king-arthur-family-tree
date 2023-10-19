import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Children implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    return this.traversePreOrder(name, this.tree.root);
  }

  private traversePreOrder(name: string, root: TreeNode<Person>, result = []) {
    if (root.data.name === name || root.data.spouse.name === name) {
      return root.children.map((p) => {
        return {
          ...p.root.data,
        };
      });
    } else {
      for (const child of root.children) {
        this.traversePreOrder(name, child.root, result);
      }
    }
  }
}
