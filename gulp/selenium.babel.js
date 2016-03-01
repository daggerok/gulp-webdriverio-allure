import {gulp, selenium} from './common.babel'

let seleniumServer;

gulp.task('selenium', (done) => {
  selenium.install({logger: console.log}, () => {
    selenium.start((err, child) => {
      if (err) { return done(err) }

      seleniumServer = child
      done()
    })
  })
})

export { seleniumServer }
