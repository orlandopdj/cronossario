const diasText = document.querySelector('.dias')
const horasText = document.querySelector('.horas')
const minutosText = document.querySelector('.minutos')
const segundosText = document.querySelector('.segundos')


function render(dias, horas, minutos, segundos) {
    diasText.innerHTML = dias
    horasText.innerHTML = horas
    minutosText.innerHTML = minutos
    segundosText.innerHTML = segundos
}


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