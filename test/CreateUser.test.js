import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import { expect } from 'chai';

import generateRandomNumber from '../utils/utils.js';
import { faker } from '@faker-js/faker';
import {writeUserData,ReadUserdataByRole} from '../utils/utils.js'


//create customer ome
it("Create customer one", async() => {
    const { data } = await axios.post(`${process.env.base_url}/user/create`, {
        "name": `${faker.person.fullName()}`,
        "email": `${faker.internet.email()}`,
        "password": "1234",
        "phone_number": `01205${generateRandomNumber(100000,999999)}`,
        "nid": "123456789",
        "role": "Customer"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
    

    writeUserData({
        id: data.user.id,
        customer_one_name: data.user.name,
        customer_one_email: data.user.email,
        customer_one_password: data.user.password,
        customer_one_phone_number: data.user.phone_number,
        role: data.user.role
    });
})
//create customer two
it("Create customer two", async() => {
    const { data } = await axios.post(`${process.env.base_url}/user/create`, {
        "name": `${faker.person.fullName()}`,
        "email": `${faker.internet.email()}`,
        "password": "1234",
        "phone_number": `01205${generateRandomNumber(100000,999999)}`,
        "nid": "123456789",
        "role": "Customer"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
    writeUserData({
        id: data.user.id,
        customer_two_name: data.user.name,
        customer_two_email: data.user.email,
        customer_two_password: data.user.password,
        customer_two_phone_number: data.user.phone_number,
        role: data.user.role
    });
})
//create new agent
it("Create new agent", async() => {
    const { data } = await axios.post(`${process.env.base_url}/user/create`, {
        "name": `${faker.person.fullName()}`,
        "email": `${faker.internet.email()}`,
        "password": "4321",
        "phone_number": `01205${generateRandomNumber(100000,999999)}`,
        "nid": "123456789",
        "role": "Agent"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
    writeUserData({
        id: data.user.id,
        agent_name: data.user.name,
        agent_email: data.user.email,
        agent_password: data.user.password,
        agent_phone_number: data.user.phone_number,
        role: data.user.role
    });
    
})

 //create new merchant
 it("Create new merchant", async() => {
    const { data } = await axios.post(`${process.env.base_url}/user/create`, {
        "name": `${faker.person.fullName()}`,
        "email": `${faker.internet.email()}`,
        "password": "9878",
        "phone_number": `01205${generateRandomNumber(100000,999999)}`,
        "nid": "123456789",
        "role": "Merchant"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.token}`,
            "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
        }
    })
    console.log(data)
    

    writeUserData({
        id: data.user.id,
        merchant_name: data.user.name,
        merchant_email: data.user.email,
        merchant_password: data.user.password,
        merchant_phone_number: data.user.phone_number,
        role: data.user.role
    });
})
