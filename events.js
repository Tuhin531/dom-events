console.log('Dom er ajker evert e welcome')
// first way
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// second way
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = ' blue';
}
//  third way

const purpleButton = document.getElementById('makePurple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = ' purple';
}

// forth way

document.getElementById('make-black').addEventListener('click', function makeBlack(){
    document.body.style.backgroundColor = 'black';
})