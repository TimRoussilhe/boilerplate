# Framework
Frmework built on top of backbone.

## Features

- Node and NPM
- Webpack
- Stylus
- LiveServer

#### webpack
check the webpack configuration. Renders JS, and compiles into a common.js file.

### Setup

run all commands from the root of the project folder.
```
npm install stylus -g
npm install
```

### watch folders and live reload.
```
npm run dev
```

### Build
```	npm run build ```

Outputs to `/build`

### Linting
`Javascript` linted with [Eslint](http://eslint.org/)

Using google style + few custom rules
Configuration in `.eslintrc.json`
Can be run as task or direclty trought webâck ( commented here )

	npm run lint

### generate iconfont with gulp.
```
npm run build:iconfont
```

### generate sprites
```
npm run build:png2sprite
```

###Server
The framework support server-side rendering.
Recommended to use Express but any back-end with templating supported by javascript will do the job ( twig is great ).

## Environments

- **URL** - Coming soon

## Folder structure
```
All source files that are watched and built/deployed
| - src/
| --- src/css/
| --- src/js/

```

## JS Framework
MVC kinda

## CSS Framework
Stylus
Using Reflex Flex grid ( ported from SASS to Stylus manually )
[Documentation here](http://leejordan.github.io/reflex/docs/)


# potential compatibility errors

Flag any new technologies being used (i.e. :before :after, webgl, Array.prototype.every )
