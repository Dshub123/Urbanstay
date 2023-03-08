import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best Seach entries to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" style={{color:"white", backgroundColor:"white"}}/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList