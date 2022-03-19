const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


class User {
    constructor() {
        // this.id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phonenumber = faker.phone.phoneNumber()
        this.email = faker.internet.email() 
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        // this.id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.street = faker.address.streetName()
        this.city = faker.address.city()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()
    }
}

app.get("/api/users", (req, res) => {
    let fakeUser = new User();
    res.json({fakeUser})
})

app.get("/api/company", (req, res) => {
    let fakeCompany = new Company();
    res.json({fakeCompany})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );