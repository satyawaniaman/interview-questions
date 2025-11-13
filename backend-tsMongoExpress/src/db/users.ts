import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    authentication:{
    password: {
        type: String,
        required: true,
        select: false
    },
    salt:{
        type: String,
        select: false
    },
    sessionToken:{
        type: String,
        select: false
    }
    }
})
export const userModel = mongoose.model('User', userSchema)
export const getUsers=()=>{
    userModel.find();
}

export const getUserBySessionToken=(sessionToken: string)=>{
    userModel.findOne({
        'authentication.sessionToken': sessionToken
    })
}
export const getUserById=(id: string)=>{
    return userModel.findById(id);
}
export const getUserByEmail=(email: string)=>{
    return userModel.findOne({
        email
    })
}
export const createUser = (values: Record<string, any>)=>{
    return userModel.create(values)
}
export const updateUserById = (id: string, values: Record<string, any>)=>{
    return userModel.findByIdAndUpdate(id, values)
}
export const deleteUserById = (id: string)=>{
    return userModel.findByIdAndDelete(id)
}