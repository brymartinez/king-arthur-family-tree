import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Siblings implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    return this.breadthFirst(name, this.tree.root);
  }

  private breadthFirst(name: string, root: TreeNode<Person>): Person[] {
    const queue: (TreeNode<Person> | undefined)[] = [root];

    while (queue.length) {
      const node = queue.pop();

      if (node) {
        for (const child of node.children) {
          if (child.root.data.name === name) {
            return node.children
              .map((p) => {
                return {
                  ...p.root.data,
                };
              })
              .filter((s) => s.name !== name);
          }
          queue.push(child.root);
        }
      }
    }

    return [];
  }
}
