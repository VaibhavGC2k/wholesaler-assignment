export const validateEmail = (email) => {
  if (email !== "") {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
};

export const validateWholesalerId = (wholesalerId) => {
  if (wholesalerId !== "") {
    const re = /^[A-Z]{3}\d{3}$/;
    return re.test(wholesalerId);
  }
};

export const validateLocId = (locId) => {
  if (locId !== "") {
    const re = /^[A-Z]{2}\d{6}$/;
    return re.test(locId);
  }
}

export const validatePassword =(password)=>{
  if(password.length<10){
    return true
  }else{
    return false
  }
}