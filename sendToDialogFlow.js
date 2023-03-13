const sendToDialogFlow = async (projectId, sessionId, query) => {

    const credentials = {
        client_email: "conciergebot@conciergebot-urms.iam.gserviceaccount.com",
        private_key: "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0jNGX4f8GQLKs\nN+VxB+GkVxuSdygLuH0/VXuFQiQ1I2ad7KJ/QzAcWeaIQS0Z78m0lfeiUFzNWd3B\n8xkUPo1+6+xEGDOj9Yv/vjq3lpnlyVNBeciUJPbx6ByWAyMfs8IyzV2moUDKQguk\nO5DTHiPrPiUnWGhnIEuImrFYl0DSmrGTWJI9+qPeZbw+XsPBlZ8Zaow3rOKH62Su\nT5flhiEy6oYBSlO/cSHja/S6Nt124alhVAH94cTIMF5GKqk77nS650buAq/cfCdi\nK1dWAqkPVLWHVnesdZMr8kH5qptyc0vo+EXsRv+OJIcKv7cmpyhny3QbGmRr6UhY\nxYqedrzLAgMBAAECggEAF16Ct8imBwZ+GecXk4xpmv6LWxHWj8MkCFE62QIOnbIk\nqMbljC4DdCf5Zs7I1P/seQClj3ocs5ew1Fcaz+aozzIfiqYh86mR+AWEpBlMzNPv\ngBy7PDGXT7MIwCyiceAFKtOEuPn2Njew5LkGWHfLk7n0z9A+8y+C7KjZJkEC6un9\nTStTNik7Mzv8EpPKoQbYVxmbQoMD2hnHRke5YbJ4RRLc2Y5vfPmdCLQoHYh7n5nW\nrWTCAgUHD4aR9HBUPwSHc19vs3QGNiLf49G/kryYjSxqQVM0srPEZmkTfgwqKOIr\nOwom2kReB16hEA9oaJkM/Rzi03OVf515yfxRRXIdAQKBgQD6BTzpsdObB2c3pe0a\nit0TdtPGARi3Nn1eV2DNcxF9X5vkLgALXdHa9TDybOdInFx0vsDrEgGkPJuD+5wc\ntV8258RZkMYRh5/PQMSO7kCYt+5McRXXyYSaNOFfdYWT9XppGlywptz7rwTb3Lk/\njf1rpbfljUxxiVqDGXyprMfk8QKBgQC43j68OD2wLe9UHFnsgj69wRyeQJwvlwi9\n/P0gRig1BW5IR/bgTREsTY+RBMhDaFGCpCky4lPm8le5r/hv5S2Wbw47a8V2BwGB\nDXlZ71FgSHE2NnCRi0lx24nJHJR8G/I+O9CPlbbczroDGeQ//GlY8McGNtseU7ND\n2ufN+oONewKBgQCG/+sLGKz0qcOvBZYIXfDPgLsK0C7DRtXc6ftoE/jepJBtXfVC\nLe+RdhFu5SThTSSTGSjcBQYD44HpeyOpULnP0MdxwT1h28SLySIZN0aD79TpS6qK\nsNI73c/PloqBAOyO8eAYtpDeCXvrJ7yTN50d0gaBGZGsQIkx/sIUcCojUQKBgQCy\nbC14U3+WTn8yWrqffYU4du07/3e+prKVS1qyj4O2yKsLsAkhqr/sVl89w7PU+xXQ\nVMg+iBoaR8NLP/8zX6mEC2NdDkLiCxj0iSCaIFQV7VT20cwLbLdR4GU3aRIWRpKi\nZfCA5Co9Knh1DcQxzVePs7Mi2EbbGkVmNByNvD7DiQKBgQC2eXEuQO9krszeqDyz\n9pE2PuKsWV5WQGYP5t+IJ0bxmA21IN8kbQ0fl9sp5bzSI4N+csoTZSg7RajI/oUe\n2X1nAkdthU9dtdZrcrMbYZppgnOj4V4JHOa4Q/nzEimxBAaK3/utVmMrm5dDj98e\nDxKsrFPFZv+8Wf4yr1yG0Ucmbg=="
    }

    const sessionClient = new dialogflow.SessionsClient({
        projectId,
        credentials
    })

    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    )

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: "en-US",
            },
        },
    }

    try {
        const responses = await sessionClient.detectIntent(request)
        return responses[0]
    } catch (err) {
        console.log("Dialogflow error: " + err)
    }
    return false
} 

export default sendToDialogFlow 