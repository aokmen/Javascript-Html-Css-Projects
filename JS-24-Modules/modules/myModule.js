console.log("Hi");

export const CALISMA_SAATI = 40;

export function topla(s1,s2){
    return s1+s2
}



let counter = 5
const arttir = (miktar) => counter += miktar

const azalt = (miktar) => {
    counter -= miktar
    return counter
}

const benimAdim = "Ashley"

export{arttir,azalt,benimAdim}


// Bir sayfada sadece bir tane export default yazilabilir

export default function ugurla(){
    console.log("elveda js, hosgeldin react");
}