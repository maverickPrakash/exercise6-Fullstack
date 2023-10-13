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
    //res.send({message: "Get All Books"})
})
//Add NEW Notes
routes.post("/notes", (req, res) => {

   console.log(req.body)
    try {
        var newNotes = new NoteModel({
            ...req.body
        })
        await .save()
        res.status(200).json(newNotes)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes