const section = document.querySelector('section');
const playerLivesCount = document.querySelector("span");
let playerLives=6;

playerLivesCount.textContent=playerLives;

// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
//     cardGenerator();
//     board();
//   });
  
  //We generate the object 🧑🏻‍💻
const getData = () => [

    { imgSrc: "./Images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./Images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./Images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./Images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./Images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./Images/ledzep.jpeg", id: 6, name: "led zeppelin" },
    { imgSrc: "./Images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./Images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./Images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./Images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./Images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./Images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./Images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./Images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./Images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./Images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
    ];
  


  //Randomize
  const randomize = () => {
    const cardData=getData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
  };


  const cardGenerator = () => {
    const cardData = randomize();
    
    //Generate HTML
    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
  
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";

      //Attach the info to the cards
      face.src=item.imgSrc;
      card.setAttribute('name', item.name);
      //Attach the cards
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
      });
    }); 
  };

  //Check Cards

  const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard=document.querySelectorAll('.toggleCard')
    console.log(flippedCards);
    //Logic
    if (flippedCards.length === 1) {
      blockSingleFlipped(flippedCards);
    }else if(flippedCards.length === 2) {
      if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
        console.log("match");
        flippedCards.forEach(card => {
          card.classList.remove("flipped");
          card.style.pointerEvents='none';
        })
      } else {
        console.log("wrong");
        flippedCards.forEach(card => {
          card.style.pointerEvents='all'
          card.classList.remove('flipped');
          setTimeout(() => card.classList.remove('toggleCard'), 750);
        });
        playerLives--;
        playerLivesCount.textContent=playerLives;
        if (playerLives === 0) {
          restart("👎 Try again");
        }
      }
    }

    if (toggleCard.length === 16){
      restart("👍 You won");
    }

  };

  const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents="none";
    cardData.forEach((item, index) => {
      cards[index].classList.remove('toggleCard');
      //Randomize
      setTimeout(() => {
        cards[index].style.pointerEvents="all"
        faces[index].src=item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents="all";
      }, 1000)
    });
    playerLives=6;
    playerLives.textContent=playerLives;
    setTimeout(() => window.alert(text), 100);
  };

  const blockSingleFlipped = (flippedCard) => {
    flippedCard.forEach(card => {
    card.style.pointerEvents='none';
    })
  };


  cardGenerator();
  
  //   //We generate the cards ♣️
  //   cardData.forEach((item, index) => {
  
  //     card.setAttribute("id", item.id);
  //     card.setAttribute("name", item.name);
  
  //     face.src = item.imgSrc; 
  //     card.setAttribute('name', item.name );
  
  //     section.appendChild(card);
  //     card.appendChild(face);
  //     card.appendChild(back);
  
  //     card.addEventListener("click", (e) => {
  //       console.log(e);
  //       checkCards(e);
  //       //Run our flip animation
  //       face.classList.toggle("toggleCard");
  //       card.classList.toggle("toggleCard");
  //     });
  //   });
  
  //   //
  // };

  // const checkCards = (e) => {
  //   const clickedCard = e.target;
  //   clickedCard.classList.add('flipped');
  //   const flippedCards = document.querySelectorAll('.flipped');
    
  //   if(flippedCards.length===2){
  //       if(
  //           flippedCards[0].getAttribute('name') === 
  //           flippedCards[1].getAttribute('name')
  //       ){
  //           console.log("match");
  //       } else {
  //           console.log("wrong");
  //       }
  //   }
  // }

  // const board = () => {
  //   console.log("i will fight you");
  // };
  
  // //Toggle Cards
  // // document.addEventListener("click", (event) => {
  // //   console.log(event);
  // //   if(event.target === '')
  // // });
  
