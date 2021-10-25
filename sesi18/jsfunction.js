const kursi = {
    warna: "putih salju",
    bahan: "kain",
    merk: "fsd",
    jumlahkaki: 40,
    kategori: "geming",
    harga: 5500000,
    bebanmaksimal: 500
}

function getValue(object, key) {
    return object[key];
    //console.log(object[key]);
}

const getValue1 = function (obj, key) {

}

const getValueArrowFunc = () => {//kalo ini bs bwt return lgsg

}
//yang pertama console log atas nampil, yg bwh karna gk ada return jdi undef
console.log(getValue(kursi, 'harga'));

