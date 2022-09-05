.. _step08:

****
HTML
****

.. image:: ./images/AWSServerlessWebApplication-HTML.jpg
  :width: 720 px
  :alt: AWS Serverless Web App
  :align: center

Now that we have a fully functional API, let's write some HTML and JavaScript to show the information on a webpage. We will use the JavaScript "Fetch" method to call our API, get back the JSON file, parse out the information we want and then present that on our webpage inside a <div> element.

Tasks:

- add a ``<div>`` section to hold the data
- add a ``<script>`` section, calling our API
- get back JSON file and place the info in a variable
- present the data in our ``index.html`` file

.. code-block:: html
	:linenos:
	:caption: index.html

	<!DOCTYPE html>
	<html>
	  <head>
	    <title>Web App</title>
	  </head>
	  <body>
	    <div id="user_info">
	      <p>Please wait ...</p>
	    </div>
	    <div>
	      <button onclick="getUser()">Click me</button>
	    </div>
	  </body>
	  
	  <script type="text/javascript">
	    
	    async function getUser() {
	      // get the user info from API
	      
	      const api_url = 'your_API_URL?user_email=jane.smith@gmail.com'
	      const api_response = await fetch(api_url);
	      const api_data = await(api_response).json();
	      
	      const div_user_info = document.getElementById('user_info');
	      div_user_info.innerHTML = api_data['body'];
	    }
	  </script>
	</html>


.. raw:: html

  <div style="text-align: center; margin-bottom: 2em;">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/2lxjWoFeABU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
		</iframe>
  </div>