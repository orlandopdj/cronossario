const diasText = document.querySelector('.dias')
const horasText = document.querySelector('.horas')
const minutosText = document.querySelector('.minutos')
const segundosText = document.querySelector('.segundos')

const diasResponsive = document.querySelector('.d')
const horasResponsive = document.querySelector('.h')
const minutosResponsive = document.querySelector('.m')
const segundosResponsive = document.querySelector('.s')


function render(dias, horas, minutos, segundos) {
    diasText.innerHTML = dias < 9 ? '0' + dias : dias
    horasText.innerHTML = horas < 9 ? '0' + horas : horas
    minutosText.innerHTML = minutos < 9 ? '0' + minutos : minutos
    segundosText.innerHTML = segundos < 9 ? '0' + segundos : segundos

}

const renderResponsive = () => {
    const largura = window.innerWidth < 600
    if (largura) {
        diasResponsive.innerHTML = 'Dias'
        horasResponsive.innerHTML = 'Hs'
        minutosResponsive.innerHTML = 'Min'
        segundosResponsive.innerHTML = 'Seg'
    }
}

renderResponsive()

const regressivo = () => {
    const dateNow = new Date()
    const dateAniver = new Date(2024, 5, 16)

    const tempoRestante = dateAniver - dateNow

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24))
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000)

    render(dias, horas, minutos, segundos)
}

setInterval(regressivo, 1000)