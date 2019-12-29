import express from 'express'
import data from '../src/data/data.json'

const app = express()
app.use(express.json())

app.get('/clientes', (req, res) => {
  return res.json(data)
})

app.get('/clientes/:id', (req, res) => {
  const { id } = req.params
  const cliente = data.find(cli => cli.id == id)
  
  if(!cliente) return res.status(404).json()
  return res.json(cliente)
})

app.post('/clientes', (req, res) => {
  const { name, email} = req.body
  //salvar
  //salvar
  res.json({name, email})
})

app.put('/clientes/:id', (req, res) => {
  const { id } = req.params
  const cliente = data.find(cli => cli.id == id)
  if(!cliente) return res.status(404).json()
  const { name } = req.body
  cliente.name = name
  res.json(cliente)
})

app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params
  const clientesFiltrados = data.filter(client => client.id != id)
  res.json(clientesFiltrados)
})

app.listen(3333)
