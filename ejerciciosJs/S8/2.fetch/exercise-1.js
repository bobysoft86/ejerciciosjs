const getApi = async () => {
    let response = await fetch('https://api.agify.io?name=michael');
    let resJson = await response.json();
    console.log(resJson);
}
getApi();