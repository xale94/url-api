import { Request, Response } from 'express';
import { body, Result, validationResult } from 'express-validator';

export const validate = async (request: Request, result: Response, next: Function) => {
    for (const func of validateRules) {
        await func(request, result, () => void 0);
    }
    const errors = validationResult(request)
    if(errors.isEmpty()){
        return next()
    }
    errors.throw();
}

const validateRules = [
    body().isJSON,
    body("urls").isArray().notEmpty().custom((aUrls: Array<string>) => aUrls.every(isUrl))
]


const isUrl = (url: string) => {
    const pattern: RegExp = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}