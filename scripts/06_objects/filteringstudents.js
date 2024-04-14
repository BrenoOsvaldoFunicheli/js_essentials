const students = require("./estudante.json")

// clousure function 
const filterProperty = (prop) => { 
    return (student) => student.endereco.hasOwnProperty(prop)
}

// make the function
filterCEP = filterProperty("complemento")

const result = students.filter(filterCEP)

console.log(result)



