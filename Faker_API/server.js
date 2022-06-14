const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
const User = require('./User');
const Company=require('./Company');
const Address=require('./Address');

// we can create a function to return a random / fake "User"
const createUser = () => {
    return new User(faker.datatype.uuid(), faker.internet.password(), faker.internet.email(), faker.phone.phoneNumber(), faker.name.lastName(), 
    faker.name.firstName())};

const createAddress=()=>{
    return new Address(faker.address.streetName(), faker.address.city(), faker.address.state(), faker.address.zipCode(),faker.address.country() )
}
// street, city, state, zipcode, country
const createCompany = () =>{
    return new Company(faker.datatype.uuid(), faker.company.companyName(), createAddress())
} 

const newUser = createUser();
const newAddress = createAddress();
const newCompany=createCompany();
console.log(newUser);
console.log(newAddress);
console.log(newCompany);

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json( newUser );
});

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json( newCompany );
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company",(req,res,next)=>{
    res.json( {newUser,newCompany} );
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );