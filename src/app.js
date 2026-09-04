const express = require('express')
const noteModel = require("./models/note.model")
const app = express();
app.use(express.json());


app.post("/notes", async(req,res) => {
  const data = req.body

  await noteModel.create({
    title: data.title,
    description:data.description
  })

  res.status(201).json({
    message:"Note created"
  })
})

app.get('/notes', async(req,res) => {

  // findOne ,finds only one object, if not matches it gives null
  // koi condn nahi lagate to find ke andar ,toh saare data degi jitne rehte hai utna
  const notes = await noteModel.find()
  res.status(200).json({
    message:"Notes fetched successfully",
    notes:notes
  })
})

module.exports = app 