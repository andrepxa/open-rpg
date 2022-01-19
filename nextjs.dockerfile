FROM node:alpine

WORKDIR /usr/src/open-rpg

COPY package*.json ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "next", "dev"]