// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2lAzZPfavYqkXR13m_EXWpaK86t4-iiQ",
    authDomain: "kwitter-project-52ba2.firebaseapp.com",
    databaseURL: "https://kwitter-project-52ba2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-52ba2",
    storageBucket: "kwitter-project-52ba2.appspot.com",
    messagingSenderId: "784667629342",
    appId: "1:784667629342:web:5ec5457f9ed68a6bcd9b0f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

console.log(user_name);



