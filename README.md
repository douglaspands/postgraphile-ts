# postgraphile-ts

Projeto de API GraphQL utilizando a combinação do Typescript, Postgraphile e PostgreSQL.

## Motivação

Tudo na vida precisa de motivação e vejo muito potencial na biblioteca Postgraphile, como acelerador de novas implementações e contribuindo para a funcionalidade do negocio entrar em produção de forma mais rapida e descomplicada.
Estou desenvolvendo um backend completo e organizado para agilizar novos negocios, e deixarei publico como referencia.

## Dependencias

-   Node `LTS`;
-   PostgreSQL `Latest`;

## Configurações Iniciais

### Variaveis de ambiente

Criar arquivo `.env` com:

```sh
# App
LOG_LEVEL=debug

# PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=docker
POSTGRES_DB=postgres
POSTGRES_HOST=localhost
POSTGRES_SCHEMA=public
POSTGRES_PORT=5432

# Graphile
GRAPHILE_DB=postgraphile
GRAPHILE_USER=app_user
GRAPHILE_PASSWORD=7mF0uXv82qy8
GRAPHILE_SCHEMA=app_public
GRAPHILE_ENV=development

# Migrate
MIGRATE_DB=postgraphile
MIGRATE_USER=super_user
MIGRATE_PASSWORD=lkja0xKHJK9u

# Connection String
GRAPHILE_DATABASE_URL=postgres://${GRAPHILE_USER}:${GRAPHILE_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${GRAPHILE_DB}
DATABASE_URL=postgres://${MIGRATE_USER}:${MIGRATE_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${MIGRATE_DB}
SHADOW_DATABASE_URL=postgres://${MIGRATE_USER}:${MIGRATE_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${MIGRATE_DB}_shadow
ROOT_DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}

# JWT
JWT_TOKEN_IDENTIFIER=app_public.jwt_token
JWT_SECRET=Q4hBq9c4h18c
```

Em produção, o `.env` é necessario apenas:

```sh
# Graphile
GRAPHILE_DB=postgraphile
GRAPHILE_USER=appuser
GRAPHILE_PASSWORD=7mF0uXv82qy8
GRAPHILE_SCHEMA=app_private
GRAPHILE_ENV=development

# JWT
JWT_TOKEN_IDENTIFIER=app_public.jwt_token
JWT_SECRET=Q4hBq9c4h18c

# DB String Connection
DATABASE_URL=postgres://${GRAPHILE_USER}:${GRAPHILE_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${GRAPHILE_DB}
```

### DB - Primeiros passos

1 - Criar role com login `app_user` com a senha `123456`;
2 - Criar os databases: `postgraphile` e `postgraphile_shadow` com o owner `app_user`;

## Migrate

```sh
./node_modules/.bin/graphile-migrate migrate
```

> Para saber mais: [Graphile-Migrate](https://github.com/graphile/migrate)

## CLI

Comandos de apoio a aplicação.

```sh
ts-node -r tsconfig-paths/register ./src/cli.ts --help
```

> Instalar o **ts-node**: `npm i -g ts-node`

Ou, após compilado:

```sh
node ./dist/cli.js --help
```

## Anotações

### Bibliotecas

-   [Postgraphile Library](https://www.graphile.org/postgraphile/usage-library/)
-   [Graphile-Migrate](https://github.com/graphile/migrate)

### Orientações e Dicas

-   [Postgraphile Creating Roles](https://www.graphile.org/postgraphile/required-knowledge/#creating-roles)
-   [Postgraphile Security](https://www.graphile.org/postgraphile/security/)
