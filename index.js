// Write your solution in this file!
const driver = { name: 'driver' }
 
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let driver2 = Object.assign({}, driver)
  delete driver2[key]
  return driver2
}