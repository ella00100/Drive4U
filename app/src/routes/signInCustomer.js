import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('signIn');
});

router.post('/', async (req, res) => {
    const vars = req.body;

    console.log(req.body);
    console.log(req.session);

    let loginSuccessful = false;

    try {
        const customers = await selectSql.getCustomers();

        customers.forEach((customer) => {
            console.log('Customer ID:', customer.CustomerId);
            console.log('Customer Password:', customer.Password);
            console.log(' ');

            if (vars.id === customer.CustomerId && vars.password === customer.Password) {
                console.log('Login success!');
                req.session.user = { id: customer.CustomerId, role: 'customer', checkLogin: true };
                req.session.Id = customer.CustomerId;
                loginSuccessful = true;
            }
        });

        if (loginSuccessful) {
            return res.redirect('/ownerDash'); 
        } else {
            console.log('Login failed!');
            res.send(`<script>
                        alert('Login failed!');
                        location.href='/';
                    </script>`);
        }
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
