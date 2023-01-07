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
    const searchQuery= req.query.search

    if (searchQuery) {
        try {
            const regex= new RegExp(searchQuery, "i")
            console.log(searchQuery)
            const degreeFilter= await Degree.find({name:regex})
            console.log(degreeFilter)

            res.status(200).json(degreeFilter)
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
    else {
        try {
            const foundDegrees= await Degree.find()
    
            res.status(200).json(foundDegrees)
        }
        catch(err) {
            res.status(500).json(err)
        }
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

router.post("/autocomplete", async(req, res)=> {
    try {

        const regex= new RegExp(req.body.what, "i")
        
        // console.log(regex   )
        // console.log(degreeFilter)
        // degreeFilter.exec(function(err, data){
        //     console.log(data)
        //     var result=[]
        //     if (!err) {
        //         if (data && data.length && data.length>0) {
        //             data.forEach(user=> {
        //                 let obj={
        //                     id: user._id,
        //                     label: user.name
        //                 }
        //                 result.push(obj)
        //             })
        //         }
        //     }

        if (!req.body.where) {
            const degreeFilter= await Degree.find({name:regex}, {name:1})
            var result=[]
            if (degreeFilter && degreeFilter.length>0) {
                degreeFilter.forEach(deg=> {
                    let obj= {
                        id: deg._id,
                        label: deg.name
                    }
                    result.push(obj)
                })
            }
            res.status(200).json(result)
        }
        else if (!req.body.what) {
            console.log(req.body.where)
            const degreeFilter= await Degree.find({location:{each: regex}})
            console.log(degreeFilter)
            var result=[]
            if (degreeFilter && degreeFilter.length>0) {
                degreeFilter.forEach(deg=> {
                    let obj= {
                        id: deg._id,
                        label: deg.name
                    }
                    result.push(obj)
                })
            }
            console.log(result)
            res.status(200).json(result)
        }
    }
    
    catch(err) {
        res.status(500).json(err)
    }

})

module.exports= router