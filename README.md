angular-seed-broccoli
============

Application structure based on [best practices](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) published by the AngularJS team.

However, there are a few deviations from the above - an `app` folder and a `components.js` helper file that simply references component modules.

---

##Dependencies

- [node >= v.0.10.31](http://nodejs.org/download)
- [bower](http://bower.io) `npm install -g bower`
- [broccoli-cli](https://github.com/broccolijs/broccoli) `npm install -g broccoli-cli`

##Setup

```
npm install
```

bower will be run in the `postinstall` `package.json` block

##Run

```
broccoli serve
```

---

###index.html
Script and styles are included using links to the compiled versions of `src`.

####vendor.css
CSS bower_components haven't been implemented yet.
This will be updated at some point when the process for including bower_components is finalized.

####app.css
Concatenated styles found within the `/app` and `/components` folders.
SASS support is planned.


####vendor.js
This is where the javascript bower_components live.

####templates.js
All `.html` files within `/app` and `/components` are parsed with html2js and concatenated into one file.
This is the easiest way to include `.html` files. This especially comes in handy for unit tests that would use  `templateUrl` to `GET` html files.

*Note: Folders within `/components` will be ignored if their name begins with `_`.*

####app.js
All of your application javascript files.
