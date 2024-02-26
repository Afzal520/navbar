function validate(){
    let nam,pa,em;
    nam=document.getElementById("user").value;
    pa=document.getElementById("pass").value;
    em=document.getElementById("email").value;
    
if(nam==""){
    alert("user name can't blank")
    return false
}
else if (!isNaN(nam)) {
    alert("atleast one character fill in box")
    return false
    
}
else if(nam.length<8){
    alert("you ca't login page allowed minmum 8 digit")
    return false

}
if(pa==""){
    alert("password Can't blank")
    return false
}
else if(pa.length<8){
    alert("Password Atleat 8 digit")
    return false
}
else if(!isNaN(pa)){
    alert("Inter atleat 1 characater In Box")
    return false
}
if(em==""){
    alert("email can't blank")
    return false
}
else{
    alert("registered successfully")
}

}