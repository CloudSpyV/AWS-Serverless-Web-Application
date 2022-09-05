// JavaScript File

function getUserAttributes() {
  // get sign-in Cognito
  
  var return_value;
  
  const data = { 
  	UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
  const cognitoUser = userPool.getCurrentUser();

	if (cognitoUser != null) {
  	cognitoUser.getSession(function(err, session) {
      if (err) {
      	console.log(err);
        return_value = err;
      }
      //console.log('session validity: ' + session.isValid());
      
      //get user info, to show that you are logged in
			cognitoUser.getUserAttributes(function(err, result) {
				if (err) {
					console.log(err);
					return_value = err;
				}
				//console.log(result);
				console.log('Here');
				const user_email = result[2].getValue();
				return_value = result;
			});

  	});
	} else {
		// not signed in
		//console.log("Already signed-out")
	}
	
	console.log(return_value);
	return JSON.stringify(return_value);
}
