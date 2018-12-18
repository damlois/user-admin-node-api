const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TerraSchema = new Schema({
    name: {
        type: String,
        required: (true, 'Name is required please input name')
    },
    email: {
        type: String,
        required: (true, 'email is required, enter your mail')
    },
    age: {
        type: Number,
        max: 50
    },
    profession: {
        type: String
    }
});


module.exports = mongoose.model('terraformers', TerraSchema);