import express, { Express, Request, Response } from 'express';
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
    return jwt.sign({ name: username }, process.env.TOKEN_SECRET as jwt.Secret, { expiresIn: 3600 } as jwt.SignOptions);
}

app.post('/login', jsonParser, (req: Request, res: Response) => {
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
    res.send({
        token: generateAccessToken(username)
    })
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});