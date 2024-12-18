/* const usuarios = [
    {
        nombres: "Juan Miguel",
        apellidos: "Alva Rodríguez",
        dni: "47572394",
        idusuario: "1",
        email: "usuario1@gmail.com",
        password: "asdf1234"
    },
    {
        nombres: "Luis Alberto",
        apellidos: "Vargas Paz",
        dni: "48743894",
        idusuario: "2",
        email: "usuario2@gmail.com",
        password: "1234asdf"
    },
    {
        nombres: "María Luisa",
        apellidos: "Oliva Cruz",
        dni: "47572394",
        idusuario: "3",
        email: "usuario3@gmail.com",
        password: "1234zxcv"
    },
];

export default usuarios; */

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

console.log(usuarios);