const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const vId = [stephanieId, olaId, burlId];

// console.log(vId);

function isManager(id) {
  // seu código aqui
  return vId.some((ids) => ids.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const nameFuncs = employees.filter((employee) => employee.managers.includes(managerId));
    return nameFuncs.map((nameFunc) => `${nameFunc.firstName} ${nameFunc.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = { isManager, getRelatedEmployees };
