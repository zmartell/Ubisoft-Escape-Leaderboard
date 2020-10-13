import Head from 'next/head'
import styles from '../styles/Home.module.css'
const result = require('./result.json')
const _ = require('lodash')
import React, { useState, useEffect } from 'react';
export default function Home() {
  const [lookingAt, setLookingAt] = useState("pyramid");
  const [result2, setResult] = useState({})
  const pyramid = _.filter(result, function(o){
    return o.Experience == "pyramid" && !o.Players.includes('VR')
  })
  const toppyramid = _.sortBy(pyramid, 'Time')
  const chronos = _.filter(result, function(o){
    return o.Experience == "chronos" && !o.Players.includes('VR')
  })
  const topchronos = _.sortBy(chronos, 'Time')
  const styx = _.filter(result, function(o){
    return o.Experience == "styx" && !o.Players.includes('VR')
  })
  const topstyx = _.sortBy(styx, 'Time')
  useEffect(() => {
    const interval = setInterval(() => {
      if(lookingAt == 'pyramid'){
      setLookingAt("chronos")
      setResult(topchronos)
    } else if(lookingAt == 'chronos'){
      console.log('setting at styx') 
      setResult(topstyx)
        setLookingAt("styx")
      } else {
        setResult(toppyramid)
        setLookingAt("pyramid")
      }}
      , 5000);
    return () => {
      clearInterval(interval);
    };
  }, [lookingAt]);
  return (
    <div className={styles.container}>
      <Head>
        <title>VRWorld Escape Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{"backgroundImage": "url(/" + lookingAt + ".png)", "height": "1080px", "width": "1920px"}}>
      {!_.isEmpty(result2) && result2.map(function(o, i){
       if(i == 0){
        return <div style={{"position":"absolute", "color":"pink", "fontWeight": "bold", "fontSize": "32px", "top": "340px", "left": "625px" }} key={i}>Team: {o.Players} completed in {Math.ceil(o.Time/60)} minutes </div>
      } else if(i == 1){ 
        return <div style={{"position":"absolute", "color":"pink", "fontWeight": "bold", "fontSize": "32px", "top": "420px", "left": "625px" }} key={i}>Team: {o.Players} completed in {Math.ceil(o.Time/60)} minutes </div>

      }  else if(i == 2){ 
        return <div style={{"position":"absolute", "color":"pink", "fontWeight": "bold", "fontSize": "32px", "top": "500px", "left": "625px" }} key={i}>Team: {o.Players} completed in {Math.ceil(o.Time/60)} minutes </div>

      }else if(i == 2){ 
        return <div style={{"position":"absolute", "color":"pink", "fontWeight": "bold", "fontSize": "32px", "top": "580px", "left": "625px" }} key={i}>Team: {o.Players} completed in {Math.ceil(o.Time/60)} minutes </div>

      }else if(i == 2){ 
        return <div style={{"position":"absolute", "color":"pink", "fontWeight": "bold", "fontSize": "32px", "top": "640px", "left": "625px" }} key={i}>Team: {o.Players} completed in {Math.ceil(o.Time/60)} minutes </div>

      }
      })}

      </main>
    </div>
  )
}
