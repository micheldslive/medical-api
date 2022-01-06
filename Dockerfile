FROM node:alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]