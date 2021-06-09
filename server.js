const express=require("express")
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config();

//import route
const authRoute=require("./routes/auth");

//conn to db
mongoose.connect(
process.env.DB_CONNECT,
{ useNewUrlParser: true } ,
()=>{console.log("connected to mongo")
}
)


//middlewares
app.use(express.json())

//route middleware

app.use("/api/user",authRoute)




app.listen(8000,()=>{console.log("server running")})