const splitTheBill = (group) => {
  // TODO: implement the function and return an Object
  const persons = Object.keys(group);
  const result = {};
  let total = 0;
  persons.forEach((person) => {
    const amount = group[person];
    total += amount;
  });
  persons.forEach((person) => {
    result[person] = group[person] - (total / persons.length);
  });
  return result;
};

module.exports = splitTheBill; // Do not remove this line.

const group = {
  john: 120,
  paul: 30,
  ringo: 150,
};
console.log(splitTheBill(group));
