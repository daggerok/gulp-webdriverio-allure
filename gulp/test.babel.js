import {gulp, e2eConfig, webdriver} from './common.babel'
import {seleniumServer} from './selenium.babel'
import {httpServer} from './http.babel'

gulp.task('test', ['e2e'], () => {
  if (httpServer) httpServer.close()
  if (seleniumServer) seleniumServer.kill()
})
