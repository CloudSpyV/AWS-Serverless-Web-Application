// JavaScript File

function signInButton() {
  // sign-in to AWS Cognito
  
  var data = { 
	  UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
  var cognitoUser = userPool.getCurrentUser();

	var authenticationData = {
    Username : document.getElementById("inputUsername").value,
    Password : document.getElementById("inputPassword").value,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  var poolData = {
    UserPoolId : _config.cognito.userPoolId, // Your user pool id here
    ClientId : _config.cognito.clientId, // Your client id here
  };

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username : document.getElementById("inputUsername").value,
    Pool : userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var accessToken = result.getAccessToken().getJwtToken();
      console.log(result);	
      
      //get user info, to show that you are logged in
			cognitoUser.getUserAttributes(function(err, result) {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
				document.getElementById("logged-in").innerHTML = "You are logged in as: " + result[2].getValue();
				
				// now auto redirect to profile page
				window.location.replace("./profile.html");
			});
      
    },
    onFailure: function(err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}