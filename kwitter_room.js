
var firebaseConfig = {
  apiKey: "AIzaSyDGLD8bnD19D5th85vROsM6iiXFrc1cstM",
  authDomain: "practicekwitterr.firebaseapp.com",
  databaseURL: "https://practicekwitterr-default-rtdb.firebaseio.com",
  projectId: "practicekwitterr",
  storageBucket: "practicekwitterr.appspot.com",
  messagingSenderId: "413108352014",
  appId: "1:413108352014:web:afde16981c14f32d64f85f",
  measurementId: "G-GHJ2F8B1DK"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose: "addingRoomname"
      });

      
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose: "addingRoomname"
      });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
console.log("The room name = " + Room_names);
row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

    }

