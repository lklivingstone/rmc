const express= require("express")
const cors= require("cors")
const mongoose= require("mongoose")
require("dotenv/config")
const app= express()

const authRoute= require("./routes/auth")
const degreeRoute= require("./routes/degree")

app.use(cors({
    credentials: true,
    origin: true
}))

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/degree", degreeRoute)


mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_CONNECTION
    ).then(
        () => console.log("Connected to DB")
        ).catch(
            (err)=> {
                console.log(err)
            })


app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening on port: 5000")
})