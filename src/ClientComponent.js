import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client'
// import logo from './logo.svg';
// import './App.css';
const ENDPOINT = "http://127.0.0.1:4001"

const ClientComponent = () => {
    const [response, setResponse] = useState("")

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on("FromAPI", data => {
            setResponse(data)
        })

        return () => socket.disconnect()
    }, [])

    if (response !== "") {
        return (
            // <div className="App">
            <div>
                <p>
                    It's <time dateTime={response}>{response}</time>
                </p>

                {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
            </div>
        );
    } else {
        return (
            <div>Halo Guys</div>
        )
    }

}

export default ClientComponent
