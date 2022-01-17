import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

function App() {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID='
            a0631340-573b-4708-8b2a-f4f95d1ef018'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
        />
    )
}

export default App