// export defaul is the main content of file
// you can use two kind of exports [default and normal]
// default exports will be read as variable and other will be get by desctructuring like the following code:

// import defaultvar, {dayName2, dayNumber2}} from "./thisfile.js"
//defaultvar is a name I gave to the otherfunc that was defined as default export

const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

export function dayName2(number) {
    return names[number];
}
export function dayNumber2(name) {
    return names.indexOf(name);
}

const otherfunc = function (name) { return "" }


// define exports on final of function
export default otherfunc;  