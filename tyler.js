let userName = "Tyler";  // String
let clickCount = 0;      // Number
let isDark = false;      // Boolean

function toggleLight() {
    // 1. Flip the boolean (if it's false, make it true)
    isDark = !isDark;
    
    // 2. Add to our number variable
    clickCount = clickCount + 1;

    // 3. Change the page colors based on the boolean
    if (isDark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("status").innerText = userName + " turned the lights OFF";
    } else {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "black";
        document.getElementById("status").innerText = userName + " turned the lights ON";
    }

    console.log("Clicks:", clickCount);
}