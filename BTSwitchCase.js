function cal() {
    let result;
    let month = Number(document.getElementById("month").value);
    switch (month) {
        case 4:
            result = ("Tháng" + month + " có 30 ngảy");
            break;
        case 6:
            result = ("Tháng" + month + " có 30 ngảy");
            break;
        case 9:
            result = ("Tháng" + month + " có 30 ngảy");
            break;
        case 11:
            result = ("Tháng" + month + " có 30 ngảy");
            break;
        case 1:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 3:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 5:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 7:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 8:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 10:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 12:
            result = ("Tháng" + month + " có 31 ngảy");
            break;
        case 2:
            result = ("Tháng" + month + " có 28 hoặc 29 ngảy");
            break;
        default:
            result = ("Enter again");
    }
    document.getElementById('result').innerHTML = result;
}