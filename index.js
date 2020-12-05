// Code your solution here
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(drivers,string) {
  let sameLetter = drivers.filter(name => name.charAt(0) === string.charAt(0))
  return sameLetter
}
function matchName(drivers,string) {
  let matchName = drivers.filter(elem => elem.name === string)
  return matchName
}
)
