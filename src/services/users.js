<<<<<<< HEAD
const APIurl = `https://dummyjson.com/users`;

//Traer todos los usuarios
const getUsers = async () =>{
    try {
        return await fetch(APIurl)
=======
APIurl = `https://dummyjson.com/users`;

//Traer todos los usuarios--> GET /api/users
const getUsers = async () =>{
    try {
        await fetch(APIurl)
>>>>>>> 208b032 (funciones para solicitudes fetch)
            .then(users => users.json());
    } catch (error) {
        return error
    }
}

//Traer usuario por su ID
const getUserByID = async (id) =>{
    try {
    
<<<<<<< HEAD
        return await fetch(`${APIurl}/${id}`)
=======
        await fetch(`${APIurl}/${id}`)
>>>>>>> 208b032 (funciones para solicitudes fetch)
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
        return await fetch(`${APIurl}?${params}`)
=======
        await fetch(`${APIurl}?${params}`)
>>>>>>> 208b032 (funciones para solicitudes fetch)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

//Traer usuarios por nombre. 
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
    getUsersByNameInPages
=======
    getUsersByName
>>>>>>> 208b032 (funciones para solicitudes fetch)
}