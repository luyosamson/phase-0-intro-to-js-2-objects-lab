// Write your solution in this file!

// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return { ...employee, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = {...employee}
    delete newEmployee[key];
  
    return newEmployee;
}


const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}