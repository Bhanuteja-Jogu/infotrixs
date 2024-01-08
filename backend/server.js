import express from "express"
import home from "./home.js"
import cors from "cors"

const app= express();
app.use(express.json());
app.use(cors())

app.get('/home',home.getQuote)
app.use('*', (req,res)=>{
    res.status(404).send("error: page not found")
})
export default app