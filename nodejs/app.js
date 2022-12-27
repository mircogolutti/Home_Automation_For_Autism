import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from "http";
import RED from "node-red"

import connectDB from "./db/domotica.js";
import root from "./routes/root.js";
import flutter from "./routes/flutter.js";

//---------------------------------------------
// Const
//---------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || '8001';


//---------------------------------------------
// Database MongoDb
//---------------------------------------------
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDB(DATABASE_URL);

//---------------------------------------------
// Express
//---------------------------------------------
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", root)
app.use("/flutter", flutter)

const httpServer = createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/admin",
    httpNodeRoot: "/api",
    userDir:"/home/nol/.nodered/",
    editorTheme: {
        page: {
            title: "Admin"
        },
        header: {
            title: "Admin"
        }
    },
    functionGlobalContext: { }  
};

RED.init(httpServer,settings);
app.use(settings.httpAdminRoot,RED.httpAdmin);
app.use(settings.httpNodeRoot,RED.httpNode);

//---------------------------------------------
// httpServer
//---------------------------------------------

httpServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});

RED.start();


