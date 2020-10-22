FROM node:14-alpine as builder

WORKDIR /app
COPY ./package.json ./

RUN npm install -g expo-cli

RUN npm set progress=false && \
    npm install

RUN yarn add expo

COPY . .

CMD [ "expo", "web" ]

EXPOSE 19006