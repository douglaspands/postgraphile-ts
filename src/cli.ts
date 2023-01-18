import figlet from 'figlet';
import { Command } from 'commander';
import command from '@app/register/command';

console.log(figlet.textSync('POSTGRAPHILE TS'));

const program = new Command();
program.version('1.0.0');
program.description('Comandos de apoio a aplicação.');
command.initApp(program);
program.parse();
