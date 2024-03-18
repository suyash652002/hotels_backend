const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
    // console.log(req.body);
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'writer') {
            const response = await Person.find({ work: workType });
            console.log('respose fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: "Invalid work type" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;