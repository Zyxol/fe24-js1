//Konsol 1 Summa
const firstNumber = 10;
const secondNumber = 20;
const result = firstNumber + secondNumber;
console.log(result);

//Konsol 2 Text
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

//Sinus Shop
//Ändra innehåll
//1. Byt texten för första hoodien från Ash till Potato.
const h3Element = document.querySelector('h3');
h3Element.innerText = "Potato";

//2. Byt text för  Home till Start
const aElement = document.querySelector('a');
aElement.innerText = "Start";

//3. Byt text för Contact till Mail Us.
const aElement2 = document.querySelectorAll('a')[2];
aElement2.innerText = "Mail Us";

//4. Byt ut texten i paragrafen under Fire-hoodien.
const pElement = document.querySelectorAll('p')[1];
pElement.innerText = "This hoodie is on fire!";

//5. Byt ut adressen i footern.
const footerElement = document.querySelector('footer section article p');
footerElement.innerText = "123 Potato Street, 123 45, Potato City";

//6. Ändra text på samtliga knappar till add to cart.
const buttonElements = document.querySelectorAll('button');
buttonElements.forEach(button => {
    button.innerText = "Add to cart";
});

//7. Ändra HTML-innehållet i nav till en länk med texten HOME
const navElement = document.querySelector('nav');
navElement.innerHTML = '<a href="#">HOME</a>';

//8. Byt ut allt HTML-innehåll i tredje articeln till en img med nick cage.
const articleElement = document.querySelectorAll('article')[2];
//articleElement.innerHTML = '<img src="https://cdn.mos.cms.futurecdn.net/KG7kYHyteTset4EW6MqxV-650-80.jpg">';

//Ändra attribut
//1. Byt ut bilden på första hoodien till en place-kitten bild. 
const imgElement = document.querySelector('figure img');
imgElement.src = "https://placedog.net/500";

//2. Byt ut bilden på andra hoodien till hoodie-forest (finns i img-mappen)
const imgElement2 = document.querySelectorAll('figure img')[1];
imgElement2.src = "img/hoodie-forest.png";

//Ändra CSS-stil
//1. Byt bakgrundsfärg på första knappen.
const buttonElement = document.querySelector('button');
buttonElement.style.backgroundColor = "red";

//2. Byt bakgrundsfärg på tredje article av produkterna.
const articleElement2 = document.querySelectorAll('article')[2];
articleElement2.style.backgroundColor = "blue";

//3. Byt text-färg på samtliga paragrafer.
const pElements = document.querySelectorAll('p');
pElements.forEach(p => {
    p.style.color = "green";
});

//4. Lägg till klassen active på menyalternativet home.
const aElement3 = document.querySelector('a');
aElement3.classList.add('active');

//5. Ta bort klassen logo på logotypen.
const imgElement3 = document.querySelector('header img');
imgElement3.classList.remove('logo');

//6. Ändra bredden på alla img i articles till 50%
const imgElements = document.querySelectorAll('article img');
imgElements.forEach(img => {
    img.style.width = "50%";
});

//7. Skriv stilregler i CSS-filen för en klass som ger en border som är solid 2px bred och gul. Lägg till klassen på alla p-element.
const pElements2 = document.querySelectorAll('p');
pElements2.forEach(p => {
    p.classList.add('border-2px');
});

//8. Ändra fonten för alla element i footern till Times New Roman. 
const footerElements = document.querySelectorAll('footer *');
footerElements.forEach(footerElement => {
    footerElement.style.fontFamily = "Times New Roman";
});