import React from 'react'

const UserProfile = (props) => {
  return (
    <>
    <h1>{props.authFormData.name}</h1>
      <img src="https://vignette.wikia.nocookie.net/p__/images/e/e9/P435859342-3.jpg/revision/latest/scale-to-width-down/340?cb=20140529235856&path-prefix=protagonist"></img>
    </>
  )
}

export default UserProfile