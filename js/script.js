const parent = document.querySelector('#parent')
const links = document.querySelectorAll('.link')
const textes = document.querySelectorAll('.text')
const tabs = document.querySelectorAll('.tab')



parent.addEventListener('click', (e) => {
    let targetBtn = e.target
    let dataText = targetBtn.dataset.text
    for (let tabAll of tabs) {
        tabAll.classList.remove('active')
        let chtoTo= targetBtn.closest('.tab')
       chtoTo.classList.add('active')
    }

})