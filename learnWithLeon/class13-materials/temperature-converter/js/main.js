//Write your pseduo code first! 

document.querySelector('#fahrenButton').addEventListener('click', converterFunction)

function converterFunction() {
    const someValue = document.querySelector('#fahren').value * 9/5 + 32



    document.querySelector('#putHere').innerText = `${someValue}`
}

