<<<<<<< HEAD
<<<<<<< HEAD
const APIurl = `https://dummyjson.com/users`;

//Traer todos los usuarios
const getUsers = async () =>{
    try {
        return await fetch(APIurl)
=======
APIurl = `https://dummyjson.com/users`;
=======
const APIurl = `https://dummyjson.com/users`;
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)

//Traer todos los usuarios
const getUsers = async () =>{
    try {
<<<<<<< HEAD
        await fetch(APIurl)
>>>>>>> 208b032 (funciones para solicitudes fetch)
=======
        return await fetch(APIurl)
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)
            .then(users => users.json());
    } catch (error) {
        return error
    }
}

//Traer usuario por su ID
const getUserByID = async (id) =>{
    try {
    
<<<<<<< HEAD
<<<<<<< HEAD
        return await fetch(`${APIurl}/${id}`)
=======
        await fetch(`${APIurl}/${id}`)
>>>>>>> 208b032 (funciones para solicitudes fetch)
=======
        return await fetch(`${APIurl}/${id}`)
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

//Traer varios usuarios en paginas 
const getUsersInPages = async (actualPage, cantUsers) =>{
    //-------actualPage es la pagina actual a la que se hace referencia, en este caso la uso para saltear a todos los usuarios traidos previamente.
    //-------cantUsers es la cantidad de users que quiero traer por pagina
    try {
        const params = `limit=${cantUsers}&skip=${ (actualPage-1)*cantUsers}`
<<<<<<< HEAD
<<<<<<< HEAD
        return await fetch(`${APIurl}?${params}`)
=======
        await fetch(`${APIurl}?${params}`)
>>>>>>> 208b032 (funciones para solicitudes fetch)
=======
        return await fetch(`${APIurl}?${params}`)
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

//Traer usuarios por nombre. 
<<<<<<< HEAD
<<<<<<< HEAD
const getUsersByNameInPages = async (name, actualPage, cantUsers) =>{
    try {
        const params = `search?q=${name}&limit=${cantUsers}&skip=${ (actualPage-1)*cantUsers}`
        return await fetch(`${APIurl}/${params}`)
=======
const getUsersByName = async (name) =>{
    try {
        const params = `search?q=${name}`
        await fetch(`${APIurl}/${params}`)
>>>>>>> 208b032 (funciones para solicitudes fetch)
=======
const getUsersByNameInPages = async (name, actualPage, cantUsers) =>{
    try {
        const params = `search?q=${name}&limit=${cantUsers}&skip=${ (actualPage-1)*cantUsers}`
        return await fetch(`${APIurl}/${params}`)
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

export {
    getUsers,
    getUserByID,
    getUsersInPages,
<<<<<<< HEAD
<<<<<<< HEAD
    getUsersByNameInPages
=======
    getUsersByName
>>>>>>> 208b032 (funciones para solicitudes fetch)
=======
    getUsersByNameInPages
>>>>>>> bc599fe (funciones para traer los datos de la api, componentes y vistas de los usuarios)
}