var express = require ('express');
const orderModel = require('../models/orderModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var order_list = await orderModel.find({})
   res.render('order/list', { order: order_list })
})

router.get('/delete/:id', async(req, res) => {
   await orderModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete order succeed ')});
   res.redirect('/order');
})

router.get('/edit/:id', async (req, res) => {
   var order = await orderModel.findById(req.params.id);
   res.render('order/edit', { order : order });
})

router.post('/edit/:id', async(req, res) =>{
   await orderModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit order succeed")});
   res.redirect('/order');
})
router.get('/add', (req, res) => {
   res.render('order/add');
})
router.post('/add', async (req, res) => {
   var order  = req.body;
   await orderModel.create(order)
   .then(() => { console.log ("Add new order succeed")});
   res.redirect('/order');
})



module.exports = router;