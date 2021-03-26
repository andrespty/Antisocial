import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import Message from './Message'

function MessageBox(props) {

    const classes = useStyles()
    const messageList = props.list

    return (
        <div>
           <Container className={classes.container} maxWidth='lg' >
                { messageList.map((message, key) => (
                    <Message key={key} props={{name:message.name, message:message.message, time:message.time}}/>
                ))}
           </Container> 
        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    container:{
        height:'400px',
        border:'1px solid',
        borderRadius:'4px',
        marginBottom:'10px',
        borderColor: grey[300]
    }
}))

export default MessageBox
