import { createSlice } from "@reduxjs/toolkit";
import { todosLocalStorage } from "../../utils/localStorage";

const todosSlice = createSlice({
    name: "todos",
    initialState: todosLocalStorage(),
    reducers: {
        
    }
})
export default todosSlice.reducer     
