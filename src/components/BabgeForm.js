import React  from 'react'

class BabgeForm extends React.Component{
   
   handleClick = (e)=>{
      e.preventDefault();
   }

   render(){
      return(
        <div>
            <h1>New Attendant</h1>
            <form>

               <div>
                  <label>First Name</label>
                  <input 
                     className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} 
                     onChange={this.props.onChange}>
                  </input>
               </div>

               <div>
                  <label>Last Name</label>
                  <input 
                     className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} 
                     onChange={this.props.onChange}>
                  </input>
               </div>

               <div>
                  <label>Email</label>
                  <input 
                     className="form-control" type="Email" name="email" value={this.props.formValues.email} 
                     onChange={this.props.onChange}>
                  </input>
               </div>

               <div>
                  <label>Jop Title</label>
                  <input className="form-control" type="text" name="jopTitle" value={this.props.formValues.jopTitle} 
                     onChange={this.props.onChange}>
                  </input>
               </div>

               <div>
                  <label>Twitter</label>
                  <input 
                     className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} 
                     onChange={this.props.onChange}>
                  </input>
               </div>

               <button className="btn btn-primary mt-3" type="button" onClick={this.handleClick}>Save</button>
            </form>
        </div>
      )
   }
}

export default BabgeForm