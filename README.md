gulp-webdriverio-allure [![build](https://travis-ci.org/daggerok/gulp-webdriverio-allure.svg?branch=master)](https://travis-ci.org/daggerok/gulp-webdriverio-allure)
=======================

Almost automated e2e testing written on es6, using node, gulp, webdriverio and selenium with nice allure report.

supported browsers:

- phantomjs
- firefox
- chrome
- safari


```shell
nvm install 5
nvm use 5

npm i
npm t
npm run killall || true
npm start &

sleep 5
curl localhost:3000/index.html
npm run killall
```

**Note 2**

*this probably won't work on windows family systems out of the box, because of specific UNIX used in package.json (rm, kill, fuser, killall). so use your operation system commands in case*

links:

- http://webdriver.io/guide/plugins/gulp-webdriver.html
- https://www.npmjs.com/package/selenium-standalone
- https://github.com/senchalabs/connect
- http://allure.qatools.ru
- http://gulpjs.com
- https://babeljs.io
- https://www.npmjs.com/package/phantomjs-prebuilt
