const express = require("express")

const routes = express.Router()

const NoteModel = require("../models/Notes")

//Get All notes

routes.get("/notes", async(req, res) => {
    try {
        const noteList = await NoteModel.find({})
        
        res.status(200).json(noteList)
    }catch (error){
        res.status(500).json(error)
    }
    
})
//Add NEW Notes
routes.post("/notes",async (req, res) => {

   console.log(req.body)
    try {
        var newNotes = new NoteModel({
            ...req.body
        })
        
        await newNotes.save()
        res.status(200).json(newNotes)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

//Update existing Notes By Id
routes.put("/notes/:noteid", async(req, res) => {
    try {
       await NoteModel.findByIdAndUpdate(req.params.noteid,{...req.body});
        
        res.send({message: "Updated"})
    } catch (error) {
        res.status(500).send(error)
    }
})

//Delete Delete By ID
routes.delete("/notes/:noteid", async (req, res) => {
    try {
        await NoteModel.findByIdAndDelete(req.params.noteid)
        res.status(200).send("deleted")
    } catch (error) {
        res.status(500).send(error)
    }
})

//Get Notes By ID
routes.get("/notes/:noteid", (req, res) => {
    try {

        const oneNote = NoteModel.findById(req.params.noteid)

        res.status(200).send(oneNote)
        
    } catch (error) {
        res.send(500).error(error)
    }
})


module.exports = routes