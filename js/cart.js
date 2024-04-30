var cartBtns = document.querySelectorAll('.add-cart');
for(let i = 0; i < cartBtns.length; i++) {
    console.log('hello');
    cartBtns[i].onclick = () => {
        document.getElementById('cart-input').style.display = 'flex';
        console.log('Hello');
    }
}
var okBtn1 = document.getElementById('cart-modal-ok-button-1');
var input = document.getElementById('cart-modal-input');

okBtn1.onclick = () => {
    document.getElementById('cart-input').style.display = 'none';
    document.getElementById('cart-show-message').style.display = 'flex';
}



var okBtn2 = document.getElementById('cart-modal-ok-button-2');
okBtn2.onclick = () => {
    document.getElementById('cart-show-message').style.display = 'none';
    location.reload();
}

