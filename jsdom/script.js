const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');

const firstArticle = articles[0];
const secondParagraph = paragraphs[1];

const whiteTextElements = document.getElementsByClassName('text-white');
 const sidebar =document.getElementById('sidebar');

 // modifying dom 

 const mainHeading = document.getElementById('main-heading');
  mainHeading.textContent = 'Modify the Dom';

  const header = document.getElementById('page-header');
  header.innerHTML = '<h2>Modify the Dom</h2>';

  header.classList.add('text-center');

  sidebar.classList.remove('bg-info');
  sidebar.classList.add('bg-primary');

  header.style.padding = '1em';
  header.classList.remove('bg-dark');
  header.style.backgroundColor = '#854135';
 
  let newArticle = document.createElement('article')
  let newHeading = document.createElement('h3')
  let newParagraph = document.createElement('p')

  newHeading.textContent = 'article 004';
  newParagraph.textContent = 'lorem24e545q4311r43t1ergjfrgrqi';

  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);

  newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');

  newArticle.setAttribute('id', 'art-004');

  const main = document.querySelector('main');
  main.appendChild(newArticle);


  

