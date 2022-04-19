const ImgUrl = document.querySelectorAll('#neko img')
ImgUrl.forEach((el) => {
    el.addEventListener('click', (e) => {
        const BoxHtml = `
        <div id="lightbox">
            <div class="lightbox">
            <i class="fa fa-angle-left lightbox-prev"></i>
                <div class="light-img">
                    <img src=" ${e.target.getAttribute("src")}" alt="Zoom Image" class="lightbox-src">
                </div>
                <i class="fa fa-angle-right lightbox-next"></i>
            </div>
        </div>`
        document.body.insertAdjacentHTML("afterbegin", BoxHtml)
    })
})
let indexImg = Number;
let NewSrc = new String;
document.body.addEventListener('click', (e) => {
    const lightBoxSrc = document.querySelector('.lightbox-src')
    indexImg = [...ImgUrl].findIndex((item) => item.getAttribute("src") === lightBoxSrc.getAttribute('src').trim())
    if (e.target.matches("#lightbox")) {
        e.target.parentNode.removeChild(e.target)
    } else if (e.target.matches(".lightbox-prev")) {
        if (indexImg == 0) indexImg = ImgUrl.length;
        indexImg--;
        NewSrc = [...ImgUrl][indexImg].getAttribute('src')
        lightBoxSrc.setAttribute('src', NewSrc);
    } else if (e.target.matches(".lightbox-next")) {
        indexImg++;
        if (indexImg === ImgUrl.length) indexImg = 0;
        NewSrc = [...ImgUrl][indexImg].getAttribute('src')
        lightBoxSrc.setAttribute('src', NewSrc);
    }
})