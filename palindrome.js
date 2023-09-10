// Function using for loop
function Palindrome1() {
    var rexg = /[\W_]/g;
    var input1 = document.getElementById("inputText1").value
    input1 = input1.toLowerCase().replace(rexg, '');
    var str = input1.length;

    for (var i = 0; i < str/2; i++) {
        if (input1[i] !== input1[str - 1 - i]) {
            document.getElementById("showResult1").innerHTML = "Not Palindrome";
            return false;
        }    
    }
    document.getElementById("showResult1").innerHTML = "Palindrome";
    return true;
}

// Function using Built-In Functions - replace(), split(), reverse(), join(), toLowerCase())
function Palindrome2() {
    var rexg = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    var input2 = document.getElementById("inputText2").value
    var lowRegStr = input2.toLowerCase().replace(rexg, '');
    var reverseWord = lowRegStr.split("").reverse("").join("");

    if (reverseWord === lowRegStr) {
        document.getElementById("showResult2").innerHTML = "Palindrome";
    } else {
        document.getElementById("showResult2").innerHTML = "Not Palindrome";
    }
}