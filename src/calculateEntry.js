const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants !== null && entrants !== undefined && entrants.length !== 0) {
    const filMaior18 = entrants.filter((fM18) => fM18.age >= 18 && fM18.age < 50);
    const resulM18 = filMaior18.length;
    const filMenor18 = entrants.filter((fMe18) => fMe18.age < 18);
    const resulMe18 = filMenor18.length;
    const filIdos = entrants.filter((filIdo) => filIdo.age >= 50);
    const resulIdos = filIdos.length;
    return { child: resulMe18, adult: resulM18, senior: resulIdos };
  }
  return 0;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants !== null && entrants !== undefined && Object.keys(entrants).length !== 0) {
    const chamaFunc = countEntrants(entrants);
    const total = chamaFunc.child * 20.99 + chamaFunc.senior * 24.99 + chamaFunc.adult * 49.99;
    return total;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
