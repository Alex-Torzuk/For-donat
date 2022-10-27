// 1. Створіть сайт по виводу карточок героїв зоряних війн.
//     - HTML, CSS, JS +
//     - Забрати дані з ресурсу та зберегти окремо +
//     - Вивести дані в консоль підключивши файл до загального проекта
//     - Cтилізувати картачки, вигадати стилі і в ці карточки додати файлику swapi



// 2. Дані візьміть тут та збережіть окремим файлом https://swapi.dev/
// 3. Стилізуйте карточки використовуючи css.
// 4. HTML розмітка має створюватись через js.

console.dir(swapi.results)

swapi.results.forEach(function (el, ind) {
    document.getElementById('star_container')
    .innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    console.dir(el)
})