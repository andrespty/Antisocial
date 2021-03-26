import React from 'react'
import { TextField, FormControl } from '@material-ui/core'

function Form(props) {

    const { room, setRoom, name, setName, submit } = props.props

    return (
        <div style={{marginTop:'30px'}}>
        <form id='chatroom' onSubmit={(e)=>submit(e)}>
            <FormControl >
                <TextField label='Room' variant='outlined' margin='dense' value={room} onChange={(e)=>setRoom(e.target.value)}/>
                <TextField label='Name' variant='outlined' margin='dense' value={name} onChange={(e)=>setName(e.target.value)}/>
            </FormControl>
        </form>
        </div>
    )
}

export default Form
