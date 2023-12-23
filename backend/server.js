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

const taskSchema = new mongoose.Schema({
    name:String,
    desc:String,
    status:Boolean
});
const Task = mongoose.model('Task' , taskSchema);
router.all('/', (req,res)=>{
    res.json(({
        success:true,
        message:"Todo  server is live"
    }))
})

router.post('/Task',async (req,res)=>{
    const {name,desc,status} = req.body;
    const taskCreated = new Task({name:name , desc:desc, status:status});
    await taskCreated.save();
    res.json(({
        success:true,
        message:"Task has been created successfully"
    }))
}) 




 router.delete('/Task/:id',async(req,res)=>{
      const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({
        success: true,
        message:"user deleted successfully"
    })
})

router.get('/Task',async (req,res)=>{
    const task  = await Task.find(); 
    res.json({
        success: true,
        task
    })
})

router.get('/Task/status/:status',async (req,res)=>{
    const status = req.params.status == "true" ? true: false;
    // console.log(typeof(status))
    const task  = await Task.find({status}); 
    res.json({
        success: true,
        task
    })
})
app.use(router);
app.listen(PORT, ()=>{
console.log('server is started on port number ${port}');
})
