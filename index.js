document.getElementById('form').addEventListener('submit',function(){
    event.preventDefault();
    const subreddit= document.getElementById('input').value;
    const posts =document.getElementById('posts').value;
    if (subreddit==='')
        missingField('Required field missing!','alert-danger');
    else
    fetch(
        `https://www.reddit.com/search.json?q=${document.getElementById('input').value}
        &limit=${document.getElementById('posts').value}`)
        .then(res=>res.json())
        .then(data=>data.data.children.map(data=> data.data))
        .then(results=>{
            let output ="<div class='card-columns'>";
            results.forEach(element => {
                let img;
                if(element.preview)
                    img=element.preview.images[0].source.url;
                else
                    img='images/redditalien.jpg';

                output+=`<div class="card" >
                <img class="card-img-top" src="${img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text" style="font-family: 'Montserrat', sans-serif;">${truncate(element.selftext,100)}</p>
                  <a href="${element.url}" target="_blank" id="visit" class="btn btn-primary" >Visit</a>
                </div>
              </div>`;
            });

            output+='</div>';
            document.getElementById('post').innerHTML=output;
        });
})

function missingField(displayAlert,alertStyle)
{
    const div=document.createElement('div');
    div.className=`alert ${alertStyle}`;
    div.appendChild(document.createTextNode(displayAlert));
    document.getElementById('search-container').insertBefore(div,document.getElementById('search'));
    setTimeout(function(){
      document.querySelector('.alert').remove();  
    },1500);
}

function truncate(str,limit)
{
    const limitIndex=str.indexOf(' ',limit);
    if(str==-1) 
        return str;
    return str.substring(0,limitIndex);
}
