let array= [];

fetch('https://newsapi.org/v2/top-headlines?q=world&apiKey=3ad99a1b63534bc093a5554cbac891a8')
    .then(Response => Response.json())
    .then(data => {
        let content = document.querySelector("#titles")
        let attr = `<ul class = "headlings" >`

        for(let i = 0; i < data.articles.length; i++){

            attr += `<a href ="` + data.articles[i].url + `"` + "<li>" + data.articles[i].title + "</li>" + "<br>"
        }

        attr += "</ul>"

        content.innerHTML = attr;


        console.log(data.articles)
    });

let language = "en";
let ctg = 'general';



    fetch('https://newsapi.org/v2/everything?q=trending&language='+language+ '&apiKey=3ad99a1b63534bc093a5554cbac891a8')
        .then(Response2 => Response2.json())
        .then(data => {
            let content = document.querySelector("#trending")
            let attr = `<div class = "listing">`

            for(let i = 0; i < data.articles.length; i++){

                attr += ` <div class="card">`+`<div class="img">` + `<img class = "sizing" src ="` + data.articles[i].urlToImage + `"/>` + `</div>` + `<br>` +`<div class="title">` + data.articles[i].title + `</div>` + ` <div class="desc">` +
                            `<span>` + data.articles[i].description + `</span>` +
                            `<a class="read" href="` + data.articles[i].url + `">` + `More` +`</a>` + `<br>`
                            + `<span class="author">` + data.articles[i].author + ` of ` + data.articles[i].source.name + `</span>`+ `<br>` +
                            `<span class="upadte">` + `Published on :` + data.articles[i].publishedAt + `</span>` +
                       `</div>` + `</div>`
        }

        attr += "</div>"

        content.innerHTML = attr;


        console.log(data.articles)
    });



function myFunction() {
    language = document.getElementById("lang").value;
    ctg = document.getElementById("cat").value;
    fetch('https://newsapi.org/v2/top-headlines?language='+language+'&category='+ctg+'&apiKey=3ad99a1b63534bc093a5554cbac891a8')
        .then(Response2 => Response2.json())
        .then(data => {
            let content = document.querySelector("#trending")
            let attr = `<div class = "listing">`

            for(let i = 0; i < data.articles.length; i++){

                attr += ` <div class="card">`+`<div class="img">` + `<img class = "sizing" src ="` + data.articles[i].urlToImage + `"/>` + `</div>` + `<br>` +`<div class="title">` + data.articles[i].title + `</div>` + ` <div class="desc">` +
                            `<span>` + data.articles[i].description + `</span>` +
                            `<a class="read" href="` + data.articles[i].url + `">` + `More` +`</a>` + `<br>`
                            + `<span class="author">` + data.articles[i].author + ` of ` + data.articles[i].source.name + `</span>`+ `<br>` +
                            `<span class="upadte">` + `Published on :` + data.articles[i].publishedAt + `</span>` +
                       `</div>` + `</div>`
        }

        attr += "</div>"

        content.innerHTML = attr;


        console.log(data.articles)
    });
    console.log(language)
  }

