const sendToTwilio = async (response, conversationSid) => {

    try{
        await client.conversations.v1.conversations(conversationSid)
        .messages 
        .create({author: "system", body: response})
        .then((message) => console.log(message.sid))
        return true
    } catch (err) {
        console.log("Twilio error: " + err)
        return false
    }
}

export default sendToTwilio