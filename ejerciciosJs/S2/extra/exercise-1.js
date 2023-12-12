const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const result = [];

for(let cat of movies){
    for(let i = 0; i < cat.categories.length; i++){
        if (result.includes(cat.categories[i]) == false){
            result.push(cat.categories[i]);
        }
    }
console.log(cat.categories[1])

}
console.log(result);