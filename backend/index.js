const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const stripe = require('stripe')(process.env.stripe_Secret_key);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
const port = process.env.PORT 

app.get('/', (req, res) =>{
    console.log("hello world")
})
app.post("/pay",async (req, res) =>{
    console.log(req.body)
    const charge = await stripe.charges.create({
        amount: req.body.amount * 100,
        currency: "usd",
        source: req.body.stripeToken,
         
    })
    res.send(charge)
})

console.log("hello world")

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
