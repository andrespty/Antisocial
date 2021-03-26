import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function Message(props) {

    const { name, message, time } = props.props

    return (
        <div>
            <Paper>
                <Typography>
                    {time}
                </Typography>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {message}
                </Typography>
            </Paper>
        </div>
    )
}

export default Message
