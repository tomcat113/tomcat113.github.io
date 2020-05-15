window.addEventListener('load', function () {
    var numli = document.querySelectorAll('.numli');
    for (var i = 0; i < numli.length; i++) {
        numli[i].setAttribute('data-li',i);
        numli[i].addEventListener('mouseover', function () {
            var datali=this.getAttribute('data-li');
            var liul = numli[datali].querySelector('.liul');
            liul.style.display = 'block';
        })
        numli[i].addEventListener('mouseout', function () {
            var datali = this.getAttribute('data-li');
            var liul = numli[datali].querySelector('.liul');
            liul.style.display = 'none';
        })
    }
})