// var _ = require("underscore");

// var lista = [1,2,3,4,5,6]; _.each(lista, function(item) {
//     console.log(item);
// }) 

// var employeesCollection = [
//     {
//         "id": 1,
//         "name": "Soni",
//         "designation": "SE",
//         "salary": 25000
//     },
//     {
//         "id": 2,
//         "name": "Rohit",
//         "designation": "SSE",
//         "salary": 35000
//     },
//     {
//         "id": 3,
//         "name": "Akanksha",
//         "designation": "Manager",
//         "salary": 45000
//     },
//     {
//         "id": 4,
//         "name": "Mohan",
//         "designation": "Accountant",
//         "salary": 30000
//     },
//     {
//         "id": 5,
//         "name": "Gita",
//         "designation": "SSE",
//         "salary": 35000
//     },
// ]

// var cargos = _.map(employeesCollection, function(employee) {
//     return {nombre: employee.name, cargo: employee.designation};
// });
// console.log(cargos)

// console.log(_.pluck(employeesCollection, "name"));

// var empleados_sse = _.chain(employeesCollection)
// .filter(function(employee) {
//     return employee.designation === "SSE";
// })
// .map(function(employee) {
//     return {name: employee.name, id: employee.id};
// })
// .value();

// console.log(empleados_sse);

// Creación de un paquete en nodejs

// const param_replacer = require('./lib/replace');

// const objetivo = "%hello% %world% -- %world% %hello%!";
// const idioma = "es";
// const reemplazos = {
//     "en": {
//         "hello": "Hello",
//         "world": "World"
//     },
//     "es": {
//         "hello": "Hola",
//         "world": "Mundo"
//     }
// };

// const resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

// console.log(resultado);

var param_replace = require('./lib/replace');
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = param_replace;
    }
    exports.param_replace = param_replace;
} else {
    root.param_replace = param_replace;
}