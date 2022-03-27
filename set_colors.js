
var rgbColors = {
    
    // rgb channel
    rgb: {
        r: Math.floor(Math.random() * document.getElementById("range-red").max),
        g: Math.floor(Math.random() * document.getElementById("range-green").max),
        b: Math.floor(Math.random() * document.getElementById("range-blue").max),
        a: 100
    },

    // inputs
    input: {
        r: document.getElementById("range-red"),
        g: document.getElementById("range-green"),
        b: document.getElementById("range-blue"),
        a: document.getElementById("range-alpha"),
    },

    // spans
    span: {
        r: document.querySelector(".value-range-red"),
        g: document.querySelector(".value-range-green"),
        b: document.querySelector(".value-range-blue"),
        a: document.querySelector(".value-range-alpha"),
    }
}

// set content to spans
rgbColors.span.r.innerHTML = rgbColors.rgb.r
rgbColors.span.g.innerHTML = rgbColors.rgb.g
rgbColors.span.b.innerHTML = rgbColors.rgb.b
rgbColors.span.a.innerHTML = rgbColors.rgb.a

// set default to .get-colorRGB
var getColorsRGB = {
    el: document.querySelector(".get-colorRGB"),
    bg: rgbColors.rgb.r + ',' + rgbColors.rgb.g + ',' + rgbColors.rgb.b + ',' + rgbColors.rgb.a,
    span: document.querySelector('.textGetColor'),
    inputTextRGB: document.querySelector('.input-text-rgb'),
    text: 'click to copy rgb color code'
}

// set background default
getColorsRGB.el.style.background = 'rgba('+getColorsRGB.bg+')'
getColorsRGB.span.innerHTML = getColorsRGB.text

//set default options to input range
rgbColors.input.r.value = rgbColors.rgb.r //red
rgbColors.input.g.value = rgbColors.rgb.g //green
rgbColors.input.b.value = rgbColors.rgb.b //blue
rgbColors.input.a.value = rgbColors.rgb.a //alpha

//set input-text-rgb
var inputCurrentRGB = document.querySelector('.input-text-rgb')

// functions to editable html colors

// Red Channel
rgbColors.input.r.onchange = () => {
    //let i = 0
    for(i=0; i <= rgbColors.input.r.value; i++) {
        rgbColors.rgb.r = i
        rgbColors.span.r.innerHTML = i
        let newBackground = 'rgba('+ rgbColors.rgb.r + ','+ rgbColors.rgb.g + ',' + rgbColors.rgb.b + ',' + rgbColors.rgb.a+'%)'
        getColorsRGB.el.style.background = newBackground
        inputCurrentRGB.value = newBackground
    }
}

// Green Channel
rgbColors.input.g.onchange = () => {
    for(i=0; i <= rgbColors.input.g.value; i++) {
        rgbColors.rgb.g = i
        rgbColors.span.g.innerHTML = i
        let newBackground = 'rgba('+ rgbColors.rgb.r + ','+ rgbColors.rgb.g + ',' + rgbColors.rgb.b + ',' + rgbColors.rgb.a+'%)'
        getColorsRGB.el.style.background = newBackground
        inputCurrentRGB.value = newBackground
    }
}

// Blue Channel
rgbColors.input.b.onchange = () => {
    for(i=0; i <= rgbColors.input.b.value; i++) {
       rgbColors.rgb.b = i
        rgbColors.span.b.innerHTML = i
        let newBackground = 'rgba('+ rgbColors.rgb.r + ','+ rgbColors.rgb.g + ',' + rgbColors.rgb.b + ',' + rgbColors.rgb.a+'%)'
        getColorsRGB.el.style.background = newBackground
        inputCurrentRGB.value = newBackground
    }    
}

// Alpha Channel
rgbColors.input.a.onchange = () => {
    for(i=0; i <= rgbColors.input.a.value; i++) {
        rgbColors.rgb.a = i
        rgbColors.span.a.innerHTML = i
        let newBackground = 'rgba('+ rgbColors.rgb.r + ','+ rgbColors.rgb.g + ',' + rgbColors.rgb.b + ',' + rgbColors.rgb.a+'%)'
        getColorsRGB.el.style.background = newBackground
        inputCurrentRGB.value = newBackground
    }    
}

// Copy RGB code
getColorsRGB.el.onclick = () => {
    //var copyRGBColorCode = 'background: rgba('+getColorsRGB.bg+')'
    var copy = 'background: ' + document.querySelector(".get-colorRGB").style.background
    inputCurrentRGB.value = copy
    inputCurrentRGB.select()
    inputCurrentRGB.setSelectionRange(0,99999)
    document.execCommand("copy")
    alert(copy)
}

// random rgb colors in click button
var btnRandomRGB = {
    el: document.querySelector('.random-rgb'),
    text: 'Click to random RGB Colors'
}

// set default btnRandomRGB
btnRandomRGB.el.innerHTML = btnRandomRGB.text

btnRandomRGB.el.onclick = () => {
    location.reload()
}
