const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10}]

    const result = videogames.filter((x)=> x.genders.includes("RPG") );
    const result2 = result.reduce((acc, dataX)=> dataX.score + acc, 0)/result.length;
    var result3 = Number(result2.toFixed(2));// para dejarlo solo con dos decimales;
    Math.trunc(result2) // esto nos daria pero sin decimales;

    console.log(Math.trunc(result2));
    console.log(result3);