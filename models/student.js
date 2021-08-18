import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    studentName : {
        type: String,
        required: true
    }
})
export const Student = mongoose.model("Student",studentSchema);