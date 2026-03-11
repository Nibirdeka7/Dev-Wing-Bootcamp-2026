const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const productRoutes = require("./routes/productRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/products", productRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

// Start server
app.listen(3000,()=>{
console.log("Server running on port 3000")
})
