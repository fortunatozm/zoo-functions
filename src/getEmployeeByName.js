const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const checks = employees.some((check) => check.lastName === employeeName
   || check.firstName === employeeName);
  if (employeeName !== undefined && employeeName !== null && checks === true) {
    const Pname = employees.filter((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
    return Pname.reduce((namee) => namee);
  }
  const Rname = [];
  return { ...Rname };
}

console.log(getEmployeeByName('a'));
// console.log(employees);
module.exports = getEmployeeByName;
