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
  
  database.ref().on("child_added", function(childSnapshot) {
    let employeeName = childSnapshot.val().name;
    let employeeRole = childSnapshot.val().role;
    let employeeStartDate = childSnapshot.val().startDate;
    let employeeRate = childSnapshot.val().rate;

    var ts = moment(employeeStartDate, "M/D/YYYY").valueOf();
    let monthsWorked = Math.floor(moment(moment(new Date())).diff(moment(ts), 'months', true));
    let totalBilled = employeeRate * monthsWorked;

    let newRow = $(`<tr>`);

    let newName = $(`<td>`);
    newName.text(employeeName);

    let newRole = $(`<td>`);
    newRole.text(employeeRole);

    let newStartDate = $(`<td>`);
    newStartDate.text(employeeStartDate);

    let newMonthsWorked = $(`<td>`);
    newMonthsWorked.text(monthsWorked);  

    let newRate = $(`<td>`);
    newRate.text(employeeRate);    
    
    let newTotal = $(`<td>`);
    newTotal.text(totalBilled);

    newRow.append(newName,newRole,newStartDate,newMonthsWorked, newRate, newTotal);
    $(`tbody`).append(newRow);

    // $(`#employee-name`).text(employeeName);
    // $(`#employee-role`).text(employeeRole);
    // $(`#employee-start-date`).text(employeeStartDate);
    // $(`#employee-rate`).text(employeeRate);
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
  