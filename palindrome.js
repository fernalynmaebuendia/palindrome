// Function using for loop
function Palindrome1() {
    var rexg = /[\W_]/g;
    var input1 = document.getElementById("inputText1");
    var inputValue1 = input1.value;
    inputValue1 = inputValue1.toLowerCase().replace(rexg, '');
    var str = inputValue1.length;
    var showResult1 = document.getElementById("showResult1");

    if (inputValue1 === "") {
        showResult1.innerHTML = "Fill up input!";
        showResult1.style.color = "red";
        input1.style.border = "1px solid red";
        setTimeout (function () {
            showResult1.innerHTML = "";
            input1.style.border = "";
        }, 3000);
        return false;
    } 

    for (var i = 0; i < str/2; i++) {
        if (inputValue1[i] !== inputValue1[str - 1 - i]) {
            showResult1.innerHTML = "Not Palindrome";
            showResult1.style.color = "black";
            setTimeout(function () {
                showResult1.innerHTML = "";
            }, 3000);
            return false;
        } 
    }
        
    showResult1.innerHTML = "Palindrome";
    showResult1.style.color = "black";
    setTimeout(function () {
        showResult1.innerHTML = "";
    }, 3000);
    
    return true;
}

// Function using Built-In Functions - replace(), split(), reverse(), join(), toLowerCase())
function Palindrome2() {
    var rexg = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    var input2 = document.getElementById("inputText2");
    var inputValue2 = input2.value;
    var lowRegStr = inputValue2.toLowerCase().replace(rexg, '');
    var reverseWord = lowRegStr.split("").reverse("").join("");
    var showResult2 = document.getElementById("showResult2")

    if (inputValue2 === "") {
        showResult2.innerHTML = "Fill up input!";
        showResult2.style.color = "red";
        input2.style.border = "1px solid red";
        setTimeout (function () {
            showResult2.innerHTML = "";
            input2.style.border = "";
        }, 3000);

    } else if (reverseWord === lowRegStr) {
        showResult2.innerHTML = "Palindrome";
        showResult2.style.color = "black";
        setTimeout (function () {
            showResult2.innerHTML = "";
        }, 3000);

    } else {
        showResult2.innerHTML = "Not Palindrome";
        showResult2.style.color = "black";
        setTimeout (function () {
            showResult2.innerHTML = "";
        }, 3000);
    }    
}