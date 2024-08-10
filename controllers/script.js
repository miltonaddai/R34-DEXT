import axios from 'axios';
import { createRequire } from 'module';
import dotenv from 'dotenv';

const require = createRequire(import.meta.url);
dotenv.config();

export const getChains = async (req, res) => {
    const response = axios.get("https://public-api.dextools.io/free/v2/blockchains", {
        headers: {'x-api-key': process.env.DEXT_API_KEY}
    });

    console.log(response);

    res.send(response)
}