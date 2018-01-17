
(function() {

  var config = {
    apiKey: "AIzaSyBY9nhe9psbm87hzKKkWRneUjsFWOe7ZyI",
    authDomain: "jjmuseum-27e0a.firebaseapp.com",
    databaseURL: "https://jjmuseum-27e0a.firebaseio.com",
    projectId: "jjmuseum-27e0a",
    storageBucket: "jjmuseum-27e0a.appspot.com",
    messagingSenderId: "733650979774"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');


  btnLogin.addEventListener('click',e => {
    //Get email & pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

  });

  btnLogin.addEventListener('click',e => {
    //Get email & pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.creatUserWithEmailAndPassword(email,pass);
    promise
      .catch(e => console.log(e.message));
  });

  firebase.auth().onAuthStateChuanged(firebaseUser ==> {
    if(firebaseUser){
      console.log(firebaseUser);
    }else{
      console.log('not logged in');
    }
  });

}());
