import { PrismaClient } from '@prisma/client';
import { UserDto } from '../dtos/userDto.js';
const prisma = new PrismaClient();

export const getAllUsers = async() => {
    try {
        const users = await prisma.user.findMany()
        return users;
    } catch (error) {
        return error;
    }
};

export const createOneUser = async (dataUser) => {
    
    const { id, email, name } = dataUser;
    const userInfo = new UserDto(id, email, name);
    try {
        const user = await prisma.user.create({
            data: {
                id: userInfo.id,
                email: userInfo.email,
                name: userInfo.name
            },
        })
        return 'Usuario creado con éxito';
    } catch (error) {
        console.log(error);
        return "Usuario ya existe"
    }
}

export const updateOneUser = async (dataUser) => {
    const { id, name } = dataUser;
    try {
        await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return 'Usuario actualizado con éxito';
    } catch (error) {
        return error
    }

}

export const deleteOneUser = async (dataUser) => {
    try {
        const { id } = dataUser;
        await prisma.user.delete({
            where: {
                id: id,
            },
        });
        return 'Registro eliminado con éxito';
    } catch (error) {
        return error
    }
}


