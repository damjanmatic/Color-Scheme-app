document.getElementById('get-scheme-btn').addEventListener('click', fetchData)

function fetchData() {
    let currentColor = document.getElementById('color').value;
    console.log(currentColor)
    fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor.replace('#','')}`)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ''
            let textHtml = ''
            for (let color of data.colors) {
                console.log(color.hex.value)
                colorHtml += `<div class="box" style="background:${color.hex.value}"></div>`
                textHtml += `<div class="boxText"><p>${color.hex.value}</p></div>`
            }
            document.querySelector('.color').innerHTML = colorHtml
            document.querySelector('.text').innerHTML = textHtml
        })

}