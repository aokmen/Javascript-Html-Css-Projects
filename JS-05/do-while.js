// kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

// do {
//      çalıştırılacak kodlar
//   }
//   while(Koşul);

//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak 
//? notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program

let isContinue;
let not;
do{
    let vize=+prompt("Vize notunu girin");
    let final=+prompt("Final notunu girin");
    not=vize*40/100+final*60/100
    console.log("Notunuz: ",not);
    isContinue=prompt("Devam etmek ister misiniz?")
}while(isContinue === "e" || isContinue ==="E")