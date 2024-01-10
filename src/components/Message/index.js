// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  let message
  if (isLoggedIn) {
    message = 'Welcome User'
  } else {
    message = 'Please Login'
  }
  return <h1 className="heading">{message}</h1>
}

export default Message
