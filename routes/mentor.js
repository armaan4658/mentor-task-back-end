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
//getting mentor 
router.get('/getmentor',async(req,res) => {
    try{
        const mentors = await Mentor.find();
        res.status(200).send(mentors);
    }catch(e){
        res.status(402).send({"message":e});
    }
})
//getting student 
router.get('/getstudent',async(req,res) => {
    try{
        const students = await Student.find();
        res.status(200).send(students);
    }catch(e){
        res.status(402).send({"message":e});
    }
})
//getting assigned mentor & student
router.get('/getassignedstudents',async(req,res) => {
    try{
        const assignedStudents = await AssignMentor.find();
        res.status(200).send(assignedStudents);
    }catch(e){
        res.status(402).send({"message":"green"});
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