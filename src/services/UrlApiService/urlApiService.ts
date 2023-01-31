import { AxiosResponse } from "axios";
import { CurlHelper } from "./../../helpers/CurlHelper";

export const urlApiService = () => {

    const execute = async (urls: Array<string>) => {
        let result = new Array<Promise<AxiosResponse<any, any>>>()
        urls.forEach((url) => {
            const data = CurlHelper(url)
            result.push(data)
        })
        return await Promise.all(result)
    }

    return {
        execute
    }
}