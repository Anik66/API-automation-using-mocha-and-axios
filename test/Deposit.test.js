import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import { expect } from 'chai';
import {writeUserData,ReadUserdataByRole} from '../utils/utils.js'


it("deposit money from system to agent", async() => {
    const agents =ReadUserdataByRole("Agent")
    if(agents.length === 0) return;
    const agent=agents[0]

    const { data } = await axios.post(`${process.env.base_url}/transaction/deposit`, {
       "from_account":"SYSTEM",
         "to_account":agent.agent_phone_number,
          "amount":2000
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data) 
    expect(data.message).to.equal("Deposit successful");
    
})

it("deposit money from agent to customer", async() => {
    const agents =ReadUserdataByRole("Agent")
    const customers=ReadUserdataByRole("Customer")
    if(agents.length === 0 || customers.length === 0) return;
    const agent=agents[0]
    const customer=customers[1]
    const { data } = await axios.post(`${process.env.base_url}/transaction/deposit`, {
        
            "from_account":agent.agent_phone_number,
            "to_account":customer.customer_two_phone_number,
            "amount":1500
        
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
    expect(data.message).to.equal("Deposit successful");
    
})