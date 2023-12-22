//------------- CAMBIO CLASSE ALLO SCROLL bg -------------
window.addEventListener('scroll', function() {
    if(window.scrollY > 300) {
        this.document.getElementById('bg').classList.remove('bg-img')
        this.document.getElementById('bg').classList.add('scroll-down-bg')
    } else {
        this.document.getElementById('bg').classList.remove('scroll-down-bg')
        this.document.getElementById('bg').classList.add('bg-img')
    }
} )

