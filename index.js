const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const corsMiddleware = require('./middleware/cors.middleware')

//App Config
const app = express()
app.use(corsMiddleware)
app.use(express.json())

const PORT = config.get('port') || 5000

app.get('/', (req, res) => res.status(200).send('Сервер пашит !'))

//Routing 
app.use('/catalog', require('./routes/catalog.routes'))
app.use('/product', require('./routes/product.routes'))
app.use('/registr', require('./routes/registr.routes'))

//Server starting
const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Error', e.message)
        process.exit(1)
    }
}

start()