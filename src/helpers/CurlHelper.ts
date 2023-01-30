import axios, { AxiosResponse } from 'axios'

/*
http://universities.hipolabs.com/search?country=United+States
https://datausa.io/api/data?drilldowns=Nation&measures=Population
*/
export const CurlHelper = async (url: string) => {
    const options = {
        method: 'GET',
        url: url
    };
    return axios.request(options).then((response: AxiosResponse) => {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
  
  
  
  
  
  // write data to request body
