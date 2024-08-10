import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import schedule from 'node-schedule';
import scriptRoutes from './routes/script.js'


const app = express();
dotenv.config();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Script is firing mfer");
});

app.use('/scripts', scriptRoutes)
const PORT = 8888;

app.listen(PORT, () => console.log(`Server running on port:${PORT}`))