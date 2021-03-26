const app = require('express')()
const { Socket } = require('dgram')
const path = require('path')
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

//Main Socket

io.on('connection', (socket)=>{
    console.log('Connected')
    console.log(socket.rooms)

    socket.on('joinChat', ({room, name})=>{
        socket.join(room)
        let message = `${name} has joined ${room}`
        io.in(room).emit('receiveMessage', {message, name})

        socket.on('sendMessage', (message)=>{
            console.log(message)
            io.in(room).emit('receiveMessage', {message, name})
        })

    })

    
    socket.on('disconnect', ()=>console.log('Disconnect'))
})

http.listen(4000, ()=>{
    console.log('Listening on Port: 4000')
})