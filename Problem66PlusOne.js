/*
Boş olmayan,negatif değer bulunmayan bir dizide sağdan başlayarak haneleri arttırmamız isteniyor.
En sağdaki 10 a ulaştığı zaman yeniden 0 olacak ve bir solundaki hane artacak.
*/
var PlusOne = function(haneler) {
    for (let i = haneler.length - 1; i >=0; i--) {
      if (haneler[i] < 9){
          haneler[i] = haneler[i] + 1;
          return haneler;
      }  else {
          haneler[i] = 0;
      }
    }

    haneler.unshift(1);
    return haneler
}

/*
PlusOne fonksiyonu şeklinde bir fonksiyon tanımlıyoruz
Daha sonra for döngüsü içerisinde if else bloklarıyla 
hanelerin 9 dan küçük olma durumunu eğer 9 ise 0 a döndürme 
durumunu kontrol ediyoruz. İşlemimiz bu kadar. Geriye sadece çıktı olarak kontrol etmek kalıyor.
*/

console.log(PlusOne([1,2,3]))
console.log(PlusOne([1,2,9]))