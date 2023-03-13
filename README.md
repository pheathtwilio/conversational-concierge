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

## Demo script



## Demo setup steps

### Prerequisites 

- A Twilio Account
- A Twilio phone number 
- The Twilio CLI
- A Google Cloud Platform Account

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

-- Navigate to the Google Dialogflow Console 


## Architecture

![Proactive SMS flow](/img/Proactive.png "Proactive SMS flow")

![Twilio Conversations and Google Dialogflow Integration](/img/Dialogflow.png "Twilio Conversations and Google Dialogflow Integration")

## Twilio APIs

<https://www.twilio.com/docs/conversations/api>

## Google Dialogflow APIs

<https://cloud.google.com/dialogflow/es/docs/reference/libraries/nodejs>

# Relevant Links

Inspiration taken from <https://www.twilio.com/docs/conversations/connect-to-dialogflow>
