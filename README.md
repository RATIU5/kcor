# Kcor Theme

## Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js 18+](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository
2. Run the following command to copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

3. Fill out the `.env` file with the necessary information
4. Run the following commands install the dependencies:

```bash
cd next && npm install
cd ..
cd payload && npm install
cd ..
```

## Development

1. Check out a new branch
2. Run the following command to start the docker containers:

```
docker compose -f "docker-compose.dev.yml" up
```

## Deployment

1. Run the following command to build the production image:

```
docker compose -f "docker-compose.prod.yml" build
```

2. Run the following command to start the production containers:

```
docker compose -f "docker-compose.prod.yml" up
```

## How do I ...?

### Install a New Dev Dependency

If you want to install `express` to the `next` project, run the folowing command:

```bash
docker compose -f "docker-compose.dev.yml" run --rm next npm install -d express
# ---------------------------------^-----------------^^---^^^^^^^^^^^^^^^^^^^^-
```

### Install a New Production Dependency

If you want to install `express` to the `next` project, run the folowing command:

```bash
docker compose -f "docker-compose.prod.yml" run --rm next npm install express
# ---------------------------------^^-----------------^^---^^^^^^^^^^^^^^^^^-
```
