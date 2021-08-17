import React from 'react'
import confLogo from '../img/badge-header.svg'
import Gravatar from '../img/img-programador.png'
import '../css/babge.css'

const Badge = () => {
   return (
      <div className="Badge">
         <div className="Badge__header">
            <img src={confLogo}alt="Logo Conferencia" />
         </div>

         <div className="Badge__section-name">
            <img src={Gravatar} className="Badge__avatar" alt="avatar"/>
            <h1>Adrian <br/> Cortes</h1>
         </div>

         <div className="Badge__section-info">
            <p>Web Developer Full Stack</p>
            <p>@Adrian_Corttes</p>
         </div>

         <div className="Badge__footer">
            #platziconf
         </div>
      </div>
   )
}

export default Badge
