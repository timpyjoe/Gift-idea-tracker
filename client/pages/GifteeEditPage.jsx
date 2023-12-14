import { GifteeForm } from "../components"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


export default function GifteeEditPage() {

  const [currentGifteeInfo, setCurrentGifteeInfo] = useState(null)

  const { id } = useParams()
  async function getGifteeInfo() {
    // store the response's value in some variable in the line below
    const  data  = await fetch(`/api/giftee/${id}`)// not sure if this is correct
    .then(function(response){
      return response.json()
    }).then(function(data){

      setCurrentGifteeInfo(data.payload);
      console.log(data)
    })
    

  }

  useEffect(() => {
    getGifteeInfo()
  }, [])

  if ( !currentGifteeInfo ) return <></>
  return(
    <>  
      <GifteeForm currentGifteeInfo={currentGifteeInfo}/>


    </>
  )
}