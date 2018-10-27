  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAog4qrs1GpEOVoFg3LsMV2QileU6iQANg",
    authDomain: "class20initial.firebaseapp.com",
    databaseURL: "https://class20initial.firebaseio.com",
    projectId: "class20initial",
    storageBucket: "class20initial.appspot.com",
    messagingSenderId: "915709166353"
  };
  firebase.initializeApp(config);
  
  // Create a variable to reference the database
  var database = firebase.database();
  
  database.ref().on("value", function(snapshot) {
    let employeeName = snapshot.val().name;
    let employeeRole = snapshot.val().role;
    let employeeStartData = snapshot.val().startDate;
    let employeeRate = snapshot.val().rate;

    $(`#employee-name`).text(employeeName);
    $(`#employee-role`).text(employeeRate);
    $(`#employee-start-date`).text(employeeStartData);
    $(`#employee-rate`).text(employeeRate);
  });

  $( document ).ready(function() {
    $("#submit-button").on("click", function() {
      event.preventDefault();

      let name;
      let role;
      let startDate;
      let rate;

      name = $('#employee-name').val();
      role = $('#employee-role').val();
      startDate = $('#employee-start-date').val();
      rate = $('#employee-rate').val();

      console.log(name, role, startDate, rate);

      // Code for handling the push
      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });


    });
  });
  