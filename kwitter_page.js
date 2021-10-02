const firebaseConfig = {
    apiKey: "AIzaSyAHXfsxzn5rN2OcJjiHHjQ3MzPlRjH4ppY",
    authDomain: "kwitter-6468d.firebaseapp.com",
    databaseURL: "https://kwitter-6468d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6468d",
    storageBucket: "kwitter-6468d.appspot.com",
    messagingSenderId: "798319622690",
    appId: "1:798319622690:web:2865185db8134c03d5287b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value="";
  }

  function logout()
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }