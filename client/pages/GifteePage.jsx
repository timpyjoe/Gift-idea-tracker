import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import Giftee from "../../server/models/Giftee";

function GifteePage() {
  return (



    <main
      className="main-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: '1px solid green',
      }}

    ><h2>About & Likes</h2>

      <h2>List of Gifts</h2>
      <ul>
        <li></li>

        <li></li>

        <li></li>

        <li></li>

      </ul>

    </main>

  )
}
export default GifteePage