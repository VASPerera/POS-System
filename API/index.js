const express = require ("express");
const mongoose = require("mongoose");
require('dotenv').config();

const bodyParser = require("body-parser");
const port = process.env.PORT  ;

const app = express();

const userRoute = require("./routes/UserRouter");
const customerRoute = require("./routes/CustomerRouterr");
const orderRoute = require("./routes/OrderRouter");
const productRoute = require("./routes/ProductRouter");

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use("/user",userRoute);
app.use("/order",orderRoute);
app.use("/product",productRoute);
app.use("/customer",customerRoute);

// try{
//     mongoose.connect("mongodb+srv://avishka1999perera:Avi!@#123@cluster0.una9b23.mongodb.net");

//     app.listen(port,() => {
//         console.log(`server started & running on port ${port}`);
//     })
// }catch(e){
//     console.log(e)
// }

const connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
  });