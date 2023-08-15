import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {createHash } from 'crypto';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
const app: Express = express();
const port = 3001;
dotenv.config();
app.use(cors())

function generateAccessToken(username: string) {
    return jwt.sign({ name: username }, process.env.TOKEN_SECRET as jwt.Secret, { expiresIn: 10 } as jwt.SignOptions);
}
app.use((req: Request, res: Response, next: NextFunction) => { 
    console.log('checking Token');
    console.log(req.path);
    console.log(req.method);
    if (req.path == '/user' && req.method == 'POST') {
        console.log('login attempt, skip.');
        next();
    }
    else {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401);
            console.log('token invalid!');
            return res.send('Invalid Token');
        }
        console.log('token encode: ' + JSON.stringify(token));
        console.log("token decode: "+ JSON.stringify(jwt.decode(token)));
        try {
            jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret);
            console.log("token valid!")
            next();
        } catch (err) {
            res.status(401);
            console.log('token invalid!');
            return res.send('Invalid Token');
        }
    }
});
app.post('/user', jsonParser, (req: Request, res: Response) => {
    var { username, password } = req.body;
    password+="salt"
    password = createHash('sha256').update(password).digest('base64');
    switch (username) {
        case "Gregor":
            if (password == 'TUaPygL5Q0uVMiMavwNRNp4AS49EdT9d3xmXKXtjw/Y=') break;
        default:
            res.status(403);
            return res.send("wrong password");
        
    }
    res.send({token: generateAccessToken(username) })
})
app.get('/user', (req, res) => {
    console.log('validating');
    const token = req.headers.authorization;
    if (token) {
        console.log(jwt.decode(token));
        res.send(jwt.decode(token))
    }
})
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});