// import { Command, OptionValues } from 'commander';
// import logging from '@core/logging';
// const logger = logging.getLogger('registerCommand');
import { Command } from 'commander';
import migrateCommand from '@app/commands/migrate';

function initApp(app: Command): void {
    app.command('migrate')
        .description('Executar script de migração')
        .action(() => {
            migrateCommand.migrate();
        });
}

export default { initApp };
