# Jexpresso website

Source for the [Jexpresso](https://github.com/smarras79/Jexpresso) website, live at
https://phsrinivas.github.io/jexpresso-site/

This repository only holds the website. The solver is in
[smarras79/Jexpresso](https://github.com/smarras79/Jexpresso) and the documentation is at
https://smarras79.github.io/Jexpresso/dev/

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `gallery.html` | Gallery page |
| `gallery.js` | The list of gallery images and captions |
| `install.html` | Install steps |
| `about.html` | Team, citation and license |
| `style.css` | Colors, fonts and layout for all pages |

The site is plain HTML and CSS, so there is nothing to build.

## Preview on your computer

From this folder, run:

```bash
python -m http.server 8123
```

Then open http://localhost:8123

## Add an image to the gallery

Add a line to the right section in `gallery.js`:

```js
["file-name.png", "Caption for the image"],
```

The image has to be in the `assets` folder of the main Jexpresso repository.

## Publish a change

The site is deployed with GitHub Pages from the `main` branch. Anything pushed to `main`
goes live a minute or so later.

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## License

Jexpresso is released under the
[Apache License 2.0](https://github.com/smarras79/Jexpresso/blob/master/LICENSE.md).
