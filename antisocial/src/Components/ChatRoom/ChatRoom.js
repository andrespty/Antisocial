import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { socket } from '../../App'
import { TextField, Container, Box, Paper, IconButton, makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import MessageBox from '../MessageBox/MessageBox'
import moment from 'moment'

function ChatRoom() {

    let { room } = useParams()
    const [ message, setMessage ] = useState('')
    const classes = useStyles()
    const [ messageList, setMessageList ] = useState([])

    const send_message = (e) => {
        e.preventDefault()
        socket.emit('sendMessage', message)
    }

    useEffect(()=>{
        socket.on('receiveMessage', ({message, name})=>{
            console.log(`${name}: ${message}`)
            const newMessage = {name:name, message:message, time: moment().format('MMMM Do YYYY, h:mm:ss a')}
            setMessageList([...messageList, newMessage])
        })
        return ()=> socket.off('receiveMessage')
    })
    

    return (
        <div>
        <Container>
            <Box mt={10}>
                <Paper style={{padding:'20px'}}>

                    <MessageBox list={messageList}/>

                    <div className={classes.lowerSection}>
                        <form id='chat' className={classes.textBox}>

                        <TextField 
                            label='message' 
                            onChange={(e)=>setMessage(e.target.value)}
                            fullWidth
                            variant='outlined'
                            autoFocus
                            color='secondary'
                        />

                        </form>

                        <IconButton 
                            form='chat' 
                            type='submit' 
                            onClick={(e)=>send_message(e)} 
                            disabled={(message === '') ? true : false}
                            color='secondary'
                        >
                            <SendIcon />
                        </IconButton>
                    </div>   

                </Paper>
            </Box>
        </Container>
        
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    lowerSection:{
        display:'flex'
    },
    textBox:{
        flexGrow:1
    }

}))

export default ChatRoom
