module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  return members
    .filter(name => typeof name == 'string')
    .map(name => name.trim().toUpperCase())
    .sort()
    .reduce((result, currentName) => result += currentName[0], '')
   
};