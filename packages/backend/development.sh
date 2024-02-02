MODE=$1

docker-compose \
--env-file .env.development \
-f docker-compose.development.yml \
-p sourtimes-backend-development $MODE