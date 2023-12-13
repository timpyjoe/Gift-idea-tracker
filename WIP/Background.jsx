import React from 'react';
import './style.css'

export default function Background() {
  return (
    <>
      <div class="img"> style{{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('https://i.imgur.com/3ocYD4J.png')",
        backgroundSize: 'cover',
      }}
      </div>
    </>
  )
}

{/* <body>
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: "url('https://i.imgur.com/3ocYD4J.png')",
    backgroundSize: 'cover',
  }}
</body> */}
