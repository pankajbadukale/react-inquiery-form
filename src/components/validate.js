export function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) === false) return false;
    return true;
}

export function IsMobileNumber(value) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    if (mob.test(value) === false) return false;
    return true;
}

export function alphabetsOnly(value) {
    if (value === "") return false;
    if (!/^[a-zA-Z]*$/g.test(value)) return false;
    return true;
}

export function fiftyChars(value) {
    if(value.trim() === "") return false;
    if(value.length < 50) return false;
    return true; 
}

export function isRequired(value) {
    return !(value.trim() === "")
}