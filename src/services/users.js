APIurl = `https://dummyjson.com/users`;

//Traer todos los usuarios--> GET /api/users
const getUsers = async () =>{
    try {
        await fetch(APIurl)
            .then(users => users.json());
    } catch (error) {
        return error
    }
}

//Traer usuario por su ID
const getUserByID = async (id) =>{
    try {
    
        await fetch(`${APIurl}/${id}`)
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
        await fetch(`${APIurl}?${params}`)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

//Traer usuarios por nombre. 
const getUsersByName = async (name) =>{
    try {
        const params = `search?q=${name}`
        await fetch(`${APIurl}/${params}`)
            .then(user => user.json());
    } catch (error) {
        return error
    }
}

export {
    getUsers,
    getUserByID,
    getUsersInPages,
    getUsersByName
}