# syntax=docker/dockerfile:1

FROM node:12.14.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
EXPOSE 5000
COPY . .

CMD [ "node", "index.js" ]
