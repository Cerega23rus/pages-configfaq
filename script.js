
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
    const modelSelect = document.getElementById('floatingSelect3'); // Модель
    const brandSelect = document.getElementById('floatingSelect4'); // Марка

    let subscriptionText = "";
    if (subscriptionSelect.value === "1") { // Если "Да"
        subscriptionText = "Авто по подписке";
    } else if (subscriptionSelect.value === "2") { // Если "Нет"
        subscriptionText = "Авто без подписки";
    } else {
        subscriptionText = ""; // Если не указано
    }

    let stateText = "";
    if (stateSelect.value === "2") {
        stateText = "Все новые";
    } else if (stateSelect.value === "3") {
        stateText = "Все с пробегом";
    }

    let modelText = modelSelect.value ? modelSelect.options[modelSelect.selectedIndex].text : "";
    let brandText = brandSelect.value ? brandSelect.options[brandSelect.selectedIndex].text : "";

    // Формируем финальный текст
    const finalText = [subscriptionText, stateText, modelText, brandText]
        .filter(text => text) // Убираем пустые строки
        .join(' > ');

    nav.textContent = finalText || "Дефолтный FAQ"; // Если пусто, показываем "Дефолтный FAQ"
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
