// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello World!";

// let iceCream = 'chocolate';

// // 条件语句
// if (iceCream === 'chocolate') {
//     alert('巧克力冰淇淋');
// }
// else {
//     alert("呀呀呀");
// }

// // 函数
// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3)

// // 事件
// document.querySelector('html').onclick = function() {
//     alert("别戳我，我怕疼!");
// }

// // 匿名函数 另一种写法
// document.querySelector('html').addEventListener('click', ()=>{
//     alert("别戳我，我怕疼呀!");
// })

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/wlop.jpg') {
        myImage.setAttribute('src', 'images/wlop2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/wlop.jpg');
    }
}

let myButtion = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'MoZilla 酷毙了, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButtion.onclick = function () {
    setUserName();
}