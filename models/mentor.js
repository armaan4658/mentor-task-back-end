import mongoose from "mongoose";
const mentorSchema = mongoose.Schema({
    mentorName : {
        type: String,
        required: true
    }
})
export const Mentor = mongoose.model("Mentor",mentorSchema);