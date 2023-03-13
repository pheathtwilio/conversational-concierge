require("dotenv").config()
const dialogflow = require("@google-cloud/dialogflow")
const express = require("express")

// setup the express server with middleware
const app=express()
app.use(express.urlencoded({extended: true}))

const projectId = "conciergebot-urms"

// instantiate the twilio client
const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendToDialogFlow = async (projectId, sessionId, query) => {

    const sessionClient = new dialogflow.SessionsClient();
    // The path to identify the agent that owns the created intent.
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );
   
    // The text query request
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: "en-US",
        },
      },
    };
   
    try {
      const responses = await sessionClient.detectIntent(request);
      return responses[0];
    } catch (err) {
        console.log("Dialogflow error: " + err);
    }
    return false;
} 

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

app.post("/dialogflow", async (req, res) => {

    let sessionId = req.body.ConversationSid
    let query = req.body.Body

    let response = await ( await sendToDialogFlow(projectId, sessionId, query)).queryResult.fulfillmentText

    if(!(response)){ res.status(500).send()}

    let result = await sendToTwilio(response, sessionId)
    if(result){ res.status(201).send()}
    res.status(500).send()
    
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT)
})