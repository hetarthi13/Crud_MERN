import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const users = new User(req.body);
        if (!users) {
            return res.status(400).json({ message: "User not found" });
        }
        const userCreate = await users.save();
        res.status(200).json(userCreate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        // console.log(req,"req");
        
        const users = await User.find();
        if (!users) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log(users,"users");
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

export const getUserByid = async (req, res) => {
    try {
        // console.log(req,"req");
        const id  = req.params.id
        console.log(id,"id");
        
        const GetIdByusers = await User.findById(id);
        if (!GetIdByusers) {
            return res.status(400).json({ message: "User not found" });
        }
        // console.log(GetIdByusers,"users");
        
        res.status(200).json(GetIdByusers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  


export const editUserByid = async (req, res) => {
    try {
        // console.log(req,"req");
        const id  = req.params.id
        const GetIdByusersId = await User.findById(id);
        if (!GetIdByusersId) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log(req.body,"req.body");
        
        const GetIdByusersedit = await User.findByIdAndUpdate(id,req.body,{new:true});
        
        // console.log(GetIdByusers,"users");
        
        res.status(200).json(GetIdByusersedit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

export const DeleteUserById = async (req, res) => {
    try {
        // console.log(req,"req");
        const id  = req.params.id
        const GetIdByusersId = await User.findById(id);
        if (!GetIdByusersId) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log(req.body,"req.body");
        
        const GetIdByusersedit = await User.findByIdAndDelete(id);
        
        // console.log(GetIdByusers,"users");
        
        res.status(200).json({msg:"user delete sucessFult"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  