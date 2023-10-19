import { Tree } from './data-structure/tree';
import { Person } from './relationships/relationship';

(async () => {
  const tree = new Tree<Person>();
  const d0: Tree<Person>[] = [];
  const d1: Tree<Person>[] = [];
  const d2: Tree<Person>[] = [];
  const d3: Tree<Person>[] = [];

  d0.push(
    tree.insert({
      name: 'Queen Margret',
      gender: 'Female',
      spouse: { name: 'King Arthur', gender: 'Male' },
    }),
  );

  d1.push(
    tree.insert({
      name: 'Bill',
      gender: 'Male',
      spouse: { name: 'Flora', gender: 'Female' },
    }),
    tree.insert({
      name: 'Charlie',
      gender: 'Male',
    }),
    tree.insert({
      name: 'Percy',
      gender: 'Male',
      spouse: {
        name: 'Audrey',
        gender: 'Female',
      },
    }),
    tree.insert({
      name: 'Ronald',
      gender: 'Male',
      spouse: {
        name: 'Helen',
        gender: 'Female',
      },
    }),
    tree.insert({
      name: 'Ginerva',
      gender: 'Female',
      spouse: {
        name: 'Harry',
        gender: 'Male',
      },
    }),
  );

  d2.push(
    d1[0].insert({
      name: 'Victoire',
      gender: 'Female',
      spouse: { name: 'Ted', gender: 'Male' },
    }),
    d1[0].insert({
      name: 'Dominique',
      gender: 'Female',
    }),
    d1[0].insert({
      name: 'Louis',
      gender: 'Male',
    }),
    d1[2].insert({
      name: 'Molly',
      gender: 'Female',
    }),
    d1[2].insert({
      name: 'Lucy',
      gender: 'Female',
    }),
    d1[3].insert({
      name: 'Rose',
      gender: 'Female',
      spouse: {
        name: 'Malfoy',
        gender: 'Male',
      },
    }),
    d1[3].insert({
      name: 'Hugo',
      gender: 'Male',
    }),
    d1[4].insert({
      name: 'James',
      gender: 'Male',
      spouse: {
        name: 'Darcy',
        gender: 'Female',
      },
    }),
    d1[4].insert({
      name: 'Albus',
      gender: 'Male',
      spouse: {
        name: 'Alice',
        gender: 'Female',
      },
    }),
    d1[4].insert({
      name: 'Lily',
      gender: 'Female',
    }),
  );

  d3.push(
    d2[0].insert({
      name: 'Remus',
      gender: 'Male',
    }),
    d2[5].insert({
      name: 'Draco',
      gender: 'Male',
    }),
    d2[5].insert({
      name: 'Aster',
      gender: 'Female',
    }),
    d2[7].insert({
      name: 'William',
      gender: 'Male',
    }),
    d2[8].insert({
      name: 'Ron',
      gender: 'Male',
    }),
    d2[8].insert({
      name: 'Ginny',
      gender: 'Female',
    }),
  );
})();
