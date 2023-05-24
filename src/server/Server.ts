import express from 'express'

const server = express()


server.get('/',(req,res) => {
    return res.send('Este site está sendo hospedado pelo servidor de isaque do nascimento gostosão')

})


export {server}