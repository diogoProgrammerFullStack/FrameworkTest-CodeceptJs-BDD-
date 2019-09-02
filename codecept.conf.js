exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com.br',
      browser: 'chrome',
      waitForTimeout: 5000,
      smartWait: 5000
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  tests: './*_test.js',
  name: 'framework-teste-javascript',
  translation: 'pt-BR'
}