import { Router } from "express";

const exampleRouter = Router()

exampleRouter.get('/', function(request, response) {
    response.send('Birds home page');
});

export default exampleRouter