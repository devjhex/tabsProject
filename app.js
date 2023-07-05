/* Select the whole article, the buttons and the content articles */
const article = document.querySelector(".wholeArticle");
const buttons = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");

article.addEventListener('click',function(e){
    let id = e.target.dataset.id;
    if(id){
        buttons.forEach(function(btn){
            btn.classList.remove('active');
        });
        e.target.classList.add("active");
        /* Get the element */
    let element = document.getElementById(id);
    content.forEach(function(item){
        item.classList.add('hidden');
    });
    element.classList.add('active');
    element.classList.remove('hidden');
    }
})