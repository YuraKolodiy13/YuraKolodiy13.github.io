const showMap = document.querySelector('.showMap');
const userLogin = document.querySelector('.userBlock__login');
const modalMaps = document.querySelector('.modal__maps');
const modalPopup = document.querySelector('.modal__popup');
const close = document.querySelectorAll('.close');

document.body.addEventListener('click', function (e) {
    let target = e.target;
    if(!target.classList.contains('close')) return;
    target.parentNode.style.display = 'none';
});
if(showMap){
    showMap.addEventListener('click', function (e) {
        e.preventDefault();
        modalMaps.style.display = 'block';
    });
}
userLogin.addEventListener('click', function (e) {
    e.preventDefault();
    modalPopup.style.display = 'block';
});

const icon = document.querySelector('.icon');
const headerMain = document.querySelector('.headerMain');

icon.addEventListener('click', function () {
    headerMain.classList.toggle('responsive');
});

/////////////////////////////tabContent
let tab;
let tabContent;

window.onload = function () {
    tabContent = document.querySelectorAll('.tabContent');
    tab = document.querySelectorAll('.tab');
    hideTabsContent(1);
};

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

let catalogPagination = document.querySelector('.catalog__pagination');
catalogPagination.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    if(target.className == 'tab' || target.tagName == 'A'){
        for (let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
});

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


