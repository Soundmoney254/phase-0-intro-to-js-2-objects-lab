const employee = {
    name : "Jason lowry",
    streetAddress: "1254 Boulevard New York"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeUpdateCopy = {...employee};
    employeeUpdateCopy[key] = value;
    return employeeUpdateCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}