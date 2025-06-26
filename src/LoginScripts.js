

function checkPassword(passwordString){
    
    const response = [];


    if(passwordString.length() < 8){
        response.push("Password must be longer 8 characters or longer");
    }
    if(!/[A-Z]/.test(passwordString)){
        response.push("Password must have at least one uppercase letter");
    }
    if(!/[a-z]/.test(passwordString)){
        response.push("Password must have at least one lowercase letter");
    }
    if(!/[0-9]/.test(passwordString)){
        response.push("Password must have at least one number");
    }
    if(response.length() === 0)
    {
        response.push("Password is valid.")
    }
    return response;
}

export {checkPassword};
