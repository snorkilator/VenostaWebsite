
# To build for GH pages

Use Vite to build it:

```shell
npm run build
```

move the css and js files out of ./docs/venostaWebsite into parent director:

```shell
mv ./docs/VenostaWebsite/index.XXXXXX.css docs
```

and

```shell
mv ./docs/VenostaWebsite/index.XXXXXX.js docs
```

delete the empty directory:

```shell
rm -r ./docs/VenostaWebsite
```

