# Ecommerce Tech Store

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

First, you must have Docker installed on your machine. Then:

1. Clone the repo 
2. Initialize environment variables in `.env.development` file.  
3. `cd` to the repo in your terminal and run:
```
docker compose up -d
```
It uses `docker-compose.yml` in root directory and do the following:
- Create a volume `db-data` to persist data for Postgres.
- Create an internal network for communication between service (service refer to other service by name, for example, inside `adminer` call database with `db`).
- Start Next.js app using `Dockerfile` in root directory.  
`/src` and `/public` are mounted to the container, so any changes on the host will show up in the container.
- Start a Postgres database and attach its' data to the volume `db-data`.
- Start Adminer for visualizing data in database.
4. Now enter `localhost:3000` and `localhost:8080` in your browser. It will show up Next.js app and Adminer panel respectively.

To shut down containers, run:
```
docker compose down
``` 


## Production
It uses Vercel for production
