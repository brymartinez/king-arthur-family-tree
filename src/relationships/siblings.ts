import { PersonNotFoundError } from '../errors/error';
import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Siblings implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    const siblings = this.find(name);
    if (!siblings.length) throw new PersonNotFoundError();
    return siblings;
  }

  // find mother, and print out children sans name
  private find(name: string): Person[] {
    let found = false;

    let result: Person[] = [];

    const traverse = (node: TreeNode<Person>) => {
      if (node.children.length && !found) {
        for (let i = 0; i < node.children.length; i++) {
          const currentNode = node.children[i].root;
          traverse(currentNode);
          if (
            currentNode.children.findIndex(
              (child) => child.root.data.name === name,
            ) > -1
          ) {
            found = true;
            result = currentNode.children
              .filter((child) => {
                return child.root.data.name !== name;
              })
              .map((c) => c.root.data);
            found = true;
          }
        }
      }
    };
    traverse(this.tree.root);

    return result;
  }
}
