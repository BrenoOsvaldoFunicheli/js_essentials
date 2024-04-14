// require will convert the JSON into object

const studentJson = require("./estudante.json")
console.log(studentJson)

// Native module import in Node.js
// Now, 'fs' have functions of File System
const fs = require('fs');

// when you need send object, e.g using HTTP, you need to convert into a string
const stringStudent = JSON.stringify(studentJson)
console.log(stringStudent)


// caming back
console.log(JSON.parse(stringStudent))
