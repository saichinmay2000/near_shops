(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyCrXaMutwiZ5wkQnZlN46XGnQpx1kVqhqM",
    authDomain: "shopkeeper-4f9d9.firebaseapp.com",
    databaseURL: "https://shopkeeper-4f9d9.firebaseio.com",
    projectId: "shopkeeper-4f9d9",
    storageBucket: "shopkeeper-4f9d9.appspot.com",
    messagingSenderId: "555084841662",
    appId: "1:555084841662:web:a29abe40ba32d98ad914ef",
    measurementId: "G-YDD47BBRYH"
};  
firebase.initializeApp(firebaseConfig);  
firebase.auth().onAuthStateChanged(user => {
  var root =  firebase.database().ref(user.uid).child("Shop Details");
  root.on('value',snap=>{
      snap.forEach(snap=>{
         Name = snap.child("Name").val();
         Shop_name = snap.child("ShopName").val();
         if(Name!="" && Shop_name!=""){
          window.location.href="Main.html";
         }
         else{
          window.location.href="shopreg.html";
         }
       })   
    });

  });

})()