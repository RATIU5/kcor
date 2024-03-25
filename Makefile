dev:
		docker compose -f "docker-compose.yml" up

prettier:
		cd next && npm run prettier

test:
		cd next && npm run test

install:
		cd next && npm install && cd .. && cd payload && npm install

setup:
		cp .env.example .env