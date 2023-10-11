function checkKey() {
    const key = document.getElementById("keyInput").value;

    // You can implement the key checking logic here and update the result message
    // For simplicity, you can use a basic check
    if (key.length === 25) {
        document.getElementById("result").innerHTML = "Key is valid";
    } else {
        document.getElementById("result").innerHTML = "Key is invalid";
    }
}
