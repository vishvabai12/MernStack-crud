const mongoose =require("mongoose");

const connectString = "mongodb+srv://Vetrikodi:vishva1705@vetrikodi.duvuxkj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectString,)
    .then(() => {
        console.log("MongoDB connected sucessfully..!");
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));