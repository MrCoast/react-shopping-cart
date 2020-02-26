+ 1. Change src/components/Shelf/ProductList/Product/index.js <Thumb> src from .jpg to .webp
+ 2. Different images in src/static/products can be used
+ 3. Toggle Expires HTTP header for static files in Express - config/webpackDevServer.config.js
- 4. Toggle Express API response speed - server/app.js
* 5. Toggle HTTP/2
- 6. Toggle gzip compression for frontend - config/webpackDevServer.config.js
- 7. Toggle gzip compression for backend - server/app.js
+ 8. Toggle js minify feature - scripts/start.js - isJsMinificationEnabled = true


__________________
bulk resize images
find . -iname '*.jpg' -exec convert \{} -verbose -resize 400%\> \{} \;
