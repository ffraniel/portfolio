// Initialize Firebase
var config = {
    apiKey: "AIzaSyCdvv-ne7tlAdaGJH6OW8e2RzNUSHk16Qg",
    authDomain: "franwdev.firebaseapp.com",
    databaseURL: "https://franwdev.firebaseio.com",
    projectId: "franwdev",
    storageBucket: "franwdev.appspot.com",
    messagingSenderId: "262600794583"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messageRef = firebase.database().ref('messages');

// save messages to database
const saveMessage = (email, message)=>{
    var date = new Date().getTime();
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        email:email,
        message:message,
        date:date
    });
}

// listen for form event
const getInputValue = (id)=>{
    return document.getElementById(id).value;
}

const checkEmailValue = (email)=>{
    var regExpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpEmail.test(email);
}

const submitForm = (e)=>{
    e.preventDefault();
    var email = getInputValue('email');
    var message = getInputValue('message');
    if(checkEmailValue(email)){
        if(message.length > 0){
            // save message
            saveMessage(email, message);
            document.querySelector('.invalid-email').style.display = 'none';
            document.querySelector('.no-message').style.display = 'none';
            document.querySelector('.message-sent').style.display = 'block';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
        }
        else{
            document.querySelector('.message-sent').style.display = 'none';
            document.querySelector('.invalid-email').style.display = 'none';
            document.querySelector('.no-message').style.display = 'block';
        } 
    }
    else if (!checkEmailValue(email)){
        document.querySelector('.message-sent').style.display = 'none';
        document.querySelector('.no-message').style.display = 'none';
        document.querySelector('.invalid-email').style.display = 'block';
    }
}

document.getElementById('contact-form').addEventListener('submit', submitForm);