const router = require('express').Router();

const productModel = require('./product.model');
const categoriesModel = require('../category/category.model');

router.route('/').get(async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json('Malumotlar ba\'zasida xatolik yuz berdi!');
    }
});

router.route('/').post(async (req, res) => {
    try {
        const categories = await categoriesModel.find({});
        let isCreate = categories.find(b => b.name === req.body.category);
        if (!isCreate) return res.status(401).json('Bunday kategoriya mavjud emas!');
        await productModel.create(req.body);
        return res.status(200).json('Muvofaqqiyatli yaratildi!');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        const categories = await categoriesModel.find({});
        let isCreate = categories.find(b => b.name === req.body.category);
        if (!isCreate) return res.status(400).json('Bunday kategoriya mavjud emas!');
        else {
            const id = req.params.id;
            await productModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json('Muvofaqqiyati yangilandi!');
        }
    } catch (error) {
        res.status(400).json('Manbani o\'zgartirishda xatolik yuz berdi!');
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        return res.status(200).json('Muvofaqiyatli o\'chirildi!');
    } catch (error) {
        return res.status(400).json('Manbani o\'chirishda xatolik yuz berdi!');
    }
})

module.exports = router;