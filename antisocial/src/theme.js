import { createMuiTheme } from '@material-ui/core'
import { pink, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary:pink,
        secondary: indigo
    },
})

export default theme