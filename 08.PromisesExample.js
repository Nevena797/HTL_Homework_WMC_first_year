//Javascript Nuggets Example
//.firt - after first redö
//.second -after 3s second blue; 4s
//.third - after 2s third green;  6s
//In Sequence!!!

const btn = document.querySelector('btn')

btn.addEventListener('click', (e) => {
    //console.log('hello')
    addColor(1000, '.first', 'red')
        .then(() => addColor(3000, '.second', 'blue'))
        .then(() => addColor(2000, '.third', 'green'))
        .catch((err) => console.log(err))
})


function addColor(time, selector, color) {
    //console.log('add color')
    const element = document.getElementById(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve(data)
            }, time)
        } else {
            reject(`There is no such element ; "${selector}"`)
        }
    })
}
