console.log(0)
var n = 0
slides = [document.getElementsByClassName('is')]

function button() {
    document.getElementsByClassName('button')[0].style.display = 'none'
    animation = document.getElementsByClassName('animation')[0]
    animation.style.display = 'flex'
    for (i=0; i < 100; i++) {
        setTimeout(function(){
            document.getElementsByClassName('first')[0].style.opacity = String(i/100)
        }, 100)
    }

    setTimeout(function(){
        for (i=100; i > 0; i--) {
            setTimeout(function(){
                document.getElementsByClassName('first')[0].style.opacity = String(i/100)
            }, 100)
        }
    }, 2000)
    setTimeout(function(){
        document.getElementsByClassName('first')[0].style.display = 'none'
        document.getElementsByClassName('next')[0].style.display = 'flex'
        next()
    }, 3000)
}

function next(){
    slides[0][n].style.display = 'none'
    n += 1
    n = n % 5
    slides[0][n].style.display = 'flex'

}