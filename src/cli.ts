import figlet from 'figlet';
import { Command } from 'commander';
import command from '@app/register/command';
import config from '@config';

console.log(figlet.textSync(config.APP_NAME));

const program = new Command();
program.version(config.APP_VERSION);
program.description(config.APP_CLI_DESCRIPTION);
command.initApp(program);
program.parse();
