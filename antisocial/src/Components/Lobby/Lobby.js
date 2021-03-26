import React, { useState } from 'react'
import { Container, Box, Typography, Paper, Button } from '@material-ui/core'
import Form from './Form'
import { useHistory } from 'react-router-dom'
import { socket } from '../../App' 

function Lobby() {

    const [ room, setRoom ] = useState('')
    const [ name, setName ] = useState('')
    let history = useHistory()

    const submit = (e) => {
        e.preventDefault()
        history.push(`/${room}`)
        socket.emit('joinChat', {room, name})
    }

    return (
        <div>
            <Container maxWidth='sm'>
                <Box mt={15}>
                    <Paper style={{padding:'50px'}} elevation={3}>
                        
                        <Typography variant='h3'>Welcome Stranger!</Typography>

                        <Form props={{room, name, setRoom, setName, submit}}/>
                        
                        <Button variant='contained' style={{marginTop:'30px'}} color='primary' form='chatroom' type='submit'>
                            Click me
                        </Button>
                    
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default Lobby
