let lista = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

let w1 = "Mesirve";
let w2 = "Ronalguiño";

function swap(array, word1, word2) {
        
    if (array.includes(word1) == true & array.includes(word2) == true){
        let erase1 = array.indexOf(word1);
        let eresa2 =array.indexOf(word2);
        array.splice(erase1,1,word2);
        array.splice(eresa2,1,word1);
    }
    return array;
}

swap(lista,w1,w2)
console.log(lista)

