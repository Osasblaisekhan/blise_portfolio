const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// object to store card properties
const projectCards = [

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './asset/images/mobile_Portfolio_1.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

];

function outsideClick(event, Modal) {
  if (event.target === event.currentTarget) {
    Modal();
  }
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.remove();
    window.removeEventListener('click', outsideClick);
  }
}

function openModal(project) {
  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.classList.add('modal');
  const modalcontent = document.createElement('div');
  modalcontent.classList.add('modalcontent');

  const closeButton = document.createElement('span');
  closeButton.classList.add('closebutton');
  closeButton.innerHTML = '&times';
  closeButton.addEventListener('click', () => closeModal());
  modalcontent.appendChild(closeButton);

  const madalImage = document.createElement('img');
  madalImage.classList.add('modalImage');
  madalImage.src = project.image;
  madalImage.alt = project.title;

  // madalImage.alt=project.title
  modalcontent.appendChild(madalImage);
  const modalTitle = document.createElement('h3');
  modalTitle.textContent = project.title;
  modalcontent.appendChild(modalTitle);

  const list = document.createElement('ul');
  list.id = 'modaltechnologies';
  project.technologies.forEach((tech) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = tech;
    list.appendChild(listItem);
  });
  modalcontent.appendChild(list);

  const modalDescription = document.createElement('p');
  modalDescription.textContent = project.description;
  modalcontent.appendChild(modalDescription);

  const modallink = document.createElement('div');
  modallink.classList.add('modallink');
  const githublink = document.createElement('a');
  githublink.classList.add('get_my');
  githublink.href = project.githublink;
  githublink.target = '_blank';
  githublink.textContent = 'see live';
  modallink.appendChild(githublink);

  const livelink = document.createElement('a');
  livelink.classList.add('get_my');
  livelink.href = project.livelink;
  livelink.target = '_blank';
  livelink.textContent = 'see source';
  modallink.appendChild(livelink);
  modalcontent.appendChild(modallink);
  modal.appendChild(modalcontent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

// function to create a card
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('landing_page');

  const picture = document.createElement('img');
  picture.src = project.image;
  picture.alt = project.title;
  card.appendChild(picture);

  const subPage = document.createElement('div');
  subPage.classList.add('sub_page');
  const titre = document.createElement('h3');
  titre.innerHTML = project.title;
  subPage.appendChild(titre);

  const buttonPlace = document.createElement('div');
  buttonPlace.classList.add('buttons');
  const list = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    list.appendChild(listItem);
    buttonPlace.appendChild(list);
  });
  subPage.appendChild(buttonPlace);
  const cardButton = document.createElement('button');
  cardButton.classList.add('center');
  cardButton.innerHTML = 'See Project';
  cardButton.type = 'button';
  cardButton.addEventListener('click', () => openModal(project));
  subPage.appendChild(cardButton);
  card.appendChild(subPage);
  return card;
}

// function to render project card
function renderProjectCard() {
  const projectCardsContainer = document.querySelector('.my_container_box');

  projectCards.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectCardsContainer.appendChild(projectCard);
  });
}
document.addEventListener('DOMContentLoaded', renderProjectCard);

// Function to enable my form to store data in to local storage

const form = document.getElementById('form');

if (localStorage.getItem('userFullName') && localStorage.getItem('emailAddress') && localStorage.getItem('chartArea')) {
  document.getElementById('userFullName').value = localStorage.getItem('userFullName');
  document.getElementById('emailAddress').value = localStorage.getItem('emailAddress');
  document.getElementById('cahrtArea').value = localStorage.getItem('chartArea');
}

form.addEventListener('submit', () => {
  const userFullName = document.getElementById('userFullName').value;
  const emailAddress = document.getElementById('emailAddress').value;
  const chartArea = document.getElementById('chartArea').value;

  // localStorage

  localStorage.setItem('userFullName', userFullName);
  localStorage.setItem('emailAddress', emailAddress);
  localStorage.setItem('chartArea', chartArea);
});
