/** Bài 1 */
document.getElementById("btntinh").onclick = function () {
    var number1 = parseInt(document.getElementById("inputsothunhat").value);
    var number2 = parseInt(document.getElementById("inputsothuhai").value);

    var number3 = parseInt(document.getElementById("inputsothuba").value);

    console.log(number1, number2, number3);
    if (number1 <= number2 && number2 <= number3) {
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number1 + " ;" + number2 + " ;" + number3;

    } else if (number1 <= number3 && number3 <= number2) {
        console.log(number1, number3, number2)
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number1 + " ;" + number3 + " ;" + number2;

    } else if (number2 <= number1 && number1 <= number3) {
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number2 + " ;" + number1 + " ;" + number3;

    } else if (number2 <= number3 && number3 <= number1) {
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number2 + " ;" + number3 + " ;" + number1;

    } else if (number3 <= number1 && number1 <= number2) {
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number3 + " ;" + number1 + " ;" + number2;

    } else {
        document.getElementById("txtthongbao1").innerHTML = " Thứ Tự Ba Số là : " + number3 + " ;" + number2 + " ;" + number1;


    }
}
/** Bài 2 */
document.getElementById("btnbaihai").onclick = function NameFamily() {
    var nameEle = document.getElementById("dropdownFml").value;
    switch (nameEle) {
        case "B":
            document.getElementById("txtthongbao").innerHTML = "Chào Bố ạ";
            break;
        case "M":
            document.getElementById("txtthongbao").innerHTML = "Chào Mẹ ạ";
            break;
        case "A":
            document.getElementById("txtthongbao").innerHTML = "Chào Anh ạ";
            break;
        case "E":
            document.getElementById("txtthongbao").innerHTML = "Chào Em nhé";
            break;
        case "V":
            document.getElementById("txtthongbao").innerHTML = "Chào Vợ Yêu ";
            break;

        default:
            document.getElementById("txtthongbao").innerHTML = "Chào Mọi Người ạ";


    }

}
/** Bài 4 */
document.getElementById("btntamgiac").onclick = function Tamgiac() {
    var a = document.getElementById("inputcanha").value;
    var b = document.getElementById("inputcanhb").value;
    var c = document.getElementById("inputcanhc").value;
    console.log(a, b, c);
    if (a * a == b * b + c * c || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
        document.getElementById("txtthongbao2").innerHTML = "Tam Giác Vuông";

    } else if (a == b && b == c && c == a) {
        document.getElementById("txtthongbao2").innerHTML = "Tam Giác Đèo";

    } else if (a == b || b == c || c == a) {
        document.getElementById("txtthongbao2").innerHTML = "Tam Giác Cân";

    } else if (((a * a + b * b == c * c) && (a == b)) || ((a * a + c * c == b * b) && (a == c))
        || ((c * c + b * b == a * a) && (c == b))) {
        document.getElementById("txtthongbao2").innerHTML = "Tam Giác Vuông Cân";

    } else {
        document.getElementById("txtthongbao2").innerHTML = "Đây là tam Giác";

    }


}
/** Bài 3 */
document.getElementById("btnchanle").onclick = function Chanle() {
    var a = document.getElementById("inputsothunhat1").value;
    var b = document.getElementById("inputsothuhai2").value;
    var c = document.getElementById("inputsothuba3").value;
    var count = 0;

    if (a % 2 == 0) {
        console.log(a + ' là số chẵn');
        count++;


    } else {
        console.log(a + ' là số lẻ');
    };
    if (b % 2 == 0) {
        console.log(b + ' là số chẵn');
        count++;


    } else {
        console.log(b + ' là số lẻ');
    };
    if (c % 2 == 0) {
        console.log(c + ' là số chẵn');
        count++;


    } else {
        console.log(c + ' là số lẻ');
    }
    var le = 3 - count;
    document.getElementById("txtthongbao4").innerHTML = count + " Chẳn" + "  " + le + " Lẽ";

}
/** Bài 5 */
document.getElementById("btnhomqua").onclick = function homqua() {
    var ngay = parseInt(document.getElementById("inputngay").value);
    var thang = parseInt(document.getElementById("inputthang").value);
    var nam = parseInt(document.getElementById("inputnam").value);
    var a1 = Number(ngay - 1);
    var b2 = Number(thang);
    var c3 = Number(nam);
    document.getElementById("txtngaythangnam").innerHTML = a1 + "-" + b2 + "-" + c3;


}
document.getElementById("btnngaymai").onclick = function ngayqua() {
    var ngay = parseInt(document.getElementById("inputngay").value);
    var thang = parseInt(document.getElementById("inputthang").value);
    var nam = parseInt(document.getElementById("inputnam").value);
    var a1 = Number(ngay + 1);
    var b2 = Number(thang);
    var c3 = Number(nam);
    document.getElementById("txtngaythangnam").innerHTML = a1 + "-" + b2 + "-" + c3;


}
/** Bài 6 */
document.getElementById("btnthang1").onclick = function Ngaythang() {
    var thangEle = parseInt(document.getElementById("inputthang1").value);
    var namEle = parseInt(document.getElementById("inputnam1").value);

    switch (thangEle) {
        case 1:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 2:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 28 ngày ";
            break;
        case 3:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 4:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 30 ngày ";
            break;
        case 5:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 6:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 30 ngày ";
            break;
        case 7:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 8:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 9:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 30 ngày ";
            break;
        case 10:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        case 11:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + "Năm " + namEle + "Có 30 ngày ";
            break;
        case 12:
            document.getElementById("txtthangnam").innerHTML = "Tháng " + thangEle + " Năm " + namEle + "Có 31 ngày ";
            break;
        default:
            document.getElementById("txtthangnam").innerHTML = "Xin Nhập Lại";


    }

}






