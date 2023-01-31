
import axios, { AxiosResponse } from 'axios'

export const CurlHelper = async (url: string): Promise<AxiosResponse<any, any>> => {
    const options = {
        method: 'GET',
        url: url
    };
    return await axios.request(options)
}