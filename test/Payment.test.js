
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

import {writeUserData,ReadUserdataByRole} from '../utils/utils.js'


it("payment money from  customer one to merchant", async() => {
    const customers=ReadUserdataByRole("Customer")
    const merchants=ReadUserdataByRole("Merchant")
    if(customers.length < 2 ||merchants.length === 0)
        return;
    
    
    const customer=customers[0]
    const merchant=merchants[0]

    const { data } = await axios.post(`${process.env.base_url}/transaction/payment`, {
        
            "from_account":customer.customer_one_phone_number,
            "to_account":merchant.merchant_phone_number,
            "amount":100
        
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
  
    
})