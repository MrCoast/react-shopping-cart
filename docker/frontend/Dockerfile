FROM node:10 AS builder
COPY . /app
WORKDIR /app
RUN npm i --no-shrinkwrap --no-package-lock
ARG API_URL=http://localhost:8001/api/products
ENV API_URL=$API_URL
RUN npm run build

FROM nginx:stable-alpine-slim
COPY --from=builder /app/build /usr/share/nginx/html
