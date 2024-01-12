const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: { type: ObjectId },
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String, require: true },
    diem: { type: Number },
    man: { type: Number },
    coin: { type: Number },
    otp: { type: Number },
    roll: { type: Number },
    X: { type: Number },  // Tọa độ X
    Y: { type: Number },  // Tọa độ Y
    Z: { type: Number },   // Tọa độ Z
});

const PetinUserSchema = new Schema({
    id: { type: ObjectId },
    id_user: { type: ObjectId, ref: "User" },
    id_pet: { type: ObjectId ,ref: "Pet"},
    trangthai: { type: String },
});


const PetSchema = new Schema({
    id: { type: ObjectId },
    petname: { type: String },
    price: { type:Number},
    mdescribe: { type: String },
});




let User = mongoose.model("User", UserSchema);
let PetinUser = mongoose.model("PetinUser",PetinUserSchema);
let Pet = mongoose.model("Pet",PetSchema);
module.exports = { User, PetinUser,Pet };