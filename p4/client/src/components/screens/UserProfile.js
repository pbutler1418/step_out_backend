import React, { Component } from "react"
import AddExperience from "../AddExperience"
import axios from "axios"
import { Link } from "react-router-dom"

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAdd: false,
      isEdit: false,
      userData: {
        name: "",
        email: "",
        avatar: '',
        password: ''
      },
      experiences: [],
      formData: {
        name: "",
        location: "",
        description: ""
      }
    }
  }
  updateUser = async () => {
    const updateUser = await axios.put(`http://localhost:3000/users/${this.props.currentUser.id}`, {user: this.state.userData});
    console.log(updateUser)
    this.setState(prevState => ({
      userData: {
        name: '',
        email: '',
        avatar: '',
        password: ''
      },
      // userData: [...prevState.userData, updatedUser],
    }))
  }

  async componentDidMount() {
    try {
      if (this.props.currentUser) {
        const response1 = await axios.get(`http://localhost:3000/users/${this.props.currentUser.id}`)
        console.log(response1.data)
        const response2 = await axios.get(`http://localhost:3000/users/${this.props.currentUser.id}/experiences`)
        console.log(response2.data)
        this.setState({
          user: response1.data.name,
          email: response1.data.email,
          experiences: response2.data
        })
      }}
    catch (error) {
      alert("ERROR")
    }
  }


  addExperience = async () => {
    const postExperience = async () => {
      const resp = await axios.post(`http://localhost:3000/users/${this.props.currentUser.id}/experiences`, { experience: this.state.formData })
      console.log(resp)
      return resp.data
    }
    const newExperience = await postExperience(this.state.formData)
    this.setState(prevState => ({
      formData: {
        name: '',
        location: '',
        description: ''
      },
      experiences: [...prevState.experiences, newExperience],
    }))
  }
  handleExperienceChange = (e) => {
    // const { name, value} = e.target;
    // this.setState({ formData: { [name]: value }, formData: {[location]: value}, formData: {[description]: value} });
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleUserChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }));
  }

  getUser = async (id) => {
    const user = await axios(`/users/${id}`);
    this.setState({ user });
  }

  setUserForm = (user) => {
    this.setState({
      name: user.name,
      email: user.email
    })
  }

  deleteExperience = async (id) => {
    console.log(id)
    const destroy = await axios.delete(`http://localhost:3000/users/${this.props.currentUser.id}/experiences/${id}`)

    this.setState(prevState => ({
      experiences: prevState.experiences.filter(experience => 
        experience.id !== id 
      )
    }))
  }

  render() {
    let userExperiences = this.state.experiences && this.state.experiences.map((experience, index) => {
      return (
        <div key={index}>
          <h2>{experience.name}</h2>
          <h2>{experience.location}</h2>
          <p>{experience.description}</p>
          <button onClick = { () => this.deleteExperience(experience.id)}>Delete</button>

        </div>
      )
    })
    // console.log(this.state.user)
    // console.log(this.state.experiences)
    // console.log(this.state.formData)
    // console.log(this.state.userData)
    console.log(this.state)
    return (
      <>
        <h1>{this.state.user}</h1>
        <img src="https://vignette.wikia.nocookie.net/p__/images/e/e9/P435859342-3.jpg/revision/latest/scale-to-width-down/340?cb=20140529235856&path-prefix=protagonist">{this.state.avatar}</img>
        <h2>{this.state.email}</h2>
        {this.state.isEdit === true
          ?
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.updateUser();
              this.setState({
                isEdit: true
              });
            }}>
              <input
                name="name"
                placeholder="name"
                type="text"
                value={this.state.userData.name}
                onChange={this.handleUserChange} />
              <input
                name="email"
                placeholder="email"
                type="text"
                value={this.state.userData.email}
                onChange={this.handleUserChange} />
                            <input
                name="avatar"
                placeholder="avatar"
                type="text"
                value={this.state.userData.avatar}
                onChange={this.handleUserChange} />
                            <input
                name="password"
                placeholder="password"
                type="password"
                value={this.state.userData.password}
                onChange={this.handleUserChange} />
              <button>Submit</button>
            </form>
          </div>
          :
          <div>
            {/* <Link to={`/users/${this.props.currentUser.id}`} onClick={() => { this.props.getUser(this.state.user.name) }}>{this.state.user.name}</Link> */}
            <button onClick={() => {
              this.setState({ isEdit: true })
            }}>Edit</button>
          </div>
        }
        {this.state.isAdd
          ?
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.addExperience();
              this.setState({ isAdd: false })
            }}>
              {/* <input
                name="name"
                type="text"
                value={this.props.formData.name}
                onChange={this.props.handleChange} /> */}
              <input
                name="name"
                placeholder="name"
                type="text"
                value={this.state.formData.name}
                onChange={this.handleExperienceChange} />
              <input
                name="location"
                placeholder="location"
                type="text"
                value={this.state.formData.location}
                onChange={this.handleExperienceChange} />
              <input
                name="description"
                placeholder="description"
                type="text"
                value={this.state.formData.description}
                onChange={this.handleExperienceChange} />
              <button>submit</button>
            </form>
          </div>
          :
          <button onClick={() => {
            this.setState({ isAdd: true })
          }}>Add Experience</button>
        }
        {/* <AddExperience
          addExperience = {this.addExperience}
          formData = {this.state.formData}
          handleChange={this.handleChange}
          handleExperienceChange={this.handleExperienceChange}
        /> */}
        {userExperiences}
      </>
    )
  }
}
export default UserProfile