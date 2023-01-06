const mongoose= require("mongoose")

const DegreeSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        university: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        location: [
            {
                each: {
                    type: String,
                    required: true
                }   
            }
        ],
        fees: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        fulltime: {
            type: Boolean,
            required: true
        },
        campus: {
            type: String,
            required: true
        },
        about: {
            type: String,
            required: true
        },
        rating: {
            type: String,
        },
        ranking: {
            type: String,
        },
        credits: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        apply: {
            type: String,
            required: true
        },
        disciplines:[
            {
                discipline: {
                    type: String,
                    required: true
                }
            }
        ],
        overview: {
            type: String,
            required: true
        },
        programmestructure: [
            {
                points: {
                    type: String,
                    required: true
                }
            }
        ],
        acadrequirements: {
            type: String,
            required: true
        },
        engrequirements: [
            {
                req: {
                    type: String,
                    required: true
                }
            }
        ],
        otherrequirements: [
            {
                other: {
                    type: String,
                    required: true
                }
            }
        ],
        cost : {
            type: String,
            required: true
        },
    },
    {

        timestamps: true
    }
)

module.exports= mongoose.model("Degree", DegreeSchema)