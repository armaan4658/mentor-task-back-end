import mongoose from "mongoose";
const assignMentorSchema = mongoose.Schema({
    mentorName : {
        type: String,
        required: true
    },
    studentName : {
        type: String,
        required: true
    }
})
export const AssignMentor = mongoose.model("AssignMentor",assignMentorSchema);