const data = require('../data/zoo_data');

const { employees } = data;
// const { species } = data;

const stephanie1 = () => {
  const stephDatas = employees.filter((stephData) => stephData.id
  === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  || stephData.lastName === 'Strauss' || stephData.firstName === 'Stephanie');
  const stephRed = stephDatas.reduce((stred) => stred);
  return {
    id: stephRed.id,
    fullName: `${stephRed.firstName} ${stephRed.lastName}`,
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  };
};
const stephanie = (steph) => {
  if (steph.id === '9e7d4524-363c-416a-8759-8aa7e50c0992' || steph.name === 'Stephanie'
  || steph.name === 'Strauss') {
    return stephanie1();
  }
};
const nigel1 = () => {
  const nigellDatas = employees.filter((nigellData) => nigellData.id
  === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' || nigellData.lastName
  === 'Nelson' || nigellData.firstName === 'Nigel');
  const nigellRed = nigellDatas.reduce((stred) => stred);
  return {
    id: nigellRed.id,
    fullName: `${nigellRed.firstName} ${nigellRed.lastName}`,
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  };
};
const nigel = (nigell) => {
  if (nigell.id === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' || nigell.name === 'Nigel'
  || nigell.name === 'Nelson') {
    return nigel1();
  }
};
const burl1 = () => {
  const burllDatas = employees.filter((burllData) => burllData.id
  === '0e7b460e-acf4-4e17-bcb3-ee472265db83'
  || burllData.lastName === 'Bethea' || burllData.firstName === 'Burl');
  const burllRed = burllDatas.reduce((stred) => stred);
  return {
    id: burllRed.id,
    fullName: `${burllRed.firstName} ${burllRed.lastName}`,
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  };
};
const burl = (burll) => {
  if (burll.id === '0e7b460e-acf4-4e17-bcb3-ee472265db83' || burll.name === 'Burl'
  || burll.name === 'Bethea') {
    return burl1();
  }
};
const ola1 = () => {
  const olaaDatas = employees.filter((olaaData) => olaaData.id
  === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || olaaData.lastName === 'Orloff' || olaaData.firstName === 'Ola');
  const olaaRed = olaaDatas.reduce((stred) => stred);
  return {
    id: olaaRed.id,
    fullName: `${olaaRed.firstName} ${olaaRed.lastName}`,
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  };
};
const ola = (olaa) => {
  if (olaa.id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8' || olaa.name === 'Ola'
  || olaa.name === 'Orloff') {
    return ola1();
  }
};
const wilburn1 = () => {
  const wilburnnDatas = employees.filter((wilburnnData) => wilburnnData.id
  === '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'
  || wilburnnData.lastName === 'Wishart' || wilburnnData.firstName === 'Wilburn');
  const wilburnnRed = wilburnnDatas.reduce((stred) => stred);
  return {
    id: wilburnnRed.id,
    fullName: `${wilburnnRed.firstName} ${wilburnnRed.lastName}`,
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  };
};
const wilburn = (wilburnn) => {
  if (wilburnn.id === '56d43ba3-a5a7-40f6-8dd7-cbb05082383f' || wilburnn.name === 'Wilburn'
  || wilburnn.name === 'Wishart') {
    return wilburn1();
  }
};
const sharonda1 = () => {
  const sharondaaDatas = employees.filter((sharondaaData) => sharondaaData.id
  === '4b40a139-d4dc-4f09-822d-ec25e819a5ad'
  || sharondaaData.lastName === 'Spry' || sharondaaData.firstName === 'Sharonda');
  const sharondaaRed = sharondaaDatas.reduce((stred) => stred);
  return {
    id: sharondaaRed.id,
    fullName: `${sharondaaRed.firstName} ${sharondaaRed.lastName}`,
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  };
};
const sharonda = (sharondaa) => {
  if (sharondaa.id === '4b40a139-d4dc-4f09-822d-ec25e819a5ad' || sharondaa.name === 'Sharonda'
  || sharondaa.name === 'Spry') {
    return sharonda1();
  }
};
const ardith1 = () => {
  const ardithhDatas = employees.filter((ardithhData) => ardithhData.id
  === 'c1f50212-35a6-4ecd-8223-f835538526c2'
  || ardithhData.lastName === 'Azevado' || ardithhData.firstName === 'Ardith');
  const ardithhRed = ardithhDatas.reduce((stred) => stred);
  return {
    id: ardithhRed.id,
    fullName: `${ardithhRed.firstName} ${ardithhRed.lastName}`,
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  };
};
const ardith = (ardithh) => {
  if (ardithh.id === 'c1f50212-35a6-4ecd-8223-f835538526c2' || ardithh.name === 'Ardith'
  || ardithh.name === 'Azevado') {
    return ardith1();
  }
};
const emery1 = () => {
  const emeryyDatas = employees.filter((emeryyData) => emeryyData.id
  === 'b0dc644a-5335-489b-8a2c-4e086c7819a2'
  || emeryyData.lastName === 'Elser' || emeryyData.firstName === 'Emery');
  const emeryyRed = emeryyDatas.reduce((stred) => stred);
  return {
    id: emeryyRed.id,
    fullName: `${emeryyRed.firstName} ${emeryyRed.lastName}`,
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  };
};
const emery = (emeryy) => {
  if (emeryy.id === 'b0dc644a-5335-489b-8a2c-4e086c7819a2' || emeryy.name === 'Emery'
  || emeryy.name === 'Elser') {
    return emery1();
  }
};
const returns1 = (objData) => {
  if (objData !== undefined || objData !== null) {
    return stephanie(objData) || nigel(objData) || burl(objData);
  }
};
const returns2 = (objData) => {
  if (objData !== undefined || objData !== null) {
    return ola(objData) || wilburn(objData) || sharonda(objData);
  }
};
const returns3 = (objData) => {
  if (objData !== undefined || objData !== null) {
    return ardith(objData) || emery(objData);
  }
};
const returns4 = (objData) => {
  if (objData === undefined || objData === null) {
    return [nigel1(), burl1(), ola1(), wilburn1(), stephanie1(), sharonda1(), ardith1(), emery1()];
  }
};
const returns5 = (objData) => returns1(objData) || returns2(objData)
|| returns3(objData);

const nomes1 = (objData) => employees.some((nome1) => nome1.firstName === objData.name);
const nomes2 = (objData) => employees.some((nome2) => nome2.lastName === objData.name);
const nomes3 = (objData) => employees.some((nome3) => nome3.id === objData.id);
const returns6 = (objData) => {
  if (nomes1(objData) || nomes2(objData) || nomes3(objData)) {
    return returns5(objData);
  }
  throw new Error('Informações inválidas');
};
function getEmployeesCoverage(objData) {
  return returns4(objData) || returns6(objData);
}

module.exports = getEmployeesCoverage;
