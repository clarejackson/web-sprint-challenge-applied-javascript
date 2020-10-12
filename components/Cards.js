// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// axios.get("https://lambda-times-api.herokuapp.com/articles")
// .then(response => {
//   console.log(response);
// })
// .catch(error => {
//   console.log('the data was not returned', error);
// })

const cardContainer = document.querySelector('.cards-container');

const cardMaker = (object) => {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = object.headline;
  
  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const img = document.createElement('img');
  img.src = object.authorPhoto;

  const name = document.createElement('span');
  name.textContent = `By ${object.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(name);

  

  return cardDiv;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
      response.data.articles.javascript.forEach(article => {
        cardContainer.appendChild(cardMaker(article));
        cardContainer.addEventListener("click", () => {
          console.log(article.headline);
        })
      })
      response.data.articles.bootstrap.forEach(article => {
        cardContainer.appendChild(cardMaker(article));
        cardContainer.addEventListener("click", () => {
          console.log(article.headline);
        })
      })
      response.data.articles.technology.forEach(article => {
        cardContainer.appendChild(cardMaker(article));
        cardContainer.addEventListener("click", () => {
          console.log(article.headline);
        })
      })
      response.data.articles.jquery.forEach(article => {
        cardContainer.appendChild(cardMaker(article));
        cardContainer.addEventListener("click", () => {
          console.log(article.headline);
        })
      })
      response.data.articles.node.forEach(article => {
        cardContainer.appendChild(cardMaker(article));
        cardContainer.addEventListener("click", () => {
          console.log(article.headline);
        })
      })
})



