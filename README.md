# Kcor Theme

## Prerequisites

- [Node.js 18+](https://nodejs.org/en/)
- [Yarn 1.20+](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

## Installation

1. Clone the repository
2. Run the following command to copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

3. Fill out the `.env` file with the necessary information


## Development

1. Check out a new branch
2. Run the following command to start the docker containers:

```
docker compose -f "docker-compose.dev.yml" up -d
```

## Deployment

1. Run the following command to build the production image:

```
docker compose -f "docker-compose.prod.yml" build
```

2. Run the following command to start the production containers:

```
docker compose -f "docker-compose.prod.yml" up -d
```