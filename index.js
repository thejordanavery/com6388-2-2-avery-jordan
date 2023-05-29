function greet() {
    var username = prompt ("What is your name?") 
        alert (Hello,' + name);

    var age = prompt ("How old are you?")
    console.log(parseInt(age)); 


    var age = prompt ("How old are you?")
    var dob = confirm ("Did you celebrate your birthday already? yes/no")
    if (dob) {
        alert ('result is ' + new Date().getFullYear() - age")
    } else {
        alert ('result is ' + new Date().getFullYear() - age - 1)
    }
}


   
    




