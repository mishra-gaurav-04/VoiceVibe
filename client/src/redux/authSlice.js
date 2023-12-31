import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth : true, 
    user : null,
    otp : { 
        email : '',
        hash : ''
    }
};

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setAuth : (state,action) => {
            const {user,auth} = action.payload;
            state.user = user;
            state.isAuth = true;
         },
        setOtp : (state,action) => {
            const {email,hash} = action.payload;
            state.otp.email = email;
            state.otp.hash = hash
        }
    },
})

export const {setAuth,setOtp} = authSlice.actions;
export default authSlice.reducer;
