
import bodyParser from 'body-parser';
import { routes } from './http/routes';
import { errorHandler } from './http/middleware/errorHandler';
import express,  { Express }   from 'express';

const initialise = async () => {
    const server: Express = express();
    routes.use(errorHandler)
    server.use(
        bodyParser.urlencoded({
            extended: true
        })
    )
    server.use(bodyParser.json());

    server.use('/', routes);
    server.listen(process.env.PORT, () =>
        console.log('The application is initialised on the port %s', process.env.PORT)
    );

    return server;
};

export { initialise };