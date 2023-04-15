let msg = document.querySelector('.msg-text');

if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]))
}

let buttons = document.querySelectorAll('#addCart')


for (let btn of buttons) {
    btn.addEventListener('click', function () {

        let productString = localStorage.getItem('products')
        let productList = JSON.parse(productString);
        let src = this.parentElement.parentElement.previousElementSibling.children[0].src
        let name = this.parentElement.parentElement.children[0].innerHTML
        let type = this.parentElement.parentElement.children[1].innerHTML
        let price = this.previousElementSibling.innerHTML
        let id = this.parentElement.parentElement.parentElement.id;

        let product = {
            productId: id,
            image: src,
            productName: name,
            productType: type,
            productPrice: price,
            productCount: 1,


        };


        let existPr = productList.find(pr => pr.productId === id);

        if (existPr === undefined) {
            productList.push(product);
        }
        else {
            existPr.productCount += 1
        }



        localStorage.setItem('products', JSON.stringify(productList));

        msg.style.right = '25px'
       
       
        ShowCountProduct();

        
    })
}

setInterval(() => {
    msg.style.right = '-305px'
    
    
}, 2000);

function ShowCountProduct() {
    let product_list = JSON.parse(localStorage.getItem('products'));
    document.querySelector('#count').innerHTML = product_list.length;
}

ShowCountProduct()