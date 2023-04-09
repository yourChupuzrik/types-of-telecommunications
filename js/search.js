document.querySelector('#header-search').oninput = function() {
    let val = this.Value.trim();
    let header-searchItems = document.querySelectorAll('.header-search h1, p')
    if (val != '') {
        headersearchItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
}
