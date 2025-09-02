var nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.prev'),
carousel = document.querySelector('.carousel'),
list = document.querySelector('.list'),
item = document.querySelector('.item'),
runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() => {
    nextBtn.click()
},  timeAutoNext)

function resetTimeAnimation() {
    runningTime.computedStyleMap.animation = 'none'
    runningTime.offsetHeight /* triggerre flow*/
    runningTime.style.animation = null
    runningTime.style.animation = ''
}

function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() //reset the running time animation
}

// start the initial animation
resetTimeAnimation()