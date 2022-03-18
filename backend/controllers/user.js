require('dotenv').config()
const client = require('../database/database')
const jwt = require('jsonwebtoken');



const login = async (req, res) => {
    var userCredentials = {}
   await client.connect()
   client.query('SELECT * FROM user', (err, result) => {
       if(!err){
          userCredentials = {
              admin_id: result.rows['admin_id'],
              email: result.rows['admin_email'],
              password: result.rows['admin_password']
          }
       }
       client.end();
   })
   const token = jwt.sign(
       {admin_id: userCredentials.admin_id, email: userCredentials.email, password: userCredentials.password},
       process.env.TOKEN_KEY,
       {
           expiresIn: "12h"
       }
   );
   userCredentials.token = token;
   if(req.body.email === userCredentials.email && req.body.password === userCredentials.password){
       res.redirect('/admin-panel');
   }
}


const donate = async (req, res) => {
    await client.connect();
    const singleDonation = req.body
    const donation = {
        donation_id: singleDonation.transaction_id,
        donor: singleDonation.client_name,
        amount: singleDonation.amount,
        date_donated: singleDonation.date
    }
    client.query(`INSERT INTO donations(
        donation_id,
        donor,
        amount,
        date_donated
    )VALUES(
        ${donation.donation_id},
        ${donation.donor},
        ${donation.amount},
        ${donation.date_donated}
    )`, (err, result) => {
        if(!err){
            res.status(200).json({msg: 'Successful Donation', payload: result.rows})
        }
        client.end();
    })
}

const fillAdminDashboard = async (req, res) => {
    await client.connect();
    client.query('SELECT * FROM donations ORDER BY date_donated ASC', (err, result) => {
        if(!err){
            res.status(201).json({msg: 'All users loaded', payload: result})
        }
        client.end();
    })
}


module.exports = {
    login,
    donate,
    fillAdminDashboard
}