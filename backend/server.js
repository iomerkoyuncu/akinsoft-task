const express = require("express")
const app = express()
const cors = require("cors")

const errorHandler = require("./middlewares/errorMiddleware")

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Survey App API" })
})


//Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/surveys", require("./routes/surveyRoutes"))
app.use("/api/questions", require("./routes/questionRoutes"))
app.use("/api/answers", require("./routes/answerRoutes"))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
