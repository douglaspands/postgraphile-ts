import { Command, OptionValues } from 'commander';
import testeCommand from '@app/commands/teste';

function initApp(app: Command): void {
    app.option('-t, --test  [value]', 'Comando de teste').action((options: OptionValues) => {
        if (options.test) {
            testeCommand(options.test);
        } else {
            console.log(JSON.stringify(options));
        }
    });
}

export default { initApp };
