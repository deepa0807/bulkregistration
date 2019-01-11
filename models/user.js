var mongoose= require("mongoose");
var userSchema=new mongoose.Schema({
  email: {
        type: String,
        unique: true,
        sparse: true
    },
    fname: String,
    lname: String,
    userType: {
        type: Number,
        default: 1
    }

});

module.exports=mongoose.model("Users",userSchema);