import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import home from "./home.js"
dotenv.config()

const port = process.env.PORT || 8000
const uri= process.env.URI
const client= new mongodb.MongoClient(uri)

client.connect()
.catch((e)=>{console.log(`Error connecting to database ${e}`)})
.then(async ()=>{
    await home.ref(client)
    app.listen(port,()=>{console.log(`Listening on port ${port}...`)})
})
