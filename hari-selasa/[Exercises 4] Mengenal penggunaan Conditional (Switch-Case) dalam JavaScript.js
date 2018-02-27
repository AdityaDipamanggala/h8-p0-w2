var hari = 31;
var bulan = 8;
var tahun = 2200;

  switch (true) {
        case ((hari>=1 && hari <=31) && bulan === 1 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Januari " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 2 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Februari " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 3 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Maret " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 4 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " April " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 5 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Mei " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 6 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Juni " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 7 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Juli " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 8 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Agustus " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 9 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " September " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 10 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Oktober " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 11 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " November " + tahun);
            break;
        case ((hari>=1 && hari <=31) && bulan === 12 && (tahun>=1900 && tahun <=2200)):
            console.log(hari+ " Desember " + tahun);
            break;
        case (hari<1 || hari>31):
            console.log("assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)");
            break;
        case (tahun<1900 || tahun>2200):
            console.log("assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)");
            break;
        default:
            console.log("assign nilai variabel bulan disini! (dengan angka antara 1 - 12)");
            break;
    }