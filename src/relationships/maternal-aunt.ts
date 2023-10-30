import { PersonNotFoundError } from '../errors/error';
import { Tree } from '../data-structure/tree';
import { Person, Relationship } from './relationship';
import { Siblings } from './siblings';
import { Mother } from './mother';

export class MaternalAunt implements Relationship {
  constructor(private tree: Tree<Person>) {}

  get(name: string) {
    const aunt = this.find(name);
    if (!aunt?.length) throw new PersonNotFoundError();
    return aunt;
  }

  private find(name: string): Person[] {
    const motherClass = new Mother(this.tree);
    const mother = motherClass.get(name);
    const siblingsClass = new Siblings(this.tree);
    const siblings = siblingsClass.get(mother[0].name);

    return siblings.filter((sibling) => sibling.gender === 'Female');
  }
}
