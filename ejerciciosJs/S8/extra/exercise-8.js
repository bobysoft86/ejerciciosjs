const getFilms = async () => {
    let response = await fetch(`https://zen-kilby-6c1380.netlify.com/`);
    let resJson = await response.json();
    return resJson;
  };
  

  const init = async () => {
    let films = await getFilms();
    console.log(films)
  }

  init()