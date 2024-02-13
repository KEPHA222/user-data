FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js

COPY app ./app
COPY components ./components
COPY models ./models
COPY public ./public
COPY styles ./styles
COPY utils ./utils

CMD ["npm", "run", "dev"]
