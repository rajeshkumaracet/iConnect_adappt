import React, { Component } from "react";
import DisplayData from "./showEmployees";

import Footer from "./footer";
import Nav from "./Nav";
import axios from "axios";
import "../css/Card.css";
import "../css/Loader.css";


class FetchEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loader: true,
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNewEmp = this.addNewEmp.bind(this)
  }



  async componentDidMount() {
    try {
      const res = await axios.get("e.json");
      let data = res.data;
      this.setState({
        employees: data
      });
      setTimeout(() => {
        this.setState({
          loader: false,
          search: ""
        });
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  }
  handleChange(e) {
    this.setState({
      searchString: e.target.value
    });
  }
  addNewEmp(stval) {
    this.setState({
      employees: [...this.state.employees, stval]
    })

  }

  render() {
    let libraries = this.state.employees;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      libraries = libraries.filter(function (user) {
        return user.name.toLowerCase().match(search);
      });
    }

    const loading = this.state.loader ? (
      <div>
        <p className='middle'>😄 Hold on!, Fecthing Profiles....</p>
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube' />
          <div className='sk-cube2 sk-cube' />
          <div className='sk-cube4 sk-cube' />
          <div className='sk-cube3 sk-cube' />
        </div>
      </div>
    ) : (
        <div>
          <div className='container h-100 mt-3 mb-3'>
            <div className='d-flex justify-content-center h-100'>
              <div className='searchbar'>
                <input
                  className='search_input'
                  type='text'
                  value={this.state.searchString}
                  onChange={this.handleChange}
                  placeholder='Find your employee by name...'
                />
                <span href='#' className='search_icon'>
                  <i className='fas fa-search' />
                </span>
              </div>
            </div>
          </div>
          <DisplayData emp={libraries} />
          <Footer />
        </div>
      );

    return (
      <div>
        <Nav empLen={this.state.employees} add={this.addNewEmp} />
        {loading}
      </div>
    );
  }
}

export default FetchEmployees;
