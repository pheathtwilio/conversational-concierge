# Conversational Concierge
A Conversational Concierge aka Automating Customer Experience with the power of Twilio Conversations and Google Dialogflow

## Solution Description
Automate the 80% of common front of house enquiries with an automated bot that can deliver conversational AI irrespective of channel. 

## Business value
Free up time for your front of house staff to focus on the critical service issues by utilizing a conversational bot to take care of 80% of common enquiries. 

- Scalable
- Easy to Implement
- Call Deflection

## Use case and Industry

Conversational Concierge - Retail/Hospitality

## Demo setup steps

### Prerequisites 

- A Twilio Account
- A Twilio phone number 
- The Twilio CLI
- A Google Cloud Platform Account
- An ngrok account

### Step 1: Setup Twilio 

- Buy a phone number in the console
- Configure Twilio Conversations to setup the Default Conversations Service

### Step 2: Setup Code

- Pull this code from github
- Setup in development directory

### Step 3: Store values in .env file

- Create a .env file
- Store TWILIO_ACCOUNT_SID key value pair (as copied from the console)
- Store TWILIO_AUTH_TOKEN key value pair (as taken from the console)

### Step 4: Install Node Module Dependencies

- run npm-install

### Step 5: Setup Google Project

- Navigate to the Google Dialogflow Console at https://dialogflow.cloud.google.com/
- Setup a new agent and call it conciergebot
- copy paste the name of the project which you can take from the url and store it in the .env file assigned to GOOGLE_PROJECT_ID

### Step 6: Setup Authentication Details for the GCP project

- Navigate to the GCP console at https://console.cloud.google.com and ensure you choose the Dialogflow Project as the current viewable project
- On the left hand side choose the hamburger bar and navigate to IAM and admin > Service Accounts
- Select Create Service Account
- Give it a name 
- Select Create and Continue
- Select Done
- Save the downloaded file to the following location: /Users/<username>/.config/gcp/application_default_credentials.json
- Add the following line to your .bashrc or bash_profile 

```
export GOOGLE_APPLICATION_CREDENTIALS=/Users/<username>/.config/gcp/application_default_credentials.json
```

- source the .bashrc or bash_profile file in the terminal

```
echo $GOOGLE_APPLICATION_CREDENTIALS
```

- type the above in a terminal to validate that the path is available when this is called

### Step 7: Configure the Conversations API to autocreate conversations

- Utilize the Twilio CLI and enter the following:

```
twilio api:conversations:v1:configuration:addresses:create \
	--friendly-name "dialogflow" \
	--auto-creation.enabled  \
	--auto-creation.type webhook \
	--auto-creation.webhook-url [your_ngrok_url]/dialogflow \
	--auto-creation.webhook-method POST \
	--auto-creation.webhook-filters onMessageAdded \
	--type sms \
	--address [your_twilio_number]
```

### Step 8: Start the node server

```
npm start
```

### Step 9: Start ngrok

```
ngrok http --region=us --hostname=<username>.ngrok.io 3000
```

### Step 10: Create Intents in the Dialog Flow Project

![Intents](/img/intents.png "Intents")

Create some meaningful intents in the dialogflow project like the example above

### Step 11: Send a welcome SMS

This can be achieved a number of ways, for this particular setup you can run the following code:

```
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json" \
--data-urlencode "Body=Hi Paul, Welcome to Owl Hotels. Please ask me if you have any questions" \
--data-urlencode "From=TWILIO_PHONE_NUMBER" \
--data-urlencode "To=CUSTOMER_PHONE_NUMBER" \
-u $TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN
```

## Demo Script

### Part 1 - The Introduction

 Imagine you are a customer at a hotel, you just checked in and you were busy so you neglected to listen to some of the information told to you at the front desk. So you pickup your phone and you immediately see a text welcoming you to the hotel and asking you if you have any questions.

![Introduction](/img/demo-1.png "Introduction")

With the power of Twilio SMS, Conversations and Google Dialogflow you have an intelligent chatbot that is easy to implement, can scale and can begin a return on investment immediately. So you ask it, where is breakfast?

![Breakfast](/img/demo-2.png "Breakfast")

Then it responds and will tell you when and where breakfast will be.

### Part 2 - The Humour

![Hungry](/img/demo-3.png "Hungry")

It can even have a humorous side built in when you tell it I am hungry.

### Part 3 - The Closer

![Closer](/img/demo-4.png "Closer")

And finally, I decide to end the conversation for now by telling it, I am good. It responds! As the customer, I feel great. I have just had a seamless transaction that was proactive, personal and automated. 

## Architecture

![Proactive SMS flow](/img/Proactive.png "Proactive SMS flow")

![Twilio Conversations and Google Dialogflow Integration](/img/Dialogflow.png "Twilio Conversations and Google Dialogflow Integration")

## Twilio APIs

<https://www.twilio.com/docs/conversations/api>

## Google Dialogflow APIs

<https://cloud.google.com/dialogflow/es/docs/reference/libraries/nodejs>

# Relevant Links

Inspiration taken from <https://www.twilio.com/docs/conversations/connect-to-dialogflow>
