var mongoose = require('mongoose');
var personSchema = mongoose.Schema(
{
    NameCustomer : String,
    Phonenumber : Number,
    Address: String,
    Order: String,
}
);
 var orderModel = mongoose.model("order",personSchema, "order" );

module.exports=orderModel;