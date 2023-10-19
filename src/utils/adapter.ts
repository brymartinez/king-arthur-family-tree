import { Person } from '../relationships/relationship';

export class Adapter {
  transform(person: Person[]): string {
    if (!person.length) return 'NONE';
    return person.map((p) => p.name).join(' ');
  }
}
