import React, { Component } from "react"
import axios from "axios"

class UserProfile extends Component{
  constructor() {
    super()

    this.state = {
      user: "",
      email: "",
      experiences: [],
    }
  }
  
  async componentDidMount() {
    try {
      const response1 = await axios.get(`http://localhost:3000/users/1`)
      console.log(response1.data)
      const response2 = await axios.get('http://localhost:3000/users/1/experiences')
      console.log(response2.data)
      this.setState({
        user: response1.data.name,
        email: response1.data.email,
        experiences: response2.data
      })
    }
    catch (error) {
      alert("ERROR")
    }
  }

  render() {
    let userExperiences = this.state.experiences.map((experience, index) => {
      return (
        <div key={index}>
          <h2>{experience.name}</h2>
          <h2>{experience.location}</h2>
          <p>{experience.description}</p>
          
        </div>
      )
    })
    console.log(this.state.user)
    console.log(this.state.experiences)
    return (
      <>
      <h1>{this.state.user}</h1>
        <h2>{this.state.email}</h2>
        {userExperiences}
      </>
    )
  }
}
export default UserProfile