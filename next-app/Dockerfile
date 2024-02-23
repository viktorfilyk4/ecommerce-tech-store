# This Dockerfile is for development purposes

FROM node:18-alpine

# `DATABASE_URL` comes from docker-compose.yml
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /next-app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]