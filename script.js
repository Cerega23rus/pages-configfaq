
document.querySelectorAll('.floating-select select').forEach(select => {
  select.addEventListener('change', function() {
    if (this.value !== '') {
      this.classList.add('filled');
    } else {
      this.classList.remove('filled');
    }
  });
});

document.getElementById('addButton').addEventListener('click', function() {
  const card = document.getElementById('formCard');

  card.style.display = 'block';
  setTimeout(() => { card.style.opacity = '1'; }, 10);
});

document.getElementById('closeButton').addEventListener('click', function() {
  const card = document.getElementById('formCard');
  card.style.opacity = '0';
  const inputs = card.querySelectorAll('input, textarea');
  setTimeout(() => { card.style.display = 'none'; }, 300);
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('filled');
  });
});

document.getElementById('textInput2').value = 'Как купить автомобиль в ВТБ Авто?';
document.getElementById('multiLineInput2').innerHTML = '<p class="card-description">' +
    'Приобрести автомобиль в ВТБ Авто можно несколькими способами:</p>\n' +
    '<ul class="method-list">\n' +
    '  <li class="method-item">Оформив покупку онлайн на сайте компании.</li>\n' +
    '  <li class="method-item">Обратившись в контактный центр по телефону.</li>\n' +
    '</ul>';

document.getElementById('textInput3').value = 'Какие автомобили представлены в каталоге ВТБ Авто?';
document.getElementById('multiLineInput3').value = 'В каталоге ВТБ Авто представлен широкий выбор новых автомобилей различных марок и моделей, а также автомобили с пробегом. Вы можете найти автомобили как отечественного, так и зарубежного производства.';

const cards = document.querySelectorAll('.border-card');

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedCard = document.getElementById(id);
    const dropZone = e.target.closest('.border-card');
    
    if (dropZone && dropZone !== draggedCard) {
        const parent = draggedCard.parentNode;
        parent.insertBefore(draggedCard, dropZone);
    }
}

const selects = document.querySelectorAll('.floating-select select');
const nav = document.querySelector('.nav');

selects.forEach(select => {
    select.addEventListener('change', updateNav);
});

function updateNav() {
    const subscriptionSelect = document.getElementById('floatingSelect1'); // Авто по подписке
    const stateSelect = document.getElementById('floatingSelect2'); // Состояние
    const brandSelect = document.getElementById('floatingSelect3'); // Марка
    const modelSelect = document.getElementById('floatingSelect4'); // Модель
   
    let text = "";
    let brandText = brandSelect.value ? brandSelect.options[brandSelect.selectedIndex].text : "";
    let modelText = modelSelect.value ? modelSelect.options[modelSelect.selectedIndex].text : "";


    if (subscriptionSelect.value === "" || subscriptionSelect.value === "0") {
        if (stateSelect.value === "1") {
            text = "Для новых автомобилей";
        } else if (stateSelect.value === "2") {
            text = "Для автомобилей c пробегом";
        } else {
            text = "Для всех автомобилей";
        }
    } else if (subscriptionSelect.value === "1") {
        if (stateSelect.value === "1") {
            text = "Для новых автомобилей по продукту покупка";
        } else if (stateSelect.value === "2") {
            text = "Для автомобилей c пробегом по продукту покупка";
        } else {
            text = "Для всех автомобилей по продукту покупка";
        }
    } else if (subscriptionSelect.value === "2") {
        if (stateSelect.value === "1") {
            text = "Для новых автомобилей по продукту подписка";
        } else if (stateSelect.value === "2") {
            text = "Для автомобилей c пробегом по продукту подписка";
        } else {
            text = "Для всех автомобилей по продукту подписка";
        }
    } else {
        text = "";
    }

    if (brandText == "Не указано") {
        brandText = "";
    }

    if (modelText == "Не указано") {
        modelText = "";
    }

    const finalText = [text, brandText, modelText]
        .filter(text => text)
        .join(' ');

    nav.textContent = finalText
}


const modelSelect = document.getElementById('floatingSelect3');
const brandSelect = document.getElementById('floatingSelect4');

modelSelect.addEventListener('change', function() {
    if (modelSelect.value) {
        brandSelect.disabled = false;
    } else {
        brandSelect.disabled = true; 
        brandSelect.selectedIndex = 0; 
    }
});

brandSelect.disabled = true;
