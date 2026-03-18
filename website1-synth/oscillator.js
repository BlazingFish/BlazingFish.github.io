const dpr = window.devicePixelRatio;

const frequency1 = document.getElementById("frequency1")
const frequency2 = document.getElementById("frequency2")
const frequency3 = document.getElementById("frequency3")
const freqs = [frequency1, frequency2, frequency3]
const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const note3 = document.getElementById("note3")
const notes = [note1, note2, note3]
const detune1 = document.getElementById("detune1")
const detune2 = document.getElementById("detune2")
const detune3 = document.getElementById("detune3")
const detunes = [detune1, detune2, detune3]
const voices1 = document.getElementById("voices1")
const voices2 = document.getElementById("voices2")
const voices3 = document.getElementById("voices3")
const voices = [voices1, voices2, voices3]
const octave1 = document.getElementById("octave1")
const octave2 = document.getElementById("octave2")
const octave3 = document.getElementById("octave3")
const octaves = [octave1, octave2, octave3]
const volume1 = document.getElementById("volume1")
const volume2 = document.getElementById("volume2")
const volume3 = document.getElementById("volume3")
const volumes = [volume1, volume2, volume3]
// const pianoRoll1 = document.getElementById("pianoRoll1")
// const pianoRolls = [pianoRoll1]
// const pianoRollsctx = [null, null, null]

// const pianoRollProperties1 = {
//     pianoRollRow
// }

// var pianoRollRow = []
// for (let i = 0; i < 12; i++) {
//     pianoRollRow.push(null)
// }
// for (let i = 16; i < 16; i++) {
//     piano
// }
// console.log(pianoRollRow)

// for (let i = 0; i < 1; i++) {
//     try {
//         pianoRolls[i].width = 1000*dpr
//         pianoRolls[i].height = 300*dpr
//         pianoRollsctx[i] = pianoRolls[i].getContext("2d")
//         pianoRollsctx[i].fillStyle = "lightblue";
//         pianoRollsctx[i].fillRect(10, 0, 1000*dpr, 300*dpr)
//         pianoRollsctx[i].stroke()
//     } catch (error) {
//         console.error(error)
//     }
// }

const oscillatorType = ["sine", "square", "triangle", "sawtooth"] // The four types of oscillators built in to JS
var oscillatorStorage = [null,null,null] // Stores strings from oscillatorType

const noteFreqs = [16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87] // The frequency of each note for the 0th octave
var currentNote = [noteFreqs[0]*(2**4), noteFreqs[0]*(2**4), noteFreqs[0]*(2**4)] // Variable exists to store the current note of each synth. The default values are for middle C, or C5
var currentNoteIndex = [0, 0, 0] // Could've made this redundant, but I was lazy. Used when changing octaves.

// These two variable exist to make testing different values for detune Param easier
const detuneParamNum = 3
const detuneParamDom = 4

// A sequence which goes alternates between positive and negative values, and approaches 0. This achieves a 'wide' effect when detune is changed.
const detuneParam = [0, 1, -1,
    detuneParamNum/detuneParamDom, -detuneParamNum/detuneParamDom,
    detuneParamNum/(2*detuneParamDom), -detuneParamNum/(2*detuneParamDom),
    detuneParamNum/(4*detuneParamDom), -(detuneParamNum/4*detuneParamDom),
    detuneParamNum/(8*detuneParamDom), -(detuneParamNum/8*detuneParamDom),
    detuneParamNum/(16*detuneParamDom), -(detuneParamNum/16*detuneParamDom),
    detuneParamNum/(32*detuneParamDom), -(detuneParamNum/32*detuneParamDom),
    0
]

const context = new AudioContext() // Neccesary for audio in JS

const analyser1 = new AnalyserNode(context, {
    fftSize: 1024, // Sets the maximum frequency
    smoothingTimeConstant: 0.8, // No idea what this does
})
const analyser2 = new AnalyserNode(context, {
    fftSize: 1024, // Sets the maximum frequency
    smoothingTimeConstant: 0.8, // No idea what this does
})
const analyser3 = new AnalyserNode(context, {
    fftSize: 1024, // Sets the maximum frequency
    smoothingTimeConstant: 0.8, // No idea what this does
})
const analyser = [analyser1, analyser2, analyser3]
var oscillator = [[],[],[]] // Stores the active oscillators
var playingOscillators = [[],[],[]] // Stores the oscillators which are currently playing, because there is not built-in function for that
var panner = [[],[],[]] // Stores the panning nodes, so it can pan audio which is helpful when adding voices to the synth
var gain = [[],[],[]] // Stores the gain nodes, so volume can be customized

// Sam wrote this. I don't want to include it because I don't understand it, but it is rather cool and could likely optimize the lines.
// for (let i in freqs) {
//     freqs[i].oninput = () => {updateSettings(Number(i))}
// }

// Input updates. Lines could probably be optimized, but the more manual solution of copying the lines works as well.
// These functions seek to update the synth dymanically with user input.
frequency1.oninput = function() {
    updateSettings(0)
}

frequency2.oninput = function() {
    updateSettings(1)
}

frequency3.oninput = function() {
    updateSettings(2)
}

detune1.oninput = function() {
    updateSettings(0)
}

detune2.oninput = function() {
    updateSettings(1)
}

detune3.oninput = function() {
    updateSettings(2)
}

voices1.oninput = function() {
    startSound(oscillatorType.indexOf(oscillatorStorage[0]), 0)
}

voices2.oninput = function() {
    startSound(oscillatorType.indexOf(oscillatorStorage[1]), 1)
}

voices3.oninput = function() {
    startSound(oscillatorType.indexOf(oscillatorStorage[2]), 2)
}

octave1.oninput = function() {
    changeNotes(currentNoteIndex[0], 0)
}

octave2.oninput = function() {
    changeNotes(currentNoteIndex[1], 1)
}

octave3.oninput = function() {
    changeNotes(currentNoteIndex[2], 2)
}

volume1.oninput = function() {
    updateSettings(0)
}

volume2.oninput = function() {
    updateSettings(1)
}

volume3.oninput = function() {
    updateSettings(2)
}

for (let i = 0; i < 3; i++) { // Makes 48 oscillators, 16 for each synth.
    for (let l = 0; l < 16; l++) {
        oscillator[i].push(context.createOscillator()) // Makes oscillator node to produce sounds
        panner[i].push(context.createStereoPanner()) // Makes pan node to control panning
        gain[i].push(context.createGain()) // Makes gain node to control volume

        oscillator[i][l].connect(panner[i][l]) // Connects pan node to oscillator node
        panner[i][l].connect(gain[i][l]) // Connects gain node to pan node
        gain[i][l].connect(analyser[i]) // Connects gain node to the appropriate analyser
    }
    analyser[i].connect(context.destination) // // Makes 3 analyser nodes, 1 for each synth, and connects analyser to the audio output
}

function changeNotes(note, index) { // Called when note or octave is changed. 'note' is one of 12 notes in an octave. 'index' is the index of the synth.
    currentNoteIndex[index] = note // Is parsed into this function later to remember the note.
    currentNote[index] = noteFreqs[note]*(2**(octaves[index].value)) // Changes the note.
    updateSettings(index)
}

function updateSettings(index) { // Called when frequency, detune, or volume is changed. 'index' is the index of the synth.
    for (let i = 0; i < voices[index].value; i++) { // Updates settings for each active oscillator (each voice represents an active oscillator)
        oscillator[index][i].type = oscillatorStorage[index] // Sets the oscillator's type
        gain[index][i].gain.value = 1/voices[index].value*volumes[index].value // Statically normalizes audio clipping by making gain equal to 1/voices

        if (detunes[index].value != 0) {
            oscillator[index][i].frequency.setValueAtTime((currentNote[index]*freqs[index].value) * (1+(detuneParam[i]*detunes[index].value*0.02)), context.currentTime) // Sets the frequency relative to detune and detuneParam
            panner[index][i].pan.value = detuneParam[i]*detunes[index].value // Sets the panning relative to detune and detuneParam
        }
        else { // If detune is 0
            oscillator[index][i].frequency.setValueAtTime(currentNote[index]*freqs[index].value, context.currentTime) // Sets the frequency statically
            panner[index][i].pan.value = 0 // Sets the panning statically
        }
    }
}

function startSound(type, index) { // Called when oscillator or voices is changed. 'type' is the shape of the oscillator, 'index' is the index of the synth.
    for (let i = 0; i < playingOscillators[index]; i++) { // Stops all playing oscillators
        oscillator[index][i].stop() // It is important to run this before everything else because the program breaks if an oscillator which is already playing tries to play again.
    }
    for (let i = 0; i < voices[index].value; i++) { // Runs for each active oscillator (voices) on the appropriate wavetable (index)
        oscillatorStorage[index] = oscillatorType[type] // Stores the type of oscillator
        oscillator[index][i] = context.createOscillator() // Creates the oscillator which plays sound

        oscillator[index][i].connect(panner[index][i]) // Follows the required Node JS chain
        panner[index][i].connect(gain[index][i])
        gain[index][i].connect(analyser[index])
    }
    updateSettings(index)
    for (let i = 0; i < voices[index].value; i++) { // Called seperately from everything else so 'updateSettings()' can be called directly before it and the oscillators start with the fully updated settings.
        oscillator[index][i].start()
    }
    playingOscillators[index] = voices[index].value // Stores the current voices
}

// THIS FUNCTION IS UNUSED IN THE FINAL PRODUCT
// function stopSound(index) {
//     for (let i = 0; i < playingOscillators[index]; i++) {
//         oscillator[index][i].stop()
//     }
// }