// Bài 1
document.querySelector(".tinhLuong").addEventListener("click", function(){
    let soLuong = 100000;

    let soNgayLam = Number(document.getElementById('soNgayLam').value);


    let tongLuong = soLuong * soNgayLam;
    document.querySelector(".bg-danger").innerHTML = ` tháng này tiền lương nhận được ${tongLuong.toLocaleString(
        "vi",{
            style: "currency",
            currency: "VND",
        }
        
    )}`;
});

// Bài 2
document.getElementById("nut").onclick = function (){
    let soThuc1 = document.getElementById("soThuc1").value *1;
    let soThuc2 = document.getElementById("soThuc2").value *1;
    let soThuc3 = document.getElementById("soThuc3").value *1;
    let soThuc4 = document.getElementById("soThuc4").value *1;
    let soThuc5 = document.getElementById("soThuc5").value *1;

    let giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) /5;
    document.querySelector(".giatritrungbinh").innerHTML =`giá trị trung bình của 5 số thực này là ${giaTriTrungBinh}`
}

//Bài 3
document.querySelector(".doiTien").addEventListener("click", function(){
    let soVND = 23500;

    let soUSD = Number(document.getElementById('soUSD').value);


    let tong = soUSD * soVND;
    document.querySelector(".in").innerHTML = ` với số tiền ${soUSD} USD bạn đổi được ${tong.toLocaleString(
        "vi",{
            style: "currency",
            currency: "VND",
        }
        
    )}`;
});

//Bài 4
document.getElementById("cv").onclick = function (){
    let chieuDai = document.getElementById("chieuDai").value *1;
    let chieuRong = document.getElementById("chieuRong").value *1;

    let chuVi = (chieuRong + chieuDai ) /2;
    document.querySelector(".in2").innerHTML =`Chu vi hình chữ nhật có giá trị là ${chuVi}`
}
document.getElementById("dt").onclick = function (){
    let chieuDai = document.getElementById("chieuDai").value *1;
    let chieuRong = document.getElementById("chieuRong").value *1;

    let chuVi = chieuRong * chieuDai ;
    document.querySelector(".in2").innerHTML =`Diện tích hình chữ nhật có giá trị là ${chuVi}`
}

//Bài 5
document.getElementById("tinhTongg").onclick = function (){
    let soNhap = document.getElementById("soCanNhap").value *1;
    let so_hang_dv = soNhap % 10;
    let so_hang_chuc = parseInt(soNhap /10);

    let tongg = so_hang_chuc + so_hang_dv;
    document.querySelector(".in4").innerHTML =`Tổng 2 ký số có giá trị là ${tongg}`
}