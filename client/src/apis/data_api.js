import axios from 'axios';

const countryDataUrl = 'https://restcountries.com/v3.1/all'

export const getcountryData = async() => {
    try{
        const response = await axios.get(countryDataUrl);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}