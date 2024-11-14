const express = require('express')
const mustacheExpress = require('mustache-express')


const app = express()

app.engine('html',mustacheExpress())
app.set('view engine', 'html')
app.set('views',__dirname+'/src/views')


app.use(express.urlencoded({extended : true}))

app.use('/',require('./src/routes/indexRoutes'))
app.use('/publique',require('./src/routes/publiqueRoutes'))


app.use(express.static('src'))


const app_porta = 8000

app.listen(app_porta,function(){
    console.log("App rodando na porta "+app_porta+"!!")
})