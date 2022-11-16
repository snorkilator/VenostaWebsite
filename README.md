
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

# To make css smaller

Take a look at the scss bootstrap. There is a main file in node_modules that tells the scss compiler what to import
Less modules, less css output
Don't break functionablity
Ideally don't edit anything in node directory
Try importing required files directly from styles.scss file in scss directory