function greet(name,age,birthday) {

    var name = prompt ("What is your name?") 
        alert ("Hello," + name);

    var age = prompt ("How old are you?")
    console.log(parseInt(age)); 

    var dob = confirm ("Did you celebrate your birthday already this year? yes/no")

    if (dob = true) {
        alert ("result is" + (new Date().getFullYear() - age))
    } else {
        alert ("result is" + (new Date().getFullYear() - age - 1))
    }
}


   
    




