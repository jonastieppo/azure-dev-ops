

import * as express from 'express';
import {Application} from "express";
import {getAllLinks} from './server/get-side-nav-links';
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({origin: true}));
app.use(bodyParser.json());

app.route('/api/sidenavlinks').get(getAllLinks);


const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + '9000');
});



