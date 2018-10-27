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
  
  });
  
  $("#submift").on("click", function(event) {
    event.preventDefault();

    // usersRef.child("alanisawesome").set({
    //     date_of_birth: "June 23, 1912",
    //     full_name: "Alan Turing"
    //   });
    //   usersRef.child("gracehop").set({
    //     date_of_birth: "December 9, 1906",
    //     full_name: "Grace Hopper"
    //   });

  });
  