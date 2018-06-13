function isValidTitle(str) {
  return str.length > 3;
}

function isValidDescription(str) {
  return str.length > 10;
}

function isValidLongitude(num) {
  if (num > -180 && num < 180) {
    return true;
  }
  return false;
}

function isValidLatitude(num) {
  if (num > -90 && num < 90) {
    return true;
  }
  return false;
}

function isValidPopulation(num) {
  return num > 0;
}

function isValidImage(str) {
  // return str.length > 0;
  return true;
}

export {
  isValidTitle,
  isValidDescription,
  isValidLongitude,
  isValidLatitude,
  isValidPopulation,
  isValidImage
};
