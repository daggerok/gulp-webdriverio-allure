import assert from 'assert'
import {remote} from 'webdriverio'

const explain = (current, expected) => `has wrong value: '${current}', expected: '${expected}'`

describe('the index page', () => {
  let client,
  expectedTitle = 'e2e testing using gulp, webdriverio and selenium with nice allure report'

  beforeEach(() => client = remote())

  it('has correct title (using promises)', () => {
    client.url('/').getTitle().then(title => assert.equal(title, expectedTitle, explain(title, expectedTitle)))
  })

  it('has correct title (using generators)', function* () {
    yield browser.url('/') // require babel-plugin-transform-runtime see package.json

    let title = yield browser.getTitle()

    return assert.equal(title, expectedTitle, explain(title, expectedTitle))
  })
})
