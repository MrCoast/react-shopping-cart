+ 1. Change src/components/Shelf/ProductList/Product/index.js <Thumb> src from .jpg to .webp
+ 2. Different images in src/static/products can be used
* 3. Toggle Expires HTTP header for static files in Express
- 4. Toggle Express API response speed
* 5. Toggle HTTP/2
+ 6. Toggle gzip compression
+ 7. Toggle js minify feature


__________________
bulk resize images
find . -iname '*.jpg' -exec convert \{} -verbose -resize 400%\> \{} \;
