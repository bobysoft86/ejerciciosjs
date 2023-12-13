const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

var temp = 0;
var media = 0;

for(let i = 0; i < products.length; i++){
     if ( i == products.length ){
        temp = temp / i;
    }
    temp = temp + products[i].sellCount;
    media = i + 1;
}
console.log(temp/media);