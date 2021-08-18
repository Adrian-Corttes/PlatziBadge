import React from 'react'
import header from '../img/badge-header.svg'
import Navbar from '../components/navbar'
import Badge from '../components/badge';
import Avatar from '../img/img-programador.png'
import '../pages/css/badgeNew.css'

const BadgeNew = () => {
   return (
      <div>
         <Navbar/>
         <div className="BadgeNew__hero">
            <img src={header}  className="img-fluid" alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col">
                  <Badge 
                     firsName="Adrian"
                     lastName="Cortes"
                     jopTitle="Web Developer Full Stack"
                     Twitter="Adrian_Corttes"
                     avatar={Avatar}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BadgeNew
