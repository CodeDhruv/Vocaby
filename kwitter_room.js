var firebaseConfig = {
  apiKey: "AIzaSyB_45o_LL-AJ6W4ogSovRQSvM0mKSvWMKM",
  authDomain: "kwitter-6ad71.firebaseapp.com",
  databaseURL: "https://kwitter-6ad71-default-rtdb.firebaseio.com",
  projectId: "kwitter-6ad71",
  storageBucket: "kwitter-6ad71.appspot.com",
  messagingSenderId: "946507956727",
  appId: "1:946507956727:web:6954dc560e76f9fbbd6ef2",
  measurementId: "G-VMPN16MMFV"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 
document.getElementById("user_name").innerHTML = "Welcome " + "Sir/Ma'am Make you Vocaby Great and make everyone surprise" + "!";
 
function addRoom()
{
 room_name = document.getElementById("room_name").value;
 
 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });
 
   localStorage.setItem("room_name", room_name);
  
   window.location = "kwitter_page.html";
}
 
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });
 
}
 
getData();
 
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
 
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}
document.addEventListener('contextmenu', event => event.preventDefault());