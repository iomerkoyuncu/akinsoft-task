const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

const errorHandler = require("./middlewares/errorMiddleware")

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")))

  app.get("*", (req, res) => {
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  })
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Survey App API" })
  })

}

//Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/surveys", require("./routes/surveyRoutes"))
app.use("/api/questions", require("./routes/questionRoutes"))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
