//no script tag needed here



//let maxAge = window.prompt("Enter your expected max age: ", "14")
//let age = window.prompt("Enter your current age: ", "90")
//let numPerDay = window.prompt("How many snacks do you eat per day? ", "2")


if (confirm("Is all the data correct?")){
    console.log("ok");
    let totalRequired = (numPerDay * 365) * (maxAge - age) 
    document.write("You will need " + totalRequired + " snacks to last you until the ripe old age of " + maxAge);
}
else{
    console.log("run code again");
}





