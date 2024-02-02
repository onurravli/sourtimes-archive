MODE=$1

docker-compose \
--env-file .env.production \
-f docker-compose.production.yml \
-p sourtimes-backend-production $MODE