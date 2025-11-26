let genderType="female";

function printGender() {

    let color='brown'

    if(genderType=="female")
    {
        var age=30;
        let color='pink'
        console.log("Inside if block",color);

    }
    console.log("Inside the function block,age is",age); // var is accessible inside the function block

}

printGender();
