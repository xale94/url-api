import express, { Request, response, Response } from 'express'
import { services } from '../../services'
import { validate } from './../middleware/validators/UrlApiValidator'

export const urlApiRoutes = express.Router();

urlApiRoutes.get('/urls', [validate], (req: Request, res: Response, next: Function): void => {
    try{
        const urls: Array<string>  = req.body.urls
        const key = req.body.key
        const service = services.UrlApiService()
        let aResults: any[] = []
        const result: { [key: string]: any } = {}
        service.execute(urls).then((responses)=> {
            responses.forEach(axiosResponse => {
                aResults.push(axiosResponse.data)                
            })
            aResults = aResults.flat(1)

            for (let index in aResults){
                const listOfResult = aResults[index]
                if(listOfResult[key]){
                    const keyValue = listOfResult[key]
                    result[keyValue] = aResults[index]
                }
            }

            res.json(result);
        }).catch((reject)=>{
            throw new Error('There was a problem with the request.')
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
});