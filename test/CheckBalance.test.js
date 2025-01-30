import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import { expect } from 'chai';

import {writeUserData,ReadUserdataByRole} from '../utils/utils.js'


it("Check balance of the recipient customer", async() => {
    const customers=ReadUserdataByRole("Customer")
    if(customers.length < 2 )return
   const  customer=customers[0]

    const { data } = await axios.get(`${process.env.base_url}/transaction/balance/${customer.customer_one_phone_number}`, 
        
     {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
  expect(data.message).to.equal("User balance");
   
    
})