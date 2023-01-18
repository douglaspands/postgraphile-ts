import logging from '@app/core/logging';

const logger = logging.getLogger('testCommand');

function teste(arg: string): void {
    logger.info(`Comando -t --test com o valor "${arg}"`);
}

export default teste;
