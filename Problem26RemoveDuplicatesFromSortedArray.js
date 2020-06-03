/*
Bu problemde bize verilen sıralı numara dizisindeki tekrar eden değerleri kaldırıp
çıktı olarak her değer bir kez yazılmış olarak toplam kaç değer olduğunu yazdırmamız isteniyor.
*/
var func = function(sayılar) {
    if(sayılar === null || sayılar.length === 0) return 0
    if(sayılar.length == 1) return 1;
    var count = 0;
    for(var i ; i < sayılar.length; i++) {
        if(sayılar[i] != sayılar[i+1]){
            count ++;
            sayılar[count] = sayılar[i+1];
        }
        return count;
    }
}
console.log(func ([1,1,2,3,4,4,4,5]))

/*
Problem bu şekilde çözülüyor.Bir fonksiyon tanımlıyoruz.
Daha sonra sayı girilmemesi ve 1 sayı olması durumlarını
if bloklarıyla kontrol ediyoruz. Daha sonra bir count değişkeni
ile for döngüsünde sayıların aynı olup olmama durumunu kontrol ediyoruz
ve count’u dönüyoruz. Fonksiyonu çalıştırdığımızda 5 farklı değer bulunduğu için 5 çıktısını görüyoruz.

*/