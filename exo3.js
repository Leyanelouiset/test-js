function sendMessage(myMessage, contactName, myName){

    
	console.log ("From : " + contactName + " to : " + myName + " Message : "+ myMessage)
}

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
// sendMessage("Super on se voit mardi !", "Linda", "Marc")

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"

sendMessage(myMessage, myName, contactName )

contactName = "Marc"
myMessage = "Je te rends visite la semaine prochaine"
myName = "Linda"

sendMessage(myMessage, myName, contactName )