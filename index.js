const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = [
  {id:1, name:'sujon',email:'sujonSheikh@gmail.com'},
  {id:2, name:'sakil',email:'sakil@gmail.com'},
  {id:3, name:'shamim',email:'shamim@gmail.com'},
  {id:4, name:'sojeeb',email:'sojeeb@gmail.com'},
  {id:5, name:'babul',email:'babul@gmail.com'},
  {id:6, name:'khobir',email:'khobir@gmail.com'},
  {id:7, name:'toukir',email:'toukir@gmail.com'},
  {id:8, name:'mamun',email:'mamun@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res) => {
  res.send(users)
})

// app.get('/user/:id',(req,res) => {
//   const one = req.params.id
//   const two = users[one]
//   res.send(two)
// })

app.get('/user/:id',(req,res) => {
  const one = parseInt(req.params.id)
  const two = users.filter(x => x.id === one)
  res.send(two)
})

app.post('/user',(req,res) => {
  const user = req.body
  user.id = users.length + 1;
  users.push(user)
  res.send(user)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})