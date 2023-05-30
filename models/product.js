const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter a product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true,'Please enter a product price'],
        maxLength: [5, 'Product price cannot exceed 5 characters']
    },
    description: {
        type: String,
        required: [true,'Please enter a product description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            publicId: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true,'Please select a category of this product'],
        enum:{
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Home'
            ],
            message: 'Please select a correct category for the product',
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter a product seller']
    },
    stock:{
        type: Number,
        required: [true, 'Please enter the product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters']
    },
    numberOfReview: {
        type: Number,
        default: 0
    },
    reviews:[
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product',productSchema);