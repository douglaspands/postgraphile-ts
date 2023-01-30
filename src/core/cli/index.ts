import figlet from 'figlet';
import { Command } from 'commander';
import command from '@register/command';
import config from '@config';

export const CLI = class {
    #app: Command;

    constructor() {
        this.#app = new Command();
        this.#app.version(config.APP_VERSION);
        this.#app.description(config.APP_CLI_DESCRIPTION);
        command.initApp(this.#app);
    }
    run() {
        console.log(figlet.textSync(config.APP_NAME));
        this.#app.parse();
    }
};

export default { CLI };
