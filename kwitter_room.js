var firebaseConfig = {
  apiKey: "AIzaSyDVl2pXa3I0ZH2DEgkfTPVJRGNpU_SiDxw",
  authDomain: "kwitter-project-4b0bb.firebaseapp.com",
  databaseURL: "https://kwitter-project-4b0bb-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-4b0bb",
  storageBucket: "kwitter-project-4b0bb.appspot.com",
  messagingSenderId: "589795113959",
  appId: "1:589795113959:web:58f7fb7a20eee6337e5b42"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!!";

function addRoom() {
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"    
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("room name- "+ Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}