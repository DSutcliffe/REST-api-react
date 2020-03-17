const {Router} = require('express');
const router = Router();

const Product = require('../models/productSchema');

router.get('/', (req, res) => {         
    Product.find({}).then((docs) => {   // retrieve all products in our database
        const response = {
            count: docs.length,
            products: docs.map((doc) => {
                return {
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id
                }
            })
        }

        res.status(200).json(response)      // 200 status is successful
    });
});

module.exports = router;