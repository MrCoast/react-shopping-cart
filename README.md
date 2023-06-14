# A shopping cart app example written in NodeJS

## Dev mode
To start a project in DEV mode, run:
```
docker compose us
```

## Production mode
Example commands:
```
# API (backend)
docker build . -f ./docker/server/Dockerfile -t react-shopping-cart-backend:latest
docker run --rm -p 8102:8102 -e PORT=8102 react-shopping-cart-backend

# Frontend
docker build . -f ./docker/frontend/Dockerfile --build-arg API_URL=http://localhost:8103/api/products -t react-shopping-cart-frontend:latest
docker run --rm -p 8101:80 react-shopping-cart-frontend
```

## List of experiments related to Google PageSpeed Score

+ 1. Change src/components/Shelf/ProductList/Product/index.js <Thumb> src from .jpg to .webp
+ 2. Different images in src/static/products can be used
+ 3. Toggle Expires HTTP header for static files in Express - config/webpackDevServer.config.js
- 4. Toggle Express API response speed - server/app.js
* 5. Toggle HTTP/2
- 6. Toggle gzip compression for frontend - config/webpackDevServer.config.js
- 7. Toggle gzip compression for backend - server/app.js
+ 8. Toggle js minify feature - scripts/start.js - const config = configFactory('production');

## Useful commands

### bulk resize images
```
find . -iname '*.jpg' -exec convert \{} -verbose -resize 400%\> \{} \;
```



