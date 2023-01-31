import util from 'util';
import childProcess from 'child_process';
import logging from '@core/logging';

const logger = logging.getLogger('migrateCommand');
const exec = util.promisify(childProcess.exec);

async function aExec(cmd: string) {
    try {
        const { stdout, stderr } = await exec(cmd);
        if (stderr) {
            logger.warn(`\n${stdout}\n${stderr}`);
        } else {
            logger.info(`\n${stdout}`);
        }
    } catch (err) {
        logger.error(`\n${err}`);
    }
}

export function migrate(): void {
    aExec('./node_modules/.bin/graphile-migrate migrate');
}

export default { migrate };
