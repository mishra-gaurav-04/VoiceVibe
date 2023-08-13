import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true,
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
});


export const signUp = async(data) => {
    try{
        const response = await api.post('/api/v1/signUp',data);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
};

export const loginEmail = async(data) => {
    try{
        const response = await api.post('/api/v1/loginEmail',data);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null
    }
};

export const verifyOtp = async(data) => {
    try{
        const response = await api.post('/api/v1/verify',data);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
};

export const getUserById = async(param) => {
    try{
        const response = await api.get(`/api/v1/users/${param}`);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
};