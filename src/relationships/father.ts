import { PersonNotFoundError } from '../errors/error';
import { Tree, TreeNode } from '../data-structure/tree';
import { Person, Relationship } from './relationship';

export class Father implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    const father = this.find(name);
    if (!father) throw new PersonNotFoundError();
    return [father];
  }

  private find(name: string): Person {
    let found = false;

    let result: Person;

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
            result =
              currentNode.data.gender === 'Male'
                ? currentNode.data
                : currentNode.data.spouse;
          }
        }
      }
    };

    traverse(this.tree.root);

    return result;
  }
}
