import routes from './routes'
import cors from 'cors'
import express from 'express'

// Inciar o express
const app = express();

/* Definir as regras do aservidor 
Meio de comunicação e um json */
app.use(express.json());

// Definir como os dados vao ser intrepertado
app.use(express.urlencoded({extended:  true}))

/* Definir o cors - middlewaee para aplicações node.js
Que permite ou restinge requisiçoes entre origens 
 ou seja requisiçoes croos-oringin */
 app.use(cors())

// Deinir as rotas 
app.use(routes)

export default app;