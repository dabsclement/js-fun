const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

const addPostButton = document.getElementById('add-post');
const removePostButton = document.getElementById('remove-post');
const articleSection = document.querySelector('section');
// click event listener

blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
  header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background','green-background',);
  header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
  header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background','brown-background', 'green-background', 'text-white');

});
 addPostButton.addEventListener('click', () =>{
     const articleCount = articleSection.childElementCount;
     if (articleCount > 1 ) {
        articleSection.removeChild(articleSection.children[articleCount - 1]);
     }
     
 })

 removePostButton.addEventListener('click', () =>{
    const newPost = creatNewPost();
    articleSection.appendChild(newPost);
})

//page function

function creatNewPost() {
    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');

    newHeading.textContent = 'Another blog post';
    newParagraph.textContent = 'gsdyutauyreuyraUIYEUAYUER';

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);

    newArticle.classList.add('list-group-item');

    return newArticle;
}