import { 
    findUsersModel, 
    createUserModel, 
    updateUserModel, 
    deleteUserModel 
} from "../models/User.model.js"

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await findUsersModel()

        if (!allUsers || allUsers.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Usuarios!'
            })
        }

        res.status(200).send(allUsers)
    } catch (err) {
        console.error(err);
    }
}
export const getOneUser = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
    }
}
export const createUser = async (req, res) => {
    try {
        const { name, age } = req.body
        const newUser = await createUserModel({ name, age })

        if (!newUser) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el usuario!'
            })
        }

        res.status(201).send({ message: "Usuario creado correctamente", newUser })
    } catch (err) {
        console.error(err);
    }
}
export const updateUser = async (req, res) => {
    try {
        const { name, age } = req.body
        const { id } = req.params

        const updatedUser = await updateUserModel({ name, age }, id)

        if (!updatedUser) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el Usuario!'
            })
        }

        res.status(200).send({ messsage: "Usuario actualizado correctamente!", updatedUser })
    } catch (err) {
        console.error(err);
    }
}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const deletedUser = await deleteUserModel(id)

        if (!deletedUser) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el Usuario!'
            })
        }

        res.status(200).send({ message: `Usuario con el id ${id} eliminado correctamente!` })
    } catch (err) {
        console.error(err);
    }
}