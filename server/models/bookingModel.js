const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        
        year: {type: Number},
        month: {type: Number},
        day: {type: Number},
        date: {type: Number},
        
        slots: [],
        slots_full: [],
        status: {
            type: String,
            required: true,
            default: "pending",
            enum: ["pending", "confirmed", "cancelled", "completed", "checked-in"]
        },
        notes: [{type: String}],
        amount: {type: Number},
        venue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Venue",   
        },
        subVenue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subVenue",   
        },
        
            participants: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                }
            ]
        },

    
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Booking", bookingSchema)