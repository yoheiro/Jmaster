import React from 'react';


// class Rtcmain extends React.Component {
//     render() {
//       return (
//         <div>
        
//           <h1 className="title">Hello Japanese World</h1>
          
//           <p>Let's Learn Japanese!!</p>
//         </div>
//       );
//     }
//   }
  
//   export default Rtcmain;

import { useState, useRef } from 'react'
import './App.css'
import Peer from 'skyway-js'
const peer = new Peer({ key:'b6a89076-368e-463b-bd86-0925fd16f9f9' })

const Appp = () => {
  const [myId, setMyId] = useState('')
  const [callId, setCallId] = useState('')
  const localVideo = useRef(null)
  const remoteVideo = useRef(null)
  peer.on('open', () => {
    setMyId(peer.id)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(localStream => {
      localVideo.current.srcObject = localStream
    })
  })

  peer.on('call', mediaConnection => {
    mediaConnection.answer(localVideo.current.srcObject)

    mediaConnection.on('stream', async stream => {
      remoteVideo.current.srcObject = stream
    })
  })

  const makeCall = () => {
    const mediaConnection = peer.call(callId, localVideo.current.srcObject)
    mediaConnection.on('stream', async stream => {
      remoteVideo.current.srcObject = stream
      await remoteVideo.current.play().catch(console.error)
    })
  }
  return (
    <div>
      <div>skyway test</div>
      <div><video width="400px" autoPlay muted playsInline ref={localVideo}></video></div>
      <div>{myId}</div>
      <div>
        <input value={callId} onChange={e => setCallId(e.target.value)}></input>
        <button onClick={makeCall}>発信</button>
      </div>
      <div><video width="400px" autoPlay muted playsInline ref={remoteVideo}></video></div>
    </div>
  )
}

export default Appp