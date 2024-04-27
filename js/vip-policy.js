window.onscroll = function() {
    const difference = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = document.documentElement.scrollTop;
    var notices = document.querySelectorAll('.notice');
    // Check if the user has scrolled to the bottom of the page
    if (difference - scrollPosition <= 2) {
      // If yes, add a class to the body or any desired element
        notices.forEach(function(notice) {
            notice.classList.add('end-of-page');
        });
    } else {
      // If not, remove the class
        notices.forEach(function(notice) {
            notice.classList.remove('end-of-page');
        });
    }
};