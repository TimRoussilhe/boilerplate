# JULIEN RENVOYE FOLIO 2017
######  Backbone / Webpack / Express / Stylus / ES6 ...

- **Creator:** Timothee Roussilhe
- **Twitter:** [@timroussilhe](https://twitter.com/TimRoussilhe)

![]( https://media.giphy.com/media/Um3ljJl8jrnHy/giphy.gif)
___

## Features
- Isomorphic rendering
- Express server
- Gulp task to manage dev server and NPM
- Stylus & CSS injection
- Autoprefixer
- Browsersync
- Javascript custom Framework
- Webpack
- DevServer ( Browsersync )
- ES6 supported via babel

# JS Framework
 - Framework built on top of backbone.
 - Collection of abstract classes and manager ( baseView & Pages management )
 - Using es2015 via babel

---
Here are the main folders/files used for by the framework
 ```
/views
    /pages
    /components
/models
/controller
/abstract
/router
/events
```

##### **BaseView lifecycle**
---
```javascript
    Initialize ( constructor )
    render => renderTemplate => onRendered
    init => initDOM => onDOMInit
        => setupDOM
        => initTL
        => bindEvents
        => onInit
    show => onShown
    hide => onHidden
    dispose
        => undelegateEvents
        => stopListening
        => unbindEvents
        => destroyTL
        => remove ( destroy view native backbone )
```

##### **State Management**
`/state/`
---
There is two nice features here. We have global state management ( extended a backbone model ), that handle callbacks globally.

And a globalstore that is responsible of the UI element ( store and dispach viewport change, scroll value, raq callbacks etc...)
```
import GlobalStore from 'state/globalStore';
GlobalStore.set('scrollY', scrollY);

// Anywhere in your app
GlobalStore.on('change:scrollY', () => this.scrollUpdate());
```

I could potentially merge those but i like difference between Data State and pure UI.

##### ** HACK: Remember to pass backbone default value us in the native constructor in your view constructer as follow :**
---
```javascript
_.defaults(options, {
	el: options.el,
	// These options are assigned to the instance by Backbone
	events: {
	 'click a': 'onLinkClicked'
	}
});
```

## Helpers
`/helpers`
contains all useful classes

## Config
`/config`

## Services
`/services`
Contain Analytics and share services

# CSS / Stylus
CSS framework is build with Stylus.

## Folder structure

```
./
├── js/
├── css/
│   ├── iconfont-template/
│   │   ├── iconfont-tamplate.css
│   ├── media/
│   │   ├── 922px/
│   │   │   ├── All files that need to be included in the 922px media query
│   │   ├── default
│   │   ├── All files that need to be included in the default media query
│   ├── utils/
│   │   ├── _grid
│   │   ├── _mixins.styl
│   ├── variables/
│   │   ├── _variables.styl
│   │   ├── _fonts.styl
│   │   ├── _icons.styl
│   │   ├── _zindexes.styl
│   ├── _reset.styl
│   ├── app.styl
```
## Usage

The idea for this structure was to try and cover all screen sizes in the most logic way. As you can see in the app.styl and the folder structure there are 5 breakpoints defined. The idea is that whenever you need a breakpoint for a page you create a file and add it in the right folder that represents the screen size you need.

## Best practices

Render blocking CSS

By default CSS is treated as a render blocking resource, which means that the browser will hold rendering of any processed content until the CSSOM is constructed. Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering
<link href="style.css" rel="stylesheet" media="all">

## Declaration order

Declarations should be consistently ordered in accordance with this simple principle. For example:
```
.selector {
    /* Positioning */
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Display & Box model */
    display: block;
    overlow: hidden;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid #333;
    margin: 10px;

    /* Other */
    background: #000;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    text-align: right;
}
```
## Z-indexes

Define all the z-indexes in the variables/_zindexes.styl file
```
zIndexes = {
    header:   10,
    menu:     5,
    footer:   2
}
```

## Variables
Centralize all the variables (colors, font-sizes, easing, breakpoints, etc...) in the variables/_variables.styl file
```
$breakpoint_small        = 480px;
$aquablue                = #9eefe1;
$cubic-ease-in-out       = cubic-bezier(0.645, 0.045, 0.355, 1.000);
```
```
/* Usage */
.selector {
   color: $aquablue;
}
```

## Mixins

In the utils/_mixins.styl file we have grouped some common used classes so we don't repeat that code over and over again. For example.
```
zindex(elem){
	z-index z-index-array[elem]
}
```
## Grid
Using Reflex Flex grid ( ported from SASS to Stylus manually )
[Documentation here](http://leejordan.github.io/reflex/docs/)

## Conventions

[SUIT CSS:](https://suitcss.github.io/)
.u-utility
.ComponentName
.ComponentName-descendentName
.ComponentName--modifierName
.ComponentName.is-stateOfComponent

# HTML

## Conventions
[HTML Codeguide](http://codeguide.co/#html)

##Tooling
templating engine: [Handlebars](http://handlebarsjs.com/)

## Handlebars Helpers
- Print JSON
- [If cond](http://stackoverflow.com/a/16315366)
- ...

# Setup

run all commands from the root of the project folder.
```
npm install stylus -g
npm install
```
Or yarn ;)
```
yarn add stylus -g
yarn add
```

### Dev
```
npm run start
```

Outputs to `/public`
- Create svgs json sprite
- Lauch dev server
- Watch and build javascript via webpack
- Watch, build and inject stylus via gulp
- Run node server and watch via nodemon

### Build
```
npm run build
```

Outputs to `/build`
- Build sprite
- Build custom modernizr
- Generate static html files
- Built app.css
- Autoprefix et minify ( using cssnano safe )
- Run webpack with production setup
- Lint JS output
- Copy Assets from .public to ./build
- Launch dev-server on port 4000 to check that everything is OK

### Gulp tasks

$ gulp - development mode

Svgs to Json
Nodemon
Stylus
BrowserSync (local server)
+ watch for changes in ./svgs, .styl

$ gulp - build mode
Optimize Images
Move assets

### Linting
`Javascript` linted with [Eslint](http://eslint.org/)

Using google style + few custom rules
Configuration in `.eslintrc.json`
Can be run as task or direclty trought webâck ( commented here )

	npm run lint

### Icons

Tryng a new symple workflow for icons using inline svg
    - Place your svgs inside the public/assets/svgs
    - npm run svgs-to-jsons
    - Your svg will be available in your template as : {{{@root.svgs.facebook}}}

###Server

## Environments
- **LOCAL**
    - **BROWSERSYNC** -- http://localhost:7000
    - **DEV** -- http://localhost:4040
    - **PRODUCTION** -- http://localhost:4000
- **URL** - Coming soon

## Folder structure
```
All source files that are watched and built/deployed
| - src/
| --- src/css/
| --- src/js/

```

## git

- [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
