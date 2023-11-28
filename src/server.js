const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const routes = require('./routes');
const path = require('path');
const { generateFoodData } = require("./utils/food");
const { generateCategories } = require('./utils/category');
const jwt = require('jsonwebtoken');
const HapiJwt = require('hapi-auth-jwt2');
const argv = require('yargs').argv;
const JWT_PRIVATE_KEY = 'be91b2f902a2729e7307fe4b111f30a0a34005060329c3d3e9ec64c3ded2276c';

const init = async () => {
    const server = Hapi.server({
        port: argv.port || 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.register(HapiJwt);
    server.auth.strategy('jwt', 'jwt', {
        key: JWT_PRIVATE_KEY,
        validate: (decoded, request, h) => {
            return { isValid: true };
        }
    });

    await server.register(Inert);

    server.app.JWT_PRIVATE_KEY = JWT_PRIVATE_KEY;
    server.app.dummyListCategories = generateCategories(5);
    server.app.dummyListFood = generateFoodData(16, server.app.dummyListCategories);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, '../'),
                listing: false,
                index: false
            }
        }
    });

    server.route(routes);

    await server.start();
    // eslint-disable-next-line no-console
    console.log(`The server is running at ${server.info.uri}`);
};

init();
