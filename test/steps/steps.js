// features/support/steps.js
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const expect = require('expect')
const {tailAndWaitFor} = require('../../logdriver')

setDefaultTimeout(60 * 1000);

When('test wait for {word}', async (word) => {
  await tailAndWaitFor(word)
})
