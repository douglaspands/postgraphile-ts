import childProcess from 'child_process';
import logging from '@app/core/logging';

const logger = logging.getLogger('migrateCommand');

function criarMigracao(name: string): void {
    childProcess.exec(
        `node ./node_modules/db-migrate/bin/db-migrate create ${name} --sql-file`,
        (error, stdout, stderr) => {
            if (error) {
                logger.error(`\n${error.message}`, error);
            } else if (stderr) {
                logger.error(`\n${stderr}`);
            } else {
                logger.info(`\n${stdout}`);
            }
        },
    );
}

function atualizarBancoDados(): void {
    childProcess.exec(
        `node ./node_modules/db-migrate/bin/db-migrate up`,
        (error, stdout, stderr) => {
            if (error) {
                logger.error(`\n${error.message}`, error);
            } else if (stderr) {
                logger.error(`\n${stderr}`);
            } else {
                logger.info(`\n${stdout}`);
            }
        },
    );
}

export default { criarMigracao, atualizarBancoDados };
