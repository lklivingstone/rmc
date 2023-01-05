const router= require("express").Router()
const Degree= require("../models/Degree")

router.post("/", async (req, res) => {
    const newDegree= new Degree(req.body)

    try {
        const savedDegree= await newDegree.save()
        res.status(200).json(savedDegree)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

router.get("/", async (req, res)=> {
    try {
        const foundDegrees= await Degree.find()

        res.status(200).json(foundDegrees)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const foundDegree= await Degree.findById(req.params.id)
        if (foundDegree) {
            res.status(200).json(foundDegree)
        }
        else {
            res.status(404).json("Degree does not exist")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports= router