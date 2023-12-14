const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];


let result = cities.map((x, )=> !x.isVisited ? x.name : x.name + "(Visitado)"  )

console.log(result);