const imgs = document.querySelectorAll('img');

//IntersectionObserver code

const observer = new IntersectionObserver(

function(entries, observer){

    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(entry);
        }
    })

},
{
    root: null,
    threshold: 0.1
}

);


imgs.forEach(function(img){
    observer.observe(img);
})