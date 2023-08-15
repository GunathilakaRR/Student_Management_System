const router = require("express").Router();
let student = require("../models/Student");


// create operation
router.route("/add").post((req, res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    const newStudent = new student({
        name,
        age,
        gender,
        address
    })

    newStudent.save().then(()=>{
        res.json("Student added...");
    }).catch((err)=>{
        console.log(err);
    })

})




// read operation
router.route("/").get((req, res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})



//update opearion
router.route("/update/:id").put(async(req, res)=>{
    let userId = request.params.id; 
    const{name, age, gender, address} = request.body;

    const updateStudent = {
        name,
        age,
        gender,
        address
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status: "user updated..."})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data", error:err.message});
    })

    
})


//delete operation
router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted..."})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete user", error:err.message})
    })
})



//fetch data of one user
router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;

    const user = await Student.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", user: user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user", error: err.message})
    })
})


module.exports = router;