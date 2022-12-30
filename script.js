function submitForm(){
    let fName=document.getElementById('First Name').value;
    let lName=document.getElementById('Last Name').value;
    let email=document.getElementById('Email Address').value;
    console.log(fName, lName, email);

    if(fName && lName && email){
        alert("Submitted Successfully");
    }
    else{
        alert("please fill the required fields");
    }

}