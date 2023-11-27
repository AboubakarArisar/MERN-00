const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;
app.use(express.json());

const mongoose = require('mongoose');
async function connectDatabase() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@project-cluster.ntsdu0a.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectDatabase().then((result)=>console.log(result)).catch((err)=> console.log(err));
app.use(router);
app.listen(PORT, ()=>{
console.log('server is started on port number ${PORT}');
})
router.all('/', (req,res)=>{
    res.json(({
        success:true,
        message:"Todo server is live 🐴 🐤 🐈"
    }))
})

router.get('/Task',(req,res)=>{
    res.json(({
        success:true,
        message:"I am Task page"
    }))
})