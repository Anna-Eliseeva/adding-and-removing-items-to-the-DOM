//Добавление элементов в DOM
function test() {
    let element = document.getElementById('block-1');//Выбираем элемент с id block-1
    let link = document.createElement('a');//внутри block-1 создаем элемент a
    let br = document.createElement('br');//внутри a создаем элемент br

    link.innerHtml = 'Go to Google';//<a href ="google.com">Go to Google</a>
    link.href = 'http://google.com';

    element.appendChild(br);//добавим дочерним элементом block-1
    element.appendChild(link);//добавим дочерним элементом block-1
}

//Удаление элементов в DOM

function del() {
    let element = document.getElementById('block-2');
    document.body.removeChild(element);
}