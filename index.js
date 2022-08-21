// Write your solution in this file!

const employee={
name:"Sam",
streetAddress:"11 Broadway"

}

//deleteFromEmployeeByKey(employee, key)
//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)


function updateEmployeeWithKeyAndValue(obj, key, value){
  const employee2={...obj} //New object
employee2[key]=value  //
return employee2

}

const myEmployee=updateEmployeeWithKeyAndValue(employee," Gender","Male")

function destructivelyUpdateEmployeeWithKeyAndValue(emp3, key, value){

emp3[key]=value

return emp3

}
const employ=destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress', '12 Broadway')


//deleteFromEmployeeByKey(employee, key)
//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)

function  deleteFromEmployeeByKey(obj1, key){

const deleEmp={...obj1}
  
delete deleEmp[key]

return deleEmp

}
const deleteEmp= deleteFromEmployeeByKey(employee, "name")



  //destructivelyDeleteFromEmployeeByKey(employee, key)
  //returns employee without the deleted key/value pair
  //modifies the original employee



function destructivelyDeleteFromEmployeeByKey(employee, key){

delete employee[key]

return employee

}
destructivelyDeleteFromEmployeeByKey(employee, "name")