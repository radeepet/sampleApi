const express = require('express');
const app = express();
const port = 8081;
const cors= require('cors');

const corsOptions= {
    origin:"http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.get("/user", (req, res)=>{
    res.send({
        id: 1,
        firstName: "Stevan",
        lastName:"J",
    });
});

app.listen(port, () =>{
    console.log(`Example app listening at https://localhost:${port}`);
})