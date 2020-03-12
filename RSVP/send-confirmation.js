function sendConfirmation(name, email, token, text) 
{
    Email.send({
        SecureToken : token,
	To : email,
	Bcc : ['dumont2@gmail.com','katie.nichols@gmail.com'],
        From : "dumont2@gmail.com",
        Subject : "You have successfully solved the Telegram Puzzle",
        Body : "<html>Here is your confirmation: <br>&nbsp;<br>" + text + "</html>"
	}).then( function( message ) {
		    if( message !== "OK" ) { 
			alert(message);
		    }
		});
}
