import axios from 'axios';

export const fetchCountryData = async () => {
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
};

