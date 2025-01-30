import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import { expect } from 'chai';
import storeToken from '../utils/setEnvVar.js';







  
    it("Admin login", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/login`, {
            email: process.env.email,
            password: process.env.password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        console.log(data.token);
        expect(data.message).to.equal("Login successful");
        storeToken("token", data.token);
    });

    
   


