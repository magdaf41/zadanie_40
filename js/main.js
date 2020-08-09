document.querySelector('button').onclick = function () {
    let imie = document.getElementById("myName");
    console.log(imie.value);
    let paragraphName = document.querySelector('#name');
    paragraphName.textContent = imie.value;

    let nazwisko = document.getElementById("mySurname");
    console.log(nazwisko.value);
    let paragraphSurname = document.querySelector('#surname');
    paragraphSurname.textContent = nazwisko.value;

    let telefon = document.getElementById("myPhone");
    console.log(telefon.value);
    let paragraphPhone = document.querySelector('#phone');
    paragraphPhone.textContent = telefon.value;

}
