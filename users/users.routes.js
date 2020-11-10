const router = require('express').Router();
const Joi = require('joi');

const usersModel = require('./users.model');

router.route('/').get(async (req, res) =>  {
    try {
        const users = await usersModel.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).send('Ma\'lumotlar omborida xatolik mavjud!');
    }
});

router.route('/:id').get(async (req, res) => {
    try {
        const user = await usersModel.find({ _id: req.params.id });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).send('Afsuski user topilmadi!');
    }
})

router.route('/').post(async (req, res) => {
    try {
        const userSchema = {
            username: Joi.string().min(3).max(20).required(),
            password: Joi.string().min(4).max(23).required()
        }
        const result = Joi.validate(req.body, userSchema);
        if(result.error) {
            return res.status(400).send(result.error.details[0].message);
        }

        await usersModel.create(req.body);
        return res.status(200).json('Muvofaqqiyatli yaratildi!');
    } catch (error) {
        return res.status(400).send('Manbani yaratishda xatolik yuz berdi!');
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        const userSchema = {
            username: Joi.string().min(3).max(20).required(),
            password: Joi.string().min(4).max(23).required()
        }
        const result = Joi.validate(req.body, userSchema);
        if(result.error) {
            return res.status(400).send(result.error.details[0].message);
        }

        await usersModel.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json('Muvofaqqiyatli o\'zgartirildi!');
    } catch (error) {
        return res.status(400).send('Manbani o\'zgartirishda xatolik yuz berdi!');
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await usersModel.findByIdAndDelete(req.params.id);
        return res.status(200).json('Muvofaqqiyatli o\chirib tashlandi!');
    } catch (error) {
        return res.status(400).send('Manbani o\'chirib tashlashda xatolik yuz berdi!');
    }
});

module.exports = router;