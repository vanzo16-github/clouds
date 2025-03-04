window.onload = function() {
    const clouds = document.querySelector('.clouds');
    const cloudsSet = document.querySelector('.clouds_set');
    cloudsSet.style.cssText = "opacity: 1; visibility: inherit";

    setTimeout(function() {
        clouds.className +=' opened';
    }, 3000);
    console.log(clouds)
};