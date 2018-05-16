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
            console.log({
                email:email,
                message:message,
                success:true
            })
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


