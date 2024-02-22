# for development

FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY .eslintrc.json components.json next.config.js postcss.config.js tailwind.config.ts tsconfig.json ./

RUN npm ci

CMD ["npm", "run", "dev"]