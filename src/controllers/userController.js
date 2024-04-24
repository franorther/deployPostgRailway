import { getAllUsers, createOneUser, updateOneUser, deleteOneUser } from '../services/userServices.js';

export const getUsers =async (req, res) => {
    const result = await getAllUsers();
    res.status(200).json(result);
}

export const createUser = async (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = await createOneUser(dataJson);
    if (result) {
        res.status(200).json({
            message: result
        });
    } else {
        res.status(500).json({
            error: "Usuario ya existe"
        })
    }
}

export const updateUser = async (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = await updateOneUser(dataJson);
    res.status(200).json(result);
}

export const deleteUser = async (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = await deleteOneUser(dataJson);
    res.status(200).json(result);
}