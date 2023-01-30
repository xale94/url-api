
import bodyParser from 'body-parser';
import { routes } from './http/routes';
import { errorHandler } from './http/middleware/errorHandler';
import express,  { Express }   from 'express';

const initialise = async () => {
    const server: Express = express();

    server.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    server.use(bodyParser.json());

    server.use(errorHandler);
    server.use('/', routes);
    server.listen(process.env.API_PORT, () =>
        console.log('The application is initialised on the port %s', process.env.API_PORT)
    );

    return server;
};

export { initialise };