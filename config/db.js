const mongoose = require('mongoose')

const uri = "mongodb+srv://priyajit:indiatimes@cluster0.bb04n.mongodb.net/react-todo?retryWrites=true&w=majority";

const connectDatabase = async () => {
   try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('Database Connected Successfully')
        })
   } catch (error) {
        console.log(error)
        process.exit(1)
   } 
}

module.exports = connectDatabase