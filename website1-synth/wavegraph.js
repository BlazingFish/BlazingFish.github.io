// Much of this was copied from a tutorial, but I understand how it works (mostly).
const canvas1 = document.getElementById("waveGraph1");
const wavetables1 = document.getElementById("wavetables1");
const wavetablesButton = document.getElementsByClassName("wavetablesButton")
const ctx1 = canvas1.getContext("2d");

const w = 500 * dpr
const h = 300 * dpr
const bufferLength1 = analyser[0].frequencyBinCount; // frequencyBinCount is half of fftSize
const dataArray1 = new Uint8Array(bufferLength1); // Makes an 8-bit list

canvas1.width = w;
canvas1.height = h;
wavetables1.style.width = w+"px"; 
for (let i = 0; i < wavetablesButton.length; i++) {
    wavetablesButton[i].style.width = w
}

const canvas2 = document.getElementById("waveGraph2");
const wavetables2 = document.getElementById("wavetables2");
const ctx2 = canvas2.getContext("2d");

const bufferLength2 = analyser[1].frequencyBinCount; // frequencyBinCount is half of fftSize
const dataArray2 = new Uint8Array(bufferLength2); // Makes an 8-bit list

canvas2.width = w;
canvas2.height = h;
wavetables2.style.width = w+"px"; 

const canvas3 = document.getElementById("waveGraph3");
const wavetables3 = document.getElementById("wavetables3");
const ctx3 = canvas3.getContext("2d");

const bufferLength3 = analyser[2].frequencyBinCount; // frequencyBinCount is half of fftSize
const dataArray3 = new Uint8Array(bufferLength2); // Makes an 8-bit list

canvas3.width = w;
canvas3.height = h;
wavetables3.style.width = w+"px"; 

draw1();
draw2();
draw3();

function draw1() {
    analyser[0].getByteTimeDomainData(dataArray1) // Gets the time domain and assigns it to dataArray

    ctx1.fillStyle = "white";
    ctx1.fillRect(0, 0, w, h);
    ctx1.lineWidth = 4.0;
    ctx1.strokeStyle = "black";
    ctx1.beginPath();

    const sliceWidth = w / bufferLength1;
    let x = 0 // x is the position of the line which is being drawn on the canvas

    for (let i = 0; i < bufferLength1; i++) {
        const v = dataArray1[i] / 128;
        const y = (v * h) / 2;
        if (i === 0) {
            ctx1.moveTo(x, y); // Starting position of the line
        }
        else {
            ctx1.lineTo(x, y); // End position of the line
        }
        x += sliceWidth;
    }
    
    ctx1.lineTo(w, h / 2);
    ctx1.stroke();

    requestAnimationFrame(draw1); // Animates it continuously
}

function draw2() {
    analyser[1].getByteTimeDomainData(dataArray2) // Gets the time domain and assigns it to dataArray

    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, w, h);
    ctx2.lineWidth = 4.0;
    ctx2.strokeStyle = "black";
    ctx2.beginPath();

    const sliceWidth = w / bufferLength2;
    let x = 0 // x is the position of the line which is being drawn on the canvas

    for (let i = 0; i < bufferLength2; i++) {
        const v = dataArray2[i] / 128;
        const y = (v * h) / 2;
        if (i === 0) {
            ctx2.moveTo(x, y); // Starting position of the line
        }
        else {
            ctx2.lineTo(x, y); // End position of the line
        }
        x += sliceWidth;
    }
    
    ctx2.lineTo(w, h / 2);
    ctx2.stroke();

    requestAnimationFrame(draw2); // Animates it continuously
}

function draw3() {
    analyser[2].getByteTimeDomainData(dataArray3) // Gets the time domain and assigns it to dataArray

    ctx3.fillStyle = "white";
    ctx3.fillRect(0, 0, w, h);
    ctx3.lineWidth = 4.0;
    ctx3.strokeStyle = "black";
    ctx3.beginPath();

    const sliceWidth = w / bufferLength3;
    let x = 0 // x is the position of the line which is being drawn on the canvas

    for (let i = 0; i < bufferLength3; i++) {
        const v = dataArray3[i] / 128;
        const y = (v * h) / 2;
        if (i === 0) {
            ctx3.moveTo(x, y); // Starting position of the line
        }
        else {
            ctx3.lineTo(x, y); // End position of the line
        }
        x += sliceWidth;
    }
    
    ctx3.lineTo(w, h / 2);
    ctx3.stroke();

    requestAnimationFrame(draw3); // Animates it continuously
}