const {Schema, model} = require ('mongoose');

const product = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

module. exports = model('procucts', product);