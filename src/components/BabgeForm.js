import React  from 'react'

class BabgeForm extends React.Component{
   state = {};

   handleChange = (e)=>{
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   handleClick = (e)=>{
      e.preventDefault();
      console.log('Click')
      console.log(this.state)
   }

   render(){
      return(
        <div>
            <h1>New Attendant</h1>
            <form>
               <div>
                  <label>First Name</label>
                  <input className="form-control" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label>Last Name</label>
                  <input className="form-control" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label>Email</label>
                  <input className="form-control" type="Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label>Jop Title</label>
                  <input className="form-control" type="text" name="jopTitle" value={this.state.jopTitle} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label>Twitter</label>
                  <input className="form-control" type="text" name="twitter" value={this.state.twitter} onChange={this.handleChange}></input>
               </div>

               <button className="btn btn-primary mt-3" type="button" onClick={this.handleClick}>Save</button>
            </form>
        </div>
      )
   }
}

export default BabgeForm