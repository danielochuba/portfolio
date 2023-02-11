const closeButton = document.getElementById('closeButton');
const body1 = document.querySelector('body');

closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('#inPop').style.display = 'none';
  document.querySelector('#popup').style.display = 'none';
  document.getElementById('popup-content').style.display = 'none';
  body1.style.overflow = 'scroll';
});

window.addEventListener('load', (event) => {
  event.stopPropagation();
  document.querySelector('#popup').style.display = 'none';
  document.querySelector('#inPop').style.display = 'none';
  document.getElementById('popup-content').style.display = 'none';
});

const projectDetails = [{
  featured: true,
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/ImgPlaceholder.png',
  technologies: [
    'css', 'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
},

{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: '',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
},
{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: '',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
},
{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: '',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
},
{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: './img/img_placeholder_1.png',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
},
{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: '',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/desktop/popimage.png',
}];

const projectBtns = document.querySelectorAll('.project-btn');
const popup = document.getElementById('popup');
const projectName = document.getElementById('title');
const projectDescription = document.getElementById('project-description');
const popupImage = document.querySelector('.popup-image');
const techStack = document.getElementById('technologies');

projectBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelector('#inPop').style.display = 'block';
    document.querySelector('#popup').style.display = 'block';
    document.getElementById('popup-content').style.display = 'block';
    popup.style.display = 'block';
    popup.classList.remove('display-none');
    popup.classList.add('show');
    const projectId = btn.id.replace('project', '');
    const project = projectDetails[projectId - 1];
    projectName.innerText = project.name;
    projectDescription.innerText = project.description;
    popupImage.setAttribute('src', project.popUpImage);
    body1.style.overflow = 'hidden';
  });
});