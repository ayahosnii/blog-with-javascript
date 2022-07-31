let postBody = document.getElementById('postBody') //textarea
let img = document.getElementById('img') //textarea
let postTitle = document.getElementById('postTitle') //textarea
let posts = document.getElementById('posts') //textarea
let submit = document.getElementById('submit')

let dataPost = [];
dataPost = JSON.parse(localStorage.posts)


submit.onclick = function(){
    let newPost = {
        postBody:postBody.value,
        img:img.value,
        postTitle:postTitle.value,
    }
        dataPost.push(newPost)
    console.log(newPost)
    console.log(dataPost)
    showData()
}

function showData(){
    let posts = '';
    for (let i=1; i < dataPost.length;i++){
        posts+=`
        <div class="col-lg-3">
                <div class="post-imgs">
                    <a href="#" class="post-img-link">
                        <img src="${dataPost[i].img}" alt="product" class="post-img">
                    </a>
                    <div class="post-titles">
                        <h4 class="post-title">
                            <a href="#">${dataPost[i].postTitle}</a></h4>
                    </div>
                    <div id="description" class="sb-description">
                          <p>${dataPost[i].postBody}</p>
                    </div>
                    <div class="sb-card-buttons-frame">
                        <!-- button -->
                        <a href="https://elanta.app/nazar/starbelly-demo/product.html" class="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                    <span class="sb-icon">
                      <img src="#" alt="icon">
                    </span>
                        </a>
                        <!-- button end -->
                        <!-- button -->
                        <a href="https://elanta.app/nazar/starbelly-demo/shop-list-1.html#." class="sb-btn sb-atc">
                    <span class="sb-icon">
                      <img src="#" alt="icon">
                    </span>
                            <span class="sb-add-to-cart-text">Add to cart</span>
                            <span class="sb-added-text">Added</span>
                        </a>
                        <!-- button end -->
                    </div>
                </div>
            </div><!--d-colmd-3-->
        `;
    }
    localStorage.setItem("posts", JSON.stringify(dataPost))

    document.getElementById('posts').innerHTML = posts;
    console.log(posts)
}
showData()
