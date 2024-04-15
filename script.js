const main = document.getElementById("main");
const button = document.querySelector("button");

function render() {
  main.innerHTML = "";
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const quote = document.createElement("p");
      quote.className = "quote";
      quote.textContent = data.quote;
      const author = document.createElement("p");
      author.className = "author";
      author.textContent = data.author;
      main.append(quote, author);
    });
}

button.addEventListener("click", () => {
  render();
});

render();
