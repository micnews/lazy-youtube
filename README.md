# lazy-youtube.js

## Description

This is a JavaScript module to lazy load Youtube videos, Browserify/Node.js-style fork of https://github.com/tylerpearson/lazyYT, that does not depend on jQuery. On the initial load, the `div` will be appended by a preview `img` of the video. On click of the image, the preview `img` will be replaced by the autoplaying `iframe` Youtube video.

## Setup

```bash
npm install lazy-youtube
```

HTML:

```html
<div class="lazyYT" data-youtube-id="_oEA18Y8gM0" ></div>
```

JavaScript:

```js
var lazyYoutube = require('lazy-youtube');

// Init element
lazyYoutube(element);
```

CSS:

Add `lazyyt.css` into the page

## License

(CC) [Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/)
