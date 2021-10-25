const kursi = {
    warna: "putih salju",
    bahan: "kain",
    merk: "fsd",
    jumlahkaki: 40,
    kategori: "geming",
    harga: 5500000,
    bebanmaksimal: 500
}

//tiga cara manggil
//console.log(kursi);
//console.log(kursi.warna);
//console.log(kursi['kategori']);

//replace
// kursi['bahan'] = 'titanium';

console.log(kursi);

kursi.bahan = [
    kursi.bahan,
    'titan'
]
//delete
delete kursi.kategori;

console.log(kursi);

