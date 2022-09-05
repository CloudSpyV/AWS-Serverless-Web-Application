// JavaScript File

function signOut() {
  //
  
  return_message = "";
  
  const data = { 
  	UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
  const cognitoUser = userPool.getCurrentUser();

	if (cognitoUser != null) {
  	cognitoUser.getSession(function(err, session) {
      if (err) {
      	alert(err);
        return;
      }
      console.log('session validity: ' + session.isValid());

			// sign out
			cognitoUser.signOut();
			console.log("Signed-out");
			return_message = "Signed-out";
  	});
	} else {
		console.log("Already signed-out")
		return_message = "Already signed-out";
	}
	
	const div_user_info = document.getElementById('sign-out');
  div_user_info.innerHTML = return_message;
}
