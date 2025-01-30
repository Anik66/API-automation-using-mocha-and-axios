import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import { expect } from 'chai';

import {writeUserData,ReadUserdataByRole} from '../utils/utils.js'



//sendmoney
it("send money from  customer two to customer one", async() => {
        
    const customers=ReadUserdataByRole("Customer")
    if(customers.length < 2){
        console.error("at least to customer needed");
        return;
    }
       
    
    
    const customerOne=customers[0]
    const customerTwo=customers[1]

    const { data } = await axios.post(`${process.env.base_url}/transaction/sendmoney`, {
        
            "from_account":customerTwo.customer_two_phone_number,
            "to_account":customerOne.customer_one_phone_number,
            "amount":500
        
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
   expect(data.message).to.equal("Send money successful");
    
})