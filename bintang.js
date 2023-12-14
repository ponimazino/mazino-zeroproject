function cetakSegitigaTengah (jumlahBaris){
    for (let i = 1; i <= jumlahBaris; i++){
        let spasi = ' '.repeat(jumlahBaris - i);
        let bintang = 'O'.repeat(i);
        console.log(spasi + bintang);
    }

}
cetakSegitigaTengah(4);
function cetakSegitigaTengahLagi (jumlahBaris){
    for (let i = jumlahBaris; i >= 1; i--){
        let spasi = ' '.repeat(jumlahBaris - i);
        let bintang = 'O'.repeat(i);
        console.log(spasi = bintang);
    }

}
cetakSegitigaTengahLagi(4);