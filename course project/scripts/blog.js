const requestURL = 'https://petrobohoslavets.github.io/course%20project/scripts/blogs.json'
const request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    const blogs = request.response;
    var fullContainer = document.getElementById('full-blog');

    function setFirst(obj) {
        document.querySelector(".main-blog h2").innerHTML = obj.title
        let author = document.getElementById("main-blog-name"); 
        author.innerHTML = obj.author
        author.parentNode.innerHTML = author.outerHTML + " Posted on " + obj.date;
        document.querySelector(".main-blog .main-blog-image").style.backgroundImage = "url('" + obj.image + "')"
        document.querySelector(".small-text").innerHTML = obj.firstText
        
        obj.text.forEach(element => {
            try {
                if(element.title !== undefined) {
                    let title = document.createElement('h2')
                    title.textContent = element.title
                    fullContainer.appendChild(title)
                }
            } catch(e) {
                console.log("Unable to retrieve title data: " + e)
            }

            try {
                let text = document.createElement("div")
                text.classList.add("small-text")
                text.innerHTML = element.text
                fullContainer.appendChild(text)
            } catch(e) {
                console.log("Unable to retrieve text data: " + e)
            }
            
            try {
                if(element.image !== undefined) {
                    let image = document.createElement('div')
                    image.classList.add("main-blog-image")
                    image.style.backgroundImage = "url('" + element.image + "')"
                    fullContainer.appendChild(image)
                }
            } catch(e) {
                console.log("Unable to retrieve image data: " + e)
            }

        }); 
    } 

    function createBlogCard(obj) {
        try {
            if(obj.title !== undefined && obj.firstText !== undefined) {
                let card = document.createElement('div');
                card.classList.add('card-blog-item')

                if(obj.image !== undefined) {
                    let image = document.createElement('img')
                    image.classList.add("image")
                    image.classList.add("blog-img")
                    image.src = obj.image
                    image.alt = "Blog card image"

                    card.appendChild(image)
                }
                if(obj.author !== undefined) {
                    let author = document.createElement('div')
                    author.classList.add("blog-date")
                    author.innerHTML = obj.author
                    card.appendChild(author)
                }

                let title = document.createElement('div')
                title.classList.add("blog-title")
                title.innerHTML = obj.title
                card.appendChild(title)

                let text = document.createElement('div')
                text.classList.add("blog-text");
                text.innerHTML = obj.firstText
                card.appendChild(text)

                let readMore = document.createElement("a")
                readMore.classList.add("read-more")
                readMore.href = (obj.readMore !== undefined ? obj.readMore : "#")
                readMore.innerHTML = "<div class='main-text read-more-text'>Read More</div> <img src='img/home/arrow_6.svg' alt='arrow' class='aroow'> "
                card.appendChild(readMore)
                return card;

            } else {
                let elem = document.createElement("div")
                elem.style.display = "none";
                return elem;
            }
        } catch(e) {
            console.log("Unable to retrieve image data: " + e)
        }
    }

    function toggleAll() {
        fullContainer.classList.toggle('hide')
        readMoreButton.classList.toggle('hide')
        showLessButton.classList.toggle('hide')
        moreBlogs.classList.toggle('hide')
    }

    let readMoreButton = document.getElementById("read-more")
    let showLessButton = document.getElementById("show-less")
    let moreBlogs = document.getElementById('our-blog')
    let blogContainer = document.querySelector('.blog-container')

    setFirst(blogs[0])
    blogContainer.innerHTML = ""

     for(let i = 1; i < blogs.length; i++) {
         blogContainer.appendChild(createBlogCard(blogs[i]))
     }

    readMoreButton.addEventListener('click', toggleAll)
    showLessButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(toggleAll, 800)
    })

}