// === STRUK BELANJA === //
const namaToko = "kopdes merah putih";
const minimalDiskon = 50000;
const diskon = 0.10;

let namaPembeli = "adam";
let hargaBeras = 15000;
let jumlahBeras = 5;
let hargaMinyak = 13000;
let jumlahMinyak = 3;
let hargaTelur = 20000;
let jumlahTelur = 2;
let isMember = true;
let isDiskon = false;

// === operasi aritmatika === //
let subTotalBeras = hargaBeras * jumlahBeras;
let subTotalMinyak = hargaMinyak * jumlahMinyak;
let subTotalTelur = hargaTelur * jumlahTelur;
let totalBelanja = subTotalBeras + subTotalMinyak + subTotalTelur;

// === operator 
if (totalBelanja >= minimalDiskon) {
    totalBelanja = totalBelanja - (totalBelanja * diskon);
    isDiskon = true;
}

// === hasil output === //
console.log("namaToko = " +namaToko);
console.log("namaPembeli = " + namaPembeli);
console.log("totalBelanja = " + totalBelanja);

if (isDiskon) {
    console.log("anda mendapatkan diskon 10%");
}