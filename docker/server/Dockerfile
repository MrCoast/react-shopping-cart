FROM node:10
COPY ./server /app/server
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm i --no-shrinkwrap --no-package-lock
EXPOSE 8001
CMD [ "npm", "run", "server" ]
