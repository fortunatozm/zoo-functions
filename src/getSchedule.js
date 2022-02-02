const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

const monday = () => {
  const mondayoff = 'CLOSED';
  const mondayex = 'The zoo will be closed!';
  return {
    officeHour: mondayoff,
    exhibition: mondayex,
  };
};
const tuesday = () => {
  const tuesdayoff = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`;
  const tuesdayex = species.map((names) => names.name);
  return {
    officeHour: tuesdayoff,
    exhibition: tuesdayex.filter((names) => names !== 'otters' && names
    !== 'frogs' && names !== 'snakes'),
  };
};
const wednesday = () => {
  const wednesdayoff = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`;
  const wednesdayex = species.map((names) => names.name);
  return {
    officeHour: wednesdayoff,
    exhibition: wednesdayex.filter((names) => names !== 'lions' && names
    !== 'elephants' && names !== 'snakes'),
  };
};
const thursday = () => {
  const thursdayoff = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`;
  const thursdayex = species.map((names) => names.name);
  return {
    officeHour: thursdayoff,
    exhibition: thursdayex.filter((names) => names !== 'tigers' && names
    !== 'bears' && names !== 'penguins' && names !== 'elephants'),
  };
};
const friday = () => {
  const fridayoff = `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`;
  const fridayex = species.map((names) => names.name);
  return {
    officeHour: fridayoff,
    exhibition: fridayex.filter((names) => names !== 'lions' && names
    !== 'bears' && names !== 'penguins'),
  };
};
const saturday = () => {
  const saturdayoff = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`;
  const saturdayex = species.map((names) => names.name);
  return {
    officeHour: saturdayoff,
    exhibition: saturdayex.filter((names) => names !== 'giraffes'),
  };
};
const sunday = () => {
  const sundayoff = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`;
  const sundayex = species.map((names) => names.name);
  return {
    officeHour: sundayoff,
    exhibition: sundayex.filter((names) => names !== 'tigers' && names
    !== 'otters' && names !== 'frogs' && names !== 'giraffes'),
  };
};
const result = {
  Tuesday: tuesday(),
  Wednesday: wednesday(),
  Thursday: thursday(),
  Friday: friday(),
  Saturday: saturday(),
  Sunday: sunday(),
  Monday: monday(),
};
const checkList = species.map((nomes) => nomes.name);
const checkList2 = Object.keys(hours);
const retAll = (scheduleTarget) => {
  if (!scheduleTarget || (checkList.includes(scheduleTarget)
  !== true && checkList2.includes(scheduleTarget) !== true)) {
    return result;
  }
};
// Por dia
const retMonday = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { Monday: monday() };
  }
};
const retTuesday = (scheduleTarget) => {
  if (scheduleTarget === 'Tuesday') {
    return { Tuesday: tuesday() };
  }
};
const retWednesday = (scheduleTarget) => {
  if (scheduleTarget === 'Wednesday') {
    return { Wednesday: wednesday() };
  }
};
const retThursday = (scheduleTarget) => {
  if (scheduleTarget === 'Thursday') {
    return { Thursday: thursday() };
  }
};
const retFriday = (scheduleTarget) => {
  if (scheduleTarget === 'Friday') {
    return { Friday: friday() };
  }
};
const retSaturday = (scheduleTarget) => {
  if (scheduleTarget === 'Saturday') {
    return { Saturday: saturday() };
  }
};
const retSunday = (scheduleTarget) => {
  if (scheduleTarget === 'Sunday') {
    return { Sunday: sunday() };
  }
};
// Por nome
const lions = (scheduleTarget) => {
  if (scheduleTarget === 'lions') {
    const lionsd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return lionsd.reduce((nome) => nome);
  }
};
const penguins = (scheduleTarget) => {
  if (scheduleTarget === 'penguins') {
    const penguinsd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return penguinsd.reduce((nome) => nome);
  }
};
const tigers = (scheduleTarget) => {
  if (scheduleTarget === 'tigers') {
    const tigersd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return tigersd.reduce((nome) => nome);
  }
};
const bears = (scheduleTarget) => {
  if (scheduleTarget === 'bears') {
    const bearsd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return bearsd.reduce((nome) => nome);
  }
};
const otters = (scheduleTarget) => {
  if (scheduleTarget === 'otters') {
    const ottersd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return ottersd.reduce((nome) => nome);
  }
};
const frogs = (scheduleTarget) => {
  if (scheduleTarget === 'frogs') {
    const frogsd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return frogsd.reduce((nome) => nome);
  }
};
const snakes = (scheduleTarget) => {
  if (scheduleTarget === 'snakes') {
    const snakesd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return snakesd.reduce((nome) => nome);
  }
};
const elephants = (scheduleTarget) => {
  if (scheduleTarget === 'elephants') {
    const elephantsd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return elephantsd.reduce((nome) => nome);
  }
};
const giraffes = (scheduleTarget) => {
  if (scheduleTarget === 'giraffes') {
    const giraffesd = species.filter((nome) => nome.name
    === scheduleTarget).map((nom) => nom.availability);
    return giraffesd.reduce((nome) => nome);
  }
};

const returns1 = (scheduleTarget) => retMonday(scheduleTarget) || retAll(scheduleTarget)
  || retTuesday(scheduleTarget) || retWednesday(scheduleTarget) || retThursday(scheduleTarget);

const returns2 = (scheduleTarget) => retFriday(scheduleTarget) || retSaturday(scheduleTarget)
|| retSunday(scheduleTarget);

const returns3 = (scheduleTarget) => lions(scheduleTarget) || penguins(scheduleTarget)
|| tigers(scheduleTarget) || bears(scheduleTarget) || otters(scheduleTarget);

const returns4 = (scheduleTarget) => frogs(scheduleTarget) || snakes(scheduleTarget)
|| elephants(scheduleTarget) || giraffes(scheduleTarget);

function getSchedule(scheduleTarget) {
  return returns1(scheduleTarget) || returns2(scheduleTarget)
  || returns3(scheduleTarget) || returns4(scheduleTarget);
}

module.exports = getSchedule;
