const allButtons = document.querySelectorAll('.menu__item');
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");
const mainContainer = document.querySelector(".container-background");
const baseField = document.createElement("div");

function goToStart () {
    mainContainer.appendChild(mainScreen);
    baseField.innerHTML = '';
    baseField.remove();
}

baseField.classList.add("table__wrap");

const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));

function startGame() {

    const currentLevel = document.querySelector(".checked").getAttribute("id");
    let numberOfCards;

    mainScreen.remove();
    mainContainer.appendChild(baseField);

    let card = () => {
        function createCard() {
            const newCard = document.createElement("div");
            const flipCardBack = document.createElement("img");
            const imgCardBack = document.createElement("img");
            flipCardBack.src = "images/game_over.png";
            imgCardBack.src = "images/Inverted_Card.png";
            newCard.classList.add("table__card");
            imgCardBack.classList.add("card__back-face");
            flipCardBack.classList.add("card__front-face");
            baseField.appendChild(newCard);
            newCard.appendChild(flipCardBack);
            newCard.appendChild(imgCardBack);
        }

        createCard();
    };

    function createField(level) {
        switch (level) {
            case "simple-level":
                for(let i = 0; i < 3 ; i++) {
                    card();
                }
                numberOfCards =3;
                break;
            case "middle-level":
                for(let i = 0; i < 6 ; i++) {
                    card();
                }
                numberOfCards = 6;
                break;
            case "hard-level":
                for(let i = 0; i < 9 ; i++) {
                    card();
                }
                numberOfCards = 9;
                break;
        }


        const cards = document.querySelectorAll('.table__card');

        let randomCard = Math.floor(Math.random() * numberOfCards);
        console.log(randomCard);
        for (let i = 0; i < numberOfCards; i++ ) {
            if (i === randomCard) { cards[i].firstElementChild.src = "images/bug.png" }
        }

        function flipCard() {
            this.classList.toggle('flip');
            cards.forEach((item) => item.addEventListener("click", goToStart));
        }

        cards.forEach(card => card.addEventListener('click', flipCard));

    }

    createField(currentLevel);

}

startButton.addEventListener("click", startGame);