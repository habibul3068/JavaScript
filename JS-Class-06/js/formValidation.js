function validateLogin(){
    let uN = document.forms['loginForm']['username'].value;
    let pW = document.forms['loginForm']['password'].value;

    if(uN === 'habibul3068' && pW === 'ammujane')
        return true;
    else{
        document.querySelector('#errormsg').innerHTML = 'Invalid Username or Password.';
        return false;
    }
}