let noOfCharac = 400;
let contents = document.querySelectorAll(".content");
console.log(contents);
contents.forEach(content =>{
    if(content.textContent.length < noOfCharac)
    {
        content.nextElementSibling.style.display = "none";
    }
    else
    {
        let displaytext = content.textContent.slice(0,noOfCharac);
        let moretext = content.textContent.slice(noOfCharac);
        content.innerHTML= `${displaytext} <span class="dots">...
        </span><span class= "hide more">${moretext}</span>`
        

    }
});
function readMore(btn)
{
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent === "Read More" ? btn.textContent
    = "Read Less" : btn.textContent = "Read More"

    

}

//const read_more_btn = document.querySelector('.read-more-btn');
//const text = document.querySelector('.text');

//read_more_btn.addEventListener('click',()=>{
//    text.classList.toggle('show-more');
//    if(read_more_btn.innerText === 'Read More'){
//        read_more_btn.innerText = 'Read Less';
//    }else{
//        read_more_btn.innerText = 'Read More'
//    }
//})

{/* <script>
            function read_more_less()
            {
              var dots = document.getElementsByClassName('dots')
              var moretext = document.getElementsByClassName('more-text')
              var mybtn = document.getElementsByClassName('read-more-btn')
        
              if (dots.style.display === 'none')
              {
                dots.style.display = 'inline';
                moretext.style.display = 'none';
                mybtn.innerHTML = "Read more";
              }
              else
              {
                dots.style.display = 'none';
                moretext.style.display = 'inline';
                mybtn.innerHTML = "Read less";
              }
            }
          </script> */}

