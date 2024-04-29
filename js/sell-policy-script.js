function transferPolicy(){
    let transferList = document.querySelectorAll('.sell-policy__menu ul li');
    transferList.forEach((item) => {
        item.addEventListener('click', () => {
            var target = item.getAttribute('data-target');
            var targetElement = document.getElementById(target);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        })
    })
}

window.addEventListener('scroll', function() {
   
    var footer = document.getElementById('footer'); 
    var menuHeader = document.getElementById('policy-menu-header');
    var menu = document.getElementById('policy-menu');
    var distanceToTop = footer.getBoundingClientRect().top; 
    var windowHeight = window.innerHeight; 

    var distanceToBottom = windowHeight - distanceToTop;

    if (distanceToBottom >= 80) {
        menu.style.top = '5%';
        menuHeader.style.display = 'none';
    } 
    else {menu.style.top = '35%'
        menuHeader.style.display = 'block';};
       
});

(function($){
    var listItems = document.querySelectorAll('.sell-policy__content-element ol li');

      
        listItems.forEach(function(item) {
            var content = item.textContent;
            var colonIndex = content.indexOf(':');
    
            if (colonIndex !== -1) {
                var boldText = content.substring(0, colonIndex);
                item.innerHTML = '<strong>' + boldText + '</strong>' + content.substring(colonIndex);
            }
        });

    transferPolicy();
})(jQuery);