const synth = new Tone.Synth().toMaster()

const mainContainer = document.getElementById('mainContainer')

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const n = 5
const k = 7
for (let i = 0; i < k * n; i++) {
    const div = document.createElement('div')
    const className = i % 2 == 0 ? 'even' : 'odd'
    div.setAttribute('class', `${className} musicKey`)
    let currClassName = div.getAttribute('class')
    div.onclick = () => {
        div.setAttribute('class', `${currClassName} highlighted`)
        play(`${notes[i % k]}${Math.floor(i / 7) + 1}`)
        setTimeout(() => {
            div.setAttribute('class', currClassName)
        }, 600)
    }
    mainContainer.appendChild(div)
}

const play = (note) => {
    console.log(note)
    synth.triggerAttackRelease(note, '8n')
}
