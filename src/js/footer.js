let changeLangBtn = document.querySelector(".change-language")
changeLangBtn.addEventListener("click", event =>{
    document.querySelector(".selections").classList.add("selections-is-actived")
})
document.querySelector(".close").addEventListener("click", event =>{
    document.querySelector(".selections").classList.remove("selections-is-actived")
})

// 
let headerList = document.querySelectorAll(".footer__list1-header")
let contentList = document.querySelectorAll(".footer__list1-content")

headerList.forEach(header => {
    header.addEventListener("click", event =>{
        headerList.forEach(_header => {
            _header.classList.remove("actived")
        });
        event.target.classList.add("actived")
        contentList.forEach(content => {
            content.classList.remove("actived")
        });
        let contentChecked = document.querySelectorAll(`.footer__list1-content[data-id='${event.target.id}']`)
        // console.log(contentChecked);
        contentChecked.forEach(_content => {
            _content.classList.add("actived")
        });
    })
});