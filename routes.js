const router = require('express').Router();

const categoryRoutes = require('./category/category.routes');
const productRoutes = require('./product/product.routes');
const usersRoutes = require('./users/users.routes');

router.use('/category',categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', usersRoutes);

module.exports = router;