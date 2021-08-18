import express from "express";
import {Mentor} from '../models/mentor.js';
import {Student} from '../models/student.js';
import {AssignMentor} from '../models/assignMentor.js';
export const router = express.Router();

//adding mentor
router.post('/addmentor',async(req,res) => {
    const {mentorName} = req.body;
    const isMentor = await Mentor.findOne({mentorName});
    if(!isMentor){
        try{
            const mentor = new Mentor({
                mentorName
            })
            await mentor.save();
            res.send({"message":"green"});
        }catch(e){
            res.status(402).send({"message":e});
        }
    }else{
        res.send({"message":"mentor already exists"})
    }
})

// adding student
router.post('/addstudent',async(req,res) => {
    const {studentName} = req.body;
    const isStudent = await Student.findOne({studentName});
    if(!isStudent){
        try{
            const student = new Student({
                studentName
            })
            await student.save();
            res.send({"message":"green"});
        }catch(e){
            res.status(402).send({"message":e});
        }
    }else{
        res.send({"message":"student already exists"})
    }
})

//assigning mentor
router.post('/assignmentor',async(req,res) => {
    const {studentName,mentorName} = req.body;
    const isStudent = await AssignMentor.findOne({studentName});
    if(!isStudent){
        try{
            const student = new AssignMentor({
                studentName,
                mentorName
            })
            await student.save();
            res.send({"message":"green"});
        }catch(e){
            res.status(402).send({"message":e});
        }
    }else{
        res.send({"message":"student already has a mentor"});
    }
})
// updating mentor
router.patch('/updatementor',async(req,res) => {
    const {studentName,mentorName} = req.body;
    const isStudent = await AssignMentor.findOne({studentName});
    if(isStudent){
        try{
            if(mentorName){
                isStudent.mentorName = mentorName;
            }
            await isStudent.save();
            res.send({"message":"green"});
        }catch(e){
            res.status(402).send({"message":e});
        }
    }else{
        res.send({"message":"student doesn't exist"});
    }
})