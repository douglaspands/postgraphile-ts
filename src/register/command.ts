import { Command, OptionValues } from 'commander';
import migrateCommand from '@app/commands/migrate';
import logging from '@app/core/logging';

const logger = logging.getLogger('registerCommand');

function initApp(app: Command): void {
    app.option('-cm, --createMigrate [name]', 'Criar script de migraçãos.')
        .option('-um, --updateMigrate', 'Aplicar scripts de migração.')
        .action((options: OptionValues) => {
            if (options.createMigrate) {
                migrateCommand.criarMigracao(options.createMigrate);
            } else if (options.updateMigrate) {
                migrateCommand.atualizarBancoDados();
            } else {
                logger.warn('Comando não identificado!');
            }
        });
}

export default { initApp };
