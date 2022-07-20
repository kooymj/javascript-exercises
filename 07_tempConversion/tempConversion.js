const ftoc = function(f) {
  let celsius = (f - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
};

const ctof = function(c) {
  let faren = c * (9/5) + 32;
  return Math.round(faren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
