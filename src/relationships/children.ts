import { PersonNotFoundError } from '../errors/error';
import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Children implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    const children = this.find(name);
    if (!children.length) throw new PersonNotFoundError();
    return children;
  }

  private find(name: string): Person[] {
    let found = false;

    let result: Person[] = [];

    const traverse = (node: TreeNode<Person>) => {
      if (node.children.length && !found) {
        for (let i = 0; i < node.children.length; i++) {
          const currentNode = node.children[i].root;
          traverse(currentNode);
          if (
            currentNode.data.name === name ||
            currentNode.data.spouse?.name === name
          ) {
            result = currentNode.children.map((child) => {
              return child.root.data;
            });
            found = true;
          }
        }
      }
    };

    traverse(this.tree.root);

    return result;
  }
}
