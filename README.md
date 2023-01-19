# postgraphile-ts

Projeto de API GraphQL utilizando a combinação do Typescript, Postgraphile e PostgreSQL.

## Dependencias

-   Node `LTS`;
-   PostgreSQL `Latest`;

## Configurações

Criar arquivo `.env` com:

```.env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=docker
POSTGRES_DB=postgraphile
POSTGRES_HOST=localhost
POSTGRES_SCHEMA=postgraphile
POSTGRES_PORT=5432
```

## CLI

Comandos de apoio a aplicação.

### Postgraphile

```sh
node ./dist/cli.js --help
```

ou

```sh
ts-node -r tsconfig-paths/register ./src/cli.ts --help
```

### DB Migrate

```sh
node ./node_modules/db-migrate/bin/db-migrate
```

Foi estabelecido que as migrates serão em SQL para facilitar a execução e a criação:

```sh
node ./node_modules/db-migrate/bin/db-migrate create primeiraMigration --sql-file
```

## Anotações

-   [Postgraphile Creating Roles](https://www.graphile.org/postgraphile/required-knowledge/#creating-roles)
-   [Postgraphile Security](https://www.graphile.org/postgraphile/security/)
-   [DB-Migrate](https://db-migrate.readthedocs.io/)
