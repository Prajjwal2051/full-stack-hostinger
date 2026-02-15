import express from "express"
import cors from "cors"

const app= express()

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174"
            // in production add the url of production or domain
        ],
        credentials:true,

    }
))

// now make a api route
app.get("/api/message", (req,res) =>{
    res.json(({
        message:"hello from the first api"
    }))
})

const PORT=4000

app.listen(PORT,"0.0.0.0",()=>{
    console.log("server is listening at port: ",{PORT})
})