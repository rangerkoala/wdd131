const pictures = [
  {
    pictureName: "wedding 1",
    type: "wedding",
    imageUrl:
    "images/wedding1.jpg"
  },
  {
    pictureName: "proposal 1",
    type: "proposal",
    imageUrl:
    "images/proposal1.jpg"
  },
  {
    pictureName: "quince 1",
    type: "quince",
    imageUrl:
    "images/quince1.jpg"
  },
  {
    pictureName: "wedding 2",
    type: "wedding",
    imageUrl:
    "images/wedding2.jpg"
  },
  {
    pictureName: "proposal 2",
    type: "proposal",
    imageUrl:
    "images/proposal2.jpg"
  },
  {
    pictureName: "quince 2",
    type: "quince",
    imageUrl:
    "images/quince2.jpg"
  },
  {
    pictureName: "wedding 3",
    type: "wedding",
    imageUrl:
    "images/wedding3.jpg"
  },
  {
    pictureName: "proposal 3",
    type: "proposal",
    imageUrl:
    "images/proposal3.jpg"
  },
  {
    pictureName: "quince 3",
    type: "quince",
    imageUrl:
    "images/quince3.jpg"
  },
  {
    pictureName: "wedding 4",
    type: "wedding",
    imageUrl:
    "images/wedding4.jpg"
  },
  {
    pictureName: "proposal 4",
    type: "proposal",
    imageUrl:
    "images/proposal4.jpg"
  },
  {
    pictureName: "quince 4",
    type: "quince",
    imageUrl:
    "images/quince4.jpg"
  },
  {
    pictureName: "wedding 5",
    type: "wedding",
    imageUrl:
    "images/wedding5.jpg"
  },
  {
    pictureName: "proposal 5",
    type: "proposal",
    imageUrl:
    "images/proposal5.jpg"
  },
  {
    pictureName: "wedding 6",
    type: "wedding",
    imageUrl:
    "images/wedding6.jpg"
  },
  {
    pictureName: "proposal 6",
    type: "proposal",
    imageUrl:
    "images/proposal6.jpg"
  },
  {
    pictureName: "wedding 7",
    type: "wedding",
    imageUrl:
    "images/wedding7.jpg"
  },
  {
    pictureName: "wedding 8",
    type: "wedding",
    imageUrl:
    "images/wedding8.jpg"
  },
] 

createPictureCard(pictures);

const allBtn = document.getElementById('all');
allBtn.addEventListener('click', () => {
    createPictureCard(pictures);
});

const weddingsBtn = document.getElementById('weddings');
weddingsBtn.addEventListener('click', () => {
    createPictureCard(pictures.filter(picture => picture.type === 'wedding'));
});

const proposalsBtn = document.getElementById('proposals');
proposalsBtn.addEventListener('click', () => {
    createPictureCard(pictures.filter(picture => picture.type === 'proposal'));
});

const quinceBtn = document.getElementById('quinceaneros');
quinceBtn.addEventListener('click', () => {
    createPictureCard(pictures.filter(picture => picture.type === 'quince'));
});

function createPictureCard(filteredPictures) {
    document.querySelector(".gallery").innerHTML = "";
    filteredPictures.forEach(picture => {
        let card = document.createElement('div');
        let img = document.createElement('img');

        img.setAttribute('src', picture.imageUrl);
        img.setAttribute('alt', `${picture.pictureName}`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}