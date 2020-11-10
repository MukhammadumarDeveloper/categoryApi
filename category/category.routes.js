const router = require('express').Router();

const categoryModel = require('./category.model');

router.route('/').get(async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json('Malumotlar ba\'zasida xatolik yuz berdi!');
    }
});

router.route('/').post(async (req, res) => {
    try {
        await categoryModel.create(req.body);
        return res.status(200).json('ok ma\'lumotlar omboriga yozildi!');
    } catch (error) {
        return res.status(401).json('ma\'lumotlar ba\'zasiga yozishda xatolik yuz berdi!');
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        const id = req.params.id;
        await categoryModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json('Muvofaqiyatli o\'zgartirildi!');
    } catch (error) {
        return res.status(400).json('Manbani o\'zgartirishda xatolik yuz berdi');
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        await categoryModel.findByIdAndRemove(id);
        return res.status(200).json('Muvofaqqiyatli o\'chirildi!');
    } catch (error) {
        return res.status(400).json('Manbani o\'chirishda xatolik yuz berdi!');
    }
})
module.exports = router;