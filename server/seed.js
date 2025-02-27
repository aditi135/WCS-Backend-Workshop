// server/seed.js

const mongoose = require("mongoose");
const Note = require("./models/Note");  // Import the Note model from the correct path

const dbURI = "your mongodb connection string";

// Connect to MongoDB
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB for seeding...");
        
        // Seed Notes
        const notes = [
            {
                title: "First Note",
                content: "This is the content of the first note.",
            },
            {
                title: "Second Note",
                content: "This is the content of the second note.",
            },
            {
                title: "Third Note",
                content: "This is the content of the third note.",
            },
        ];

        // Delete all existing notes and insert the new ones
        Note.deleteMany({})
            .then(() => {
                return Note.insertMany(notes);
            })
            .then(() => {
                console.log("Notes have been seeded!");
                mongoose.connection.close();  // Close the connection once seeding is complete
            })
            .catch((err) => {
                console.error("Error during seeding:", err);
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
