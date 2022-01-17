---
title: Look ma, no WordPress and other anecdotes about this build.
image: images/img_0606.JPG
description: This is an experimental Hugo build.

---
### BUILD

This is an experimental [HUGO](https://gohugo.io/ "Hugo") build. The design is derived on a theme by ThemeFisher called [Persian](https://themes.gohugo.io/themes/persian-hugo "Persian"). I appreciated the typography, changed a few things and rebranded it as Ponder. The dominant typeface is Playfair.

### CMS

Maintenance happens through a headless CMS by [forestry.io](https://forestry.io "Forestry CMS"). All of the content pages are Markdown files and the code is hosted in my [GitHub](https://github.com/tripdog/ "GitHub") repo. When commits are made, a rebuild takes place and the blog is refreshed via the hosted GitHub repo. Becuase the whole enchilada is rebuilt everytime there's a new commit, there is a small lag between making the change and seeing them on the front-end.

### HOSTING

The whole thing is deployed via [Netlify](https://www.netlify.com/ "Netlify").

### IMAGES

All images are from [Unsplash](https://unsplash.com "Unsplash"). They are saved right into the GH repo but could just as easily be placed on Cloudinary, S3, Spaces or what have you.