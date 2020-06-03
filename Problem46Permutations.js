/*
Bu problemde bize farklı tam sayılardan oluşan liste veriliyor ve
bizden listeden oluşabilecek bütün permütasyonları dönmemiz isteniyor.
*/
let permutasyon = A => A.length == 1 ? [ A ] :
    A.reduce((res, _, i, A, B = [...A]) => {
        B.splice(i, 1);                                                 
        return res.concat(permutasyon(B).map(arr => [].concat(A[i], arr))); // A[i]'yi diğer ekleme işlemini yapıyoruz.
    }, []);
