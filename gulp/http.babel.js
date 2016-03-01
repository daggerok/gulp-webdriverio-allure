import {gulp, http, connect, serveStatic, port, buildDir} from './common.babel'

let httpServer;

gulp.task('http', (done) => {
  // 'buildDir' is where application index.html, styles and scripts contains
  let app = connect().use(serveStatic(buildDir))

  httpServer = http.createServer(app).listen(port, done)
  console.log(`listening localhost:${port}...`)
})

export { httpServer }
