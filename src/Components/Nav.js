import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import "bootstrap";
import "jquery";
import "popper.js";
import "../css/App.css";



class Nav extends Component {
     constructor(props) {
          super(props);
          this.state = {
               visible: false,
               name: "",
               jobTitle: "",
               company: "",
               imageUrl: "",
               description: "",
               gender: "",
               email: "",
               city: "",
               phone: ""
          }
          this.formHandler = this.formHandler.bind(this);
          this.submitHandler = this.submitHandler.bind(this)
     }
     formHandler(e) {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     submitHandler(e) {
          e.preventDefault();
          this.props.add(this.state);
          this.closeModal()
          toast.notify(" 😄 Woohoo! Emyployee Added!", {
               duration: 2000,
               position: "top"
          });
          this.setState({
               name: "",
               jobTitle: "",
               company: "",
               imageUrl: "",
               description: "",
               gender: "",
               email: "",
               city: "",
               phone: ""
          })
     }

     openModal() {
          this.setState({
               visible: true
          });
     }

     closeModal() {
          this.setState({
               visible: false
          });
     }

     render() {
          return (
               <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                         <Link to="/" className="navbar-brand">iConnect!</Link>
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav ml-auto">
                                   <li className="nav-item pb-2">
                                        <button onClick={() => this.openModal()} type="button" className="btn btn-success ">Add Employee</button>
                                   </li>
                                   <li className="nav-item pb-2">
                                        <button type="button" className="btn btn-warning">Total No of Employees&nbsp;
                                             <span className="badge badge-light">  {this.props.empLen.length} </span>
                                        </button>
                                   </li>

                              </ul>

                         </div>
                    </nav>


                    <Modal visible={this.state.visible} width="800" height="600" effect="fadeInDown" onClickAway={() => this.closeModal()}>
                         <div>
                              <div className="container">
                                   <form onSubmit={this.submitHandler}>
                                        <h2 className="text-center mb-3">Add New Employee</h2>
                                        <div className="row">
                                             <div className="col-md-6">
                                                  <div className="form-group">
                                                       <label htmlFor="Name">Name<sup>*</sup></label>
                                                       <input type="text" className="form-control" placeholder="-E.g: Raghul" name="name" value={this.state.name} onChange={this.formHandler} required />
                                                  </div>
                                             </div>


                                             <div className="col-md-6">
                                                  <div className="form-group">
                                                       <label htmlFor="Gender">Gender</label>
                                                       <select className="form-control" name="gender" value={this.state.gender} onChange={this.formHandler}>
                                                            <option checked>Select</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>

                                                       </select>
                                                  </div>
                                             </div>

                                        </div>


                                        <div className="row">
                                             <div className="col-md-6">
                                                  <div className="form-group">
                                                       <label htmlFor="company">Company<sup>*</sup></label>
                                                       <input type="text" className="form-control" placeholder="-E.g: Google" id="company" name="company" value={this.state.company} onChange={this.formHandler} />
                                                  </div>


                                             </div>


                                             <div className="col-md-6">

                                                  <div className="form-group">
                                                       <label htmlFor="Job">Job Title</label>
                                                       <input type="text" className="form-control" placeholder="-E.g: UX Designer" name="jobTitle" value={this.state.jobTitle} onChange={this.formHandler} required />
                                                  </div>
                                             </div>

                                        </div>



                                        <div className="row">
                                             <div className="col-md-6">

                                                  <div className="form-group">
                                                       <label htmlFor="email">Email address<sup>*</sup></label>
                                                       <input type="email" className="form-control" id="email" placeholder="-E.g: 123abc@gmail.com" name="email" value={this.state.email} onChange={this.formHandler} required />
                                                  </div>
                                             </div>



                                             <div className="col-md-6">

                                                  <div className="form-group">
                                                       <label htmlFor="ph.no">Ph.No</label>
                                                       <input type="text" className="form-control" placeholder="-E.g: 9826655562" name="phone" value={this.state.phone} onChange={this.formHandler} />
                                                  </div>
                                             </div>




                                        </div>



                                        <div className="row">
                                             <div className="col-md-12">

                                                  <div className="form-group">
                                                       <label htmlFor="email">Description<sup>*</sup></label>
                                                       <textarea className="form-control" rows="3"
                                                            placeholder="-E.g: Have 15 yeas experience in fullStack.Know Angular,,Nodejs e.t.c" name="description" value={this.state.description} onChange={this.formHandler} required></textarea>


                                                  </div>
                                             </div>
                                        </div>


                                        <div className="row">
                                             <div className="col-md-6">

                                                  <div className="form-group">
                                                       <label htmlFor="email">Image Url</label>
                                                       <input type="text" className="form-control" id="imageURL" placeholder="-E.g: https://pbs.twimg.com/profile_images/1008506598531194880/ctHMzN6O.jpg" name="imageUrl" value={this.state.imageUrl} onChange={this.formHandler} />
                                                  </div>
                                             </div>



                                             <div className="col-md-6">

                                                  <div className="form-group">
                                                       <label htmlFor="city">City</label>
                                                       <input type="text" className="form-control" id="city" placeholder="-E.g: Pondicherry" name="city" value={this.state.city} onChange={this.formHandler} />
                                                  </div>
                                             </div>




                                        </div>












                                        <div className="text-center ">
                                             <button type="submit" className="btn btn-primary btn-block mr-5">Submit</button>

                                        </div>

                                   </form>
                              </div>


                         </div>
                    </Modal>
               </div>
         



          )
     }
     }


export default Nav;
