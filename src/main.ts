import { Command, Controller } from './controller/controller';
import { Tree } from './data-structure/tree';
import { Person } from './relationships/relationship';
import { Adapter } from './utils/adapter';
import { bootstrap } from './utils/bootstrap';
import fs from 'fs';

(async () => {
  const tree = bootstrap(new Tree<Person>());

  const fileName = process.argv[2];
  const file = fs.readFileSync(fileName, { encoding: 'utf8' });
  const commandsText = file.split('\n');

  // initialize controller
  const controller = new Controller(tree, new Adapter());

  for (const commands of commandsText) {
    try {
      const splitText = commands.split(' ');
      const command = splitText[0] as Command;
      controller.do(command, splitText.slice(1, splitText.length));
    } catch (e) {
      console.log(e.message);
    }
  }
})();
