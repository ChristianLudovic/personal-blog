const dailyDigestRedirect = document.querySelector('.digest-section-top button')
const singleArticleTest = document.getElementById('article')

dailyDigestRedirect.addEventListener('click', () => {
    window.location.href = '../Daily digest page/dailyDigest.html'
})


// recuperer les articles du local storage
function getArticles(){
    return JSON.parse(localStorage.getItem('articles'))
}

// mettre les articles dans un tableau
const articles = getArticles()


//fonction pour afficher la previsualisation d'un article a la home page
function previewArticle(article){

    const previewContainer = document.getElementById('daily-digest-articles')

    const articleContainer = document.createElement('div')
    articleContainer.classList.add('article')
    articleContainer.id = article.id
    

    const articleLeft = document.createElement('div')
    articleLeft.classList.add('article-left')

    articleContainer.appendChild(articleLeft)

    const publicationDate = document.createElement('span')
    publicationDate.textContent = article.date

    articleLeft.appendChild(publicationDate)

    articleLeftBottom = document.createElement('div')
    articleLeftBottom.classList.add('article-left-bottom')

    articleLeft.appendChild(articleLeftBottom)

    const articleTitle = document.createElement('h3')
    articleTitle.textContent = article.title

    articleLeftBottom.appendChild(articleTitle)


    const articleSubtitle = document.createElement('p')
    articleSubtitle.textContent = article.description
    articleLeftBottom.appendChild(articleSubtitle)

    const articleRight = document.createElement('div')
    articleRight.classList.add('article-right')

    articleContainer.appendChild(articleRight)

    const articleImage = document.createElement('img')
    articleImage.src = article.image

    articleRight.appendChild(articleImage)

    previewContainer.prepend(articleContainer)
    
}

// parcourir le tableau d'articles et pour chaque article, appeler la fonction previewArticle
articles.forEach(previewArticle)




const articleElements = document.querySelectorAll('.article');

//au click sur un article, sauvegarder l'id de celui ci dans le local storrage et rediriger vers la page de lecture de l'article
articleElements.forEach(article => {
    article.addEventListener('click', () => {
        const articleId = article.id;
        localStorage.setItem('selectedArticleId', articleId);
        window.location.href = './single article page/singleArticle.html';
    });
});








