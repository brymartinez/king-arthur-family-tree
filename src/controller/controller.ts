import { Adapter } from '../utils/adapter';
import { Tree, TreeNode } from '../data-structure/tree';
import {
  Gender,
  Person,
  RelationshipObject,
} from '../relationships/relationship';
import { PersonNotFoundError } from '../errors/error';

export enum Command {
  ADD_CHILD = 'ADD_CHILD',
  GET_RELATIONSHIP = 'GET_RELATIONSHIP',
}

export class Controller {
  constructor(private tree: Tree<Person>, private adapter: Adapter) {}

  do(cmd: string, args: string[]) {
    try {
      switch (cmd) {
        case 'ADD_CHILD':
          const mother = args[0];
          const child = args[1];
          const gender = args[2] as Gender;
          this.addChild(child, gender, mother);
          console.log('CHILD_ADDED');
          break;
        case 'GET_RELATIONSHIP':
          const member = args[0];
          const rel = args[1].toLowerCase();
          const result = RelationshipObject(this.tree)[rel].get(member);
          console.log(
            this.adapter.transform(result) ?? new PersonNotFoundError().message,
          );
          break;
      }
    } catch (e) {
      console.error(e);
      console.log(e.message);
    }
  }

  private addChild(name: string, gender: Gender, mother: string) {
    let found = false;

    let result: Tree<Person>;

    const traverse = (node: TreeNode<Person>) => {
      if (node.children.length && !found) {
        for (let i = 0; i < node.children.length; i++) {
          const currentNode = node.children[i].root;
          traverse(currentNode);
          if (
            currentNode.data.name === mother ||
            currentNode.data.spouse?.name === mother
          ) {
            result = node.children[i];

            found = true;
          }
        }
      }
    };

    traverse(this.tree.root);
    result.insert({
      name: name,
      gender: gender,
    });
    return result;
  }
}
