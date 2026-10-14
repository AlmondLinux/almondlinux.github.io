# almondlinux.github.io

The official website of **Almond Linux**: <https://almondlinux.github.io>

Almond Linux is an independent Linux distribution project in early development. The operating system itself lives in [AlmondLinux/almond-linux](https://github.com/AlmondLinux/almond-linux).

## How the site is built

Plain HTML and one CSS file. No JavaScript, no build step, no frameworks, no cookies, no analytics and no third-party requests: the fonts are hosted here too.

```
index.html          home
about.html          about the project, editions, names, logo
development.html    roadmap, technical direction, development log
downloads.html      editions and release status (no ISO yet)
docs.html           documentation status, license, trademarks, contact
assets/css/         style.css (the whole design) and fonts.css
assets/fonts/       self-hosted fonts with their license files
assets/images/      the official logo, favicon and social preview image
.nojekyll           tells GitHub Pages to serve the files as they are
```

To preview it locally, run a static server in this folder, for example:

```sh
python3 -m http.server 8000
```

then open <http://localhost:8000>.

## Rules for changes

- Never claim something exists or works until it has been built and tested.
- Never add download links until a real, checksummed release exists.
- The logo is only placed on light backgrounds (its outline is dark brown) and is never altered.
- Keep it lightweight and accessible: text must meet WCAG AA contrast, and every page must work at 320px wide.

## License

The site's own code and text are under the [MIT License](LICENSE). The Almond Linux name and logo, and the fonts in `assets/fonts/`, are not covered by it: the fonts keep their own licenses (see `assets/fonts/README.md`).

Almond Linux is not affiliated with Debian, Canonical, Red Hat, AlmaLinux, or any other Linux organization. Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries. Debian is a registered trademark owned by Software in the Public Interest, Inc.
