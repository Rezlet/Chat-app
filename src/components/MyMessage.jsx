const MyMessage = ({ message}) => {
    if(message.attachments.length > 0) {
        return (
            <img src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            />
        )
    }
    return (
        <div className="message" style={{marginRight: '18px', color: 'white', backgroundColor: '#3B2A50', float: "right"}}>
            {message.text}
        </div>
    )
}

export default MyMessage