import React, { Component } from "react"
// import { showExperiences } from '../services/api-help'
import axios from "axios"

class Experiences extends Component {
  constructor() {
    super()

    this.state = {
      experiences: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`http://localhost:3000/experiences/`)
      console.log(response.data)
      this.setState({
        experiences: response.data
      })
    }
    catch (error) {
      alert("ERROR")
    }
  }

  render() {
    console.log(this.state.experiences)
    let allExperiences = this.state.experiences.map((experience, index) => {
      return (
        <div key={index}>
          <h2>{experience.name}</h2>
          <h2>{experience.location}</h2>
          <p>{experience.description}</p>
          
        </div>
      )
    })
    return (
      <>
      <h1>Experiences</h1>
        {allExperiences}
      </>
      )
    }
    // this.componentDidMount(){
    //   showExperiences()
    // }
  
}

export default Experiences