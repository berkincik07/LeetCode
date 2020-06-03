/*
Bu problemde girilen 2 adet değerin örneğin 1,6  ve 3,6 gibi.
Eğer aralarındaki değerler çakışıyorsa,sadece daha kapsamlı olanın yazılması yani birleştirilmesi isteniyor.
Örneğin 1,6 ve 3,6 girersek yine 1,6 olarak çıkacak. 1,6 ve 3,7 olsaydı, 1,7 olarak çıkacaktı.
*/

var birlestir = function(degerler) {
    const sıralı_degerler = degerler.sort((a,b) => a[0] - b[0]);
    const son_degerler = [];

    for (let i = 0; i < degerler.length; i++) {
        if (!son_degerler.length || son_degerler[son_degerler.length - 1][1] < sıralı_degerler[i][0]) {
            son_degerler.push(sıralı_degerler[i]);
        } else{
            son_degerler[son_degerler.length - 1][1] = Math.max(son_degerler[son_degerler.length - 1][1],sıralı_degerler[i][1]);
        }
    }
    return son_degerler;
 };
/*
Burada ilk önce geçen seferki gibi yazdırırken kullanmak için değişkenimize fonksiyonu tanımlıyoruz.
Daha sonra iki adet const  tanımlıyoruz  bunları döngüde kullanacağız.
Döngü bittikten sonra boş olarak tanımladığımız son_degerler sabitini
döngü içerisinde sıralı_degerler sayesinde birleştirip return ile döndürüyoruz.
Problemimiz burada sonuçlanıyor ve ekrana bastırıyoruz.
*/
 console.log(birlestir([[1,3],[2,6],[8,10],[15,18]]))
 console.log(birlestir([[1,9],[3,9],[6,9]]))

