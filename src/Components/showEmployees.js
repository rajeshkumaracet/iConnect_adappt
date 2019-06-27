import React, { Component } from "react";
import "../css/Card.css";

class showEmployees extends Component {

     render() {
          let data;
          if (this.props.emp.length > 0) {
               data = this.props.emp.map((cur, i) =>
                    (<div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 col-sm-6" key={i}>
                         <div className="image-flip" >
                              <div className="mainflip">
                                   <div className="frontside">
                                        <div className="card">
                                             <div className="card-body text-center">
                                                  <p><img className="img-fluid" src={cur.imgSrc === undefined ? "https://randomuser.me/api/portraits/lego/4.jpg" : cur.imgSrc} alt="userpic" /></p>
                                                  <h4 className="card-title">{cur.name}</h4>
                                                  <h3>{cur.jobTitle === undefined ? "Looking for job" : cur.jobTitle}</h3>
                                                  <p className="card-text">{cur.description}</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="backside">
                                        <div className="card">
                                             <div className="card-body text-left">
                                                  <h2 className="card-title text-center">Profile</h2>
                                                  <h4 className="card-text ">Name: {cur.name}</h4>
                                                  <p className="card-text">Company: {cur.company}</p>
                                                  <p className="card-text">Gender: {cur.gender}</p>
                                                  <p className="card-text">Email: {cur.email}</p>
                                                  <p className="card-text">Ph.NO: {cur.phone}</p>
                                                  <ul className="list-inline">
                                                       <button className="btn btn-info btn-md btn-block">Hire Me</button>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>)
               )

          }

          return (


               <div className="row mr-4 ml-4 mag ">
                    {data}

               </div>


          )

     }

}


export default showEmployees;
