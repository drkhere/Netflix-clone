//sign up page



function signup() {
    var mail;
    mail=document.getElementById('mail').value;
    if (mail.length==0){
        alert("Please enter email");
    }

    else{
        alert("Successfully Logged In....")
    }
    
}

function signup2() {
    var mail;
    mail=document.getElementById('mail2').value
    if (mail.length==0){
        alert("Please enter email");
    }
    else{
        alert("Successfully Logged In....")
    }
    
}


// //for hide content in faq

// cont_class = document.querySelectorAll(".cont-hide")

// let radio_box = document.querySelectorAll(".radio-input");
// let content = document.querySelectorAll(".content");

// content = document.querySelector(".Question")
// // cont_class.addEventListener('click', () => {
// //     radio_box.forEach((radio) => {
// //         if (radio.checked) {
// //             cont_class.style.display = 'none'; // Use 'none' as a string
// //         }
// //     });
// // });


// // .Question li input[type="radio"]:checked+label+.content{
// //     height: 100%;
// //     padding: 30px 20px;
// //     width: 100%;
// // }

// cont_class.addEventListener('click',()=>{
//     radio_box.forEach((radio) => {
//         if(radio.checked){
//             content.classList.toggle(".content")
//         }
//     });
// });


///new idea
let cont = document.getElementsByClassName('content');
let lb = document.querySelectorAll('.radio-input');

function uncheck() {
    // Since getElementsByClassName returns a collection, you need to loop through it or access a specific element
    for (let i = 0; i < cont.length; i++) {
        if (cont[i].style.height == '' || cont[i].style.height == '100%') {
            cont[i].style.height = '0px';
            cont[i].style.padding = '0px';
            lb[i].style.transform = `.Question li input[type="radio"]:checked+label::after{
                transform: rotate(135deg);
            }`;
            i = 0;
            break;
        }
    }
}

function check(num) {
    // Since getElementsByClassName returns a collection, you need to loop through it or access a specific element
    for (let i = 0; i < cont.length; i++) {
        if(i == num){
            continue;
        }

        if (cont[i].style.height == '100%') {
            cont[i].style.height = '0px';
            cont[i].style.padding = '0px';
        }
        else {
            if (cont[num].style.height == '0px' || cont[num].style.height == '') {
                cont[num].style.height = '100%';
                cont[num].style.padding = '30px 20px';
                cont[num].style.backgroundColor = 'rgb(56, 55, 55)';
                cont[num].style.fontSize = '1.1rem';
                cont[num].style.fontColor = 'white';
                // cont[num].style.transitionDuration = '0.4s'
                // margin-bottom: 10px;
                // height: 100%;
                // padding: 30px 20px;
                // width: 100%;
            }
        }
    }
}
