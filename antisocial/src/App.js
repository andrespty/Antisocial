import Lobby from './Components/Lobby/Lobby'
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import io from 'socket.io-client'

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>

      <Router>
        
        <Switch>

          <Route path='/:room'>
            <ChatRoom/>
          </Route>

          <Route path='/'>
            <Lobby />
          </Route>

        </Switch>

      </Router>

    </ThemeProvider>
    </div>
  );
}

export const socket = io('http://localhost:4000')
export default App;
