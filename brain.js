let bur = document.querySelector(".burger");
let menuList = document.querySelector(".menu")
let navBar = document.querySelector(".navbar")

bur.addEventListener('click',()=>{
    menuList.classList.toggle("v-class-res");
});


function resetForm() {
    // Assuming your form has an ID of "myForm"
    var form = document.getElementById("myForm");

    // Reset the form after a short delay (100 milliseconds)
    setTimeout(function () {
        form.reset();
    }, 100);

    alert("Your details have submitted.")

    // Allow the default form submission to proceed
    return false;
}


let isRotated = false;
bur.addEventListener('click',()=>{
    let line = document.getElementsByClassName("line");
    isRotated =! isRotated
    const rotationDegree = isRotated ? 45 : 0;
    line.style.transform = `rotate(${rotationDegree}deg)`;
})