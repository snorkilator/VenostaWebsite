
# To build for GH pages

Use Vite to build it:

`npm run build`

move the css and js files out of ./docs/venostaWebsite into parent director:

`mv ./docs/VenostaWebsite/index.XXXXXX.css docs`

and

`mv ./docs/VenostaWebsite/index.XXXXXX.js docs`

delete the empty directory:

`rm -r ./docs/VenostaWebsite`

