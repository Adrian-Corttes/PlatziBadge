import React from 'react'
import confLogo from '../img/badge-header.svg'
import '../css/babge.css'

const Badge = ({firsName,lastName,jopTitle,Twitter,avatar}) => {
   return (
      <div className="Badge">
         <div className="Badge__header">
            <img src={confLogo}alt="Logo Conferencia" />
         </div>

         <div className="Badge__section-name">
            <img src={avatar} className="Badge__avatar" alt="avatar"/>
            <h1>{firsName} <br/> {lastName}</h1>
         </div>

         <div className="Badge__section-info">
            <h3>{jopTitle}</h3>
            <div>@{Twitter}</div>
         </div>

         <div className="Badge__footer">
            #platziconf
         </div>
      </div>
   )
}

export default Badge
