import React from 'react'
import header from '../img/badge-header.svg'
import Navbar from '../components/navbar'
import Badge from '../components/badge';
import Avatar from '../img/img-programador.png'
import BabgeForm from '../components/BabgeForm'
import '../pages/css/badgeNew.css'

const BadgeNew = () => {
   state = {form: {}};
   return (
      <div>
         <Navbar/>

         <div className="BadgeNew__hero">
            <img src={header}  className="img-fluid" alt=""/>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-6">
                  <Badge 
                     firsName="Adrian"
                     lastName="Cortes"
                     jopTitle="Web Developer Full Stack"
                     Twitter="Adrian_Corttes"
                     avatar={Avatar}
                  />
               </div>

               <div className="col-6">
                  <BabgeForm/>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default BadgeNew
