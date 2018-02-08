

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0Q9LTfkLtznU2ya0SHdCxxhxJ5wApjvU",
    authDomain: "traintime-4f46e.firebaseapp.com",
    databaseURL: "https://traintime-4f46e.firebaseio.com",
    projectId: "traintime-4f46e",
    storageBucket: "",
    messagingSenderId: "294822622728"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#add-train").on("click", function (){
    event.preventDefault();

    var name = $("#name-train").val().trim();
    var destination = $("#destination-input").val().trim();
    var trainTime = $("#train-time").val().trim();
    var frequency = $("#Frequency-input").val().trim();

   database.ref().set({
        name: name,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
    });



database.ref().on("value", function(snapshot) {
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().trainTime);
    console.log(snapshot.val().frequency);

    var name = snapshot.val().name;
    var dest = snapshot.val().destination;
    var tTime = snapshot.val().trainTime;
    var freq = parseInt(snapshot.val().frequency);
    var curTime = moment();

 var firstTimeConverted = moment(trainTime, "hh:mm").subtract(1, "years")
var tdifference  = moment().diff(moment(firstTimeConverted), "minutes")
var remainder = moment().diff(moment(firstTimeConverted), "minutes") % freq;
var minutesLeft = freq - remainder;
var arrivalTime =  moment().add(minutesLeft, "m").format("hh:mm A");


$("#arrivalTimes > tbody").append("<tr><td>" + name + "</td><td>" + dest + "</td><td>" + freq  + "</td><td>" + arrivalTime + "</td><td>" + minutesLeft + "</td></tr>")
   
});

});




