let menuItems  = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu');

document.querySelector('#title').textContent = 'Мы продаем только подлинную технику Apple';
document.querySelector('.adv').remove();
document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';



let menpunkt = document.createElement('ul');
menpunkt.classList.add('menu-item');
menpunkt.textContent = 'Пятый пункт';



let oldMenu = menuItems;

menu.replaceChild(menuItems[1], menuItems[2]);


menu.insertBefore(oldMenu[2], menuItems[1]);

//menu.insertBefore(oldMenu[2])
menu.appendChild(menpunkt);

