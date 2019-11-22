Required: 
Make a dynamic form input where all the inputs rendered based on a JSON config(Example below in page 2). The JSON config should be fetched with AJAX from API endpoint (Make a static endpoint to get data in JSON format). You can add more filds to JSON based on the example structure. All inputs should be validated based on config before submitting to the server. If validation is not passed show errors message below the input. Supported input type are: number, select, text, textarea. For input type select you should use the options provided in config. All inputs should be saved local state. After form is completed and validated all the date should sent with a post request to an API endpoint (Make a static post endpoint). You dont have to handle or validate data in backend, just accept request and return status code 200; When the post request is not finished the form has a loading state (button is not clickable and inputs can not be changed during request).After post request is finished user should be able to show a success message or error message based on server response.

Firstly to create a Json Config : npm install -g json-server and to run it: json-server --watch db.json
it creates a db.json file that can be modified according to the inputs user want to show.

The two static API endpoints are: 
  get: http://locahost:3000/data (getting data "form inputs" from the json file db.json )
  post: http://localhost:3000/posts (posting data "form values" to the json file db.json)
  
Success is accepted on both status 200 and 201, and an success notification is shown for data posted.
Every failure shows another failure notification. It is an action dispatched from shared-api(successHandler, failureHandler functions). Notification stays put for 2 seconds.

Secondly, all the components created are small and reusable, as those of the inputTypes, error mesasge and notification. They all take props from higher order components and no static data. 

Main view is SubmitForm where (api, actionTypes, action, reducer, selector(reselect library), view) folders are created.

Redux-thunk logic is used to manage asynchronous api calls.

Styled componets are used to style a component and React-hooks to manage functional components state.
