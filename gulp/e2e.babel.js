import {gulp, e2eConfig, webdriver} from './common.babel'
import {seleniumServer} from './selenium.babel'

gulp.task('e2e', ['http', 'selenium'], () => {
  return gulp.src(e2eConfig)
    .pipe(webdriver())
    .on('error', () => {
      if (seleniumServer) seleniumServer.kill()
      process.exit(1)
    })
})
