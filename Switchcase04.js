function myclick() {
    var a = parseInt(prompt("Nhập a"));
    var b = parseInt(prompt("Nhập b"));
    var opera = prompt("Nhập toán tử");
    var result;
    switch (opera) {
        case "+":
            result = (a + b);
            //alert("a + b = " + (a+b));
            break;

        case "-":
            result = (a - b);
            //alert("a - b = " + (a - b));
            break;
        case "*":
            result = (a * b);
            //alert("a * b = " + (a * b));
            break;
        case "/":
            result = (a / b);
            //alert("a / b = " + (a / b));
            break;
        default:
            result = "Không có phép tính";
            //alert("Không có phép tính");
            break;
    }
    document.getElementById('result').innerHTML = result;
}