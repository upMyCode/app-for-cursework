const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const config = require('config')
const schema  = require('./schema')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = config.get('port') || 5000

const app = express()

app.use(cors())
app.use('/api/auth', require('./routes/auth.routes'))

const stocks = [
    {
        id: 1,
        ticker: 'SCHD',
        cost: '500$',
        value: 300,
        
    },
    {
        id: 2,
        ticker: 'VOO',
        cost: '400$',
        value: 800,
    },
    {
        id: 3,
        ticker: 'AbbVie',
        cost: '900$',
        value: 1000,
    }
]

const createStock = (input) => {
    const id = Date.now()
    return {
        id, ...input
    }    
}

const root = {
    getAllStocks: () => {
        return stocks
    },
    getStock: ({id}) => {
        return stocks.find(stock => stock.id == id)
    },
    createStock: ({input}) => {
        const stock = createStock(input)
        stocks.push(stock)
        return stock    
    } 
}

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

async function start() {
    try {
      await mongoose.connect(config.get('URL'), {
        // useNewUrlParser: true,
        // useUndefinedTopology: true,
        // useCreateIndex: true    
      })
      app.listen(PORT, () => console.log(`Running GraphQL API server at http://localhost:5000/graphql on PORT ${PORT}`))
    } catch (e) {
        console.log(`Server error ${e.message}`)
        process.exit(1)
    }
}

start()


