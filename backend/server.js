const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;
app.use(express.json());

const mongoose = require('mongoose');
async function connectDatabase() {
    await mongoose.connect('mongodb+srv://admin:admin@project-cluster.ntsdu0a.mongodb.net/');
}
connectDatabase().then((result)=>console.log(result)).catch((err)=> console.log(err));

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    semester:Number
});
const Student = mongoose.model('Student',studentSchema);
router.all('/', (req,res)=>{
    res.json(({
        success:true,
        message:"student  server is live 🐴 🐤 🐈"
    }))
})
router.post('/student',(req,res)=>{
    const {name,age,semester} = req.body;
    const studentCreated = new Student({name:name , age:age, semester:semester});
    studentCreated.save();
    res.json(({
        success:true,
        studentCreated
    }))
})

router.delete('/student/:id',async(req,res)=>{
    const {id} = req.params;
    const deletedData  = await Student.findByIdAndDelete(id);
    res.json({
        success: true,
        deletedData
    })
})

router.get('/student',async (req,res)=>{
    const student  = await Student.find(); 
    res.json({
        success: true,
        student
    })
})
app.use(router);
app.listen(PORT, ()=>{
console.log('server is started on port number ${port}');
})
