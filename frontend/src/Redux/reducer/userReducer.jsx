import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserReducer = createAsyncThunk("user/fetchUsers", async () => {
    const response = await axios.get("http://localhost:8000/api/get");
    return response.data || [];
});

export const DeleteUserById = createAsyncThunk("user/deleteUsers", async ({ id }, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/deleteUser/${id}`);
        return response.data || [];
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong!");
    }
});

export const addUserReducer = createAsyncThunk("user/addUser", async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:8000/api/create", { name, email, password }, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong!");
    }
});

export const editUserReducer = createAsyncThunk("user/editUser", async ({ id, name, email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`http://localhost:8000/api/editUser/${id}`, { name, email, password }, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong!");
    }
});

const UserReducer = createSlice({
    name: "user",
    initialState: {
        loading: false,
        users: [],
        error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserReducer.pending, (state) => { state.loading = true; });
        builder.addCase(fetchUserReducer.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUserReducer.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message || "Something went wrong!";
        });

        builder.addCase(addUserReducer.pending, (state) => { state.loading = true; });
        builder.addCase(addUserReducer.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            state.error = "";
        });
        builder.addCase(addUserReducer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Failed to add user!";
        });

        builder.addCase(DeleteUserById.pending, (state) => { state.loading = true; });
        builder.addCase(DeleteUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user._id !== action.payload._id);
            state.error = "";
        });
        builder.addCase(DeleteUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Failed to delete user!";
        });

        builder.addCase(editUserReducer.pending, (state) => { state.loading = true; });
        builder.addCase(editUserReducer.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.users.findIndex(user => user._id === action.payload._id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
            state.error = "";
        });
        builder.addCase(editUserReducer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Failed to edit user!";
        });
    },
});

export default UserReducer.reducer;
