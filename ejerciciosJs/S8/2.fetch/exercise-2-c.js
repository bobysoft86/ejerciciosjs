const boton = document.querySelector("button");
const info = document.querySelector("input");
const baseUrl = "https://api.nationalize.io?name=";

function creatP(text) {
  const myP = document.createElement("p");
  myP.innerText = text;

  document.body.appendChild(myP);

  const myButton = document.createElement("button");
  document.body.appendChild(myButton);
  myButton.innerText = "x";
  myButton.addEventListener("click", () => destruirP(myP));
  myButton.addEventListener("click", () => destruirP(myButton));
}

const destruirP = (ultimo) => {
  let bloquesdiv = document.querySelectorAll("p");

  ultimo.remove();
  console.log(ultimo);
};

const getApi = async () => {
  let response = await fetch(baseUrl + info.value);
  let resJson = await response.json();
  console.log(resJson);

  for (let i = 0; i < resJson.country.length; i++) {
    creatP(
      `El nombre ${info.value} tiene un ${
        resJson.country[i].probability
      }  por ciento de ser ${resJson.country[i].country_id} y un ${
        resJson.country[i + 1].probability
      }porciento de ser de ${resJson.country[i + 1].country_id}. `
    );
    i++;
  }
};

boton.onclick = getApi;
