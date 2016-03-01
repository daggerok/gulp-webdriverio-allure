import gulp         from 'gulp'
import http         from 'http'
import connect      from 'connect'
import serveStatic  from 'serve-static'
import selenium     from 'selenium-standalone'
import webdriver    from 'gulp-webdriver'

export {
  gulp,
  http,
  connect,
  serveStatic,
  selenium,
  webdriver
}

export let
port      = 9000,
buildDir  = 'test/fixtures',
e2eConfig = 'wdio.conf.js'
