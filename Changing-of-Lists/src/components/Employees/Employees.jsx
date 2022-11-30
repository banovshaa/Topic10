import React, { Component } from 'react'
import './Employees.css'

export default class Employees extends Component {
    state={
        employees:[{"id":1,"name":"Frodo Baggins","department":"Management","role":"CEO"},
        {"id":2,"name":"Samwise Gamgee","department":"Management","role":"CTO"},
        {"id":3,"name":"Gandalf the Gray","department":"Recruitment","role":"Lead-recruiter"},
        {"id":4,"name":"Aragorn","department":"Security","role":"Security officer"},
        {"id":5,"name":"Legolas","department":"Management","role":"Office manager"}],
        name:""
    }
    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
  render(){
    return(
        <>
        <input onChange={this.handleName}></input>
        {this.state.employees.filter(item=>item.name.split("",this.state.name.length).join("").toLocaleLowerCase()==this.state.name.toLocaleLowerCase()).map(item=>{
            return(
                <div className='main'>
                <h1>{item.name}</h1>
                <p>Department:{item.department}</p>
                <p>Role:{item.role}</p>
                <hr />
                </div>
            )
        })}
        </>
    )
  }
}