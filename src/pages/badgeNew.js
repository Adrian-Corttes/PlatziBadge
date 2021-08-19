import React from 'react'
import header from '../img/badge-header.svg'
import Navbar from '../components/navbar'
import Badge from '../components/badge';
import Avatar from '../img/img-programador.png'
import BabgeForm from '../components/BabgeForm'
import '../pages/css/badgeNew.css'

class BadgeNew extends React.Component{
   state = {form: {
      firsName: '',
      lastName: '',
      email: '',
      jopTitle: '',
      twitter: '',
   }};

   handleChange = e =>{
      this.setState({
         form: {
            ...this.state.form,
            [e.target.name] : e.target.value,
         },
      });
   }

  render(){
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
                     firsName={this.state.form.firstName}
                     lastName={this.state.form.lastName}
                     jopTitle={this.state.form.jopTitle}
                     Twitter={this.state.form.twitter}
                     email={this.state.form.email}
                     avatar={Avatar}
                  />
               </div>

               <div className="col-6">
                  <BabgeForm 
                     onChange={this.handleChange}
                     formValues={this.state.form}
                  />
               </div>
               
            </div>
         </div>
      </div>
   )
  }
}

export default BadgeNew
