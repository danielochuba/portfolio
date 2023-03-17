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
  image: './img/img_placeholder.png',
  technologies: [
    'css', 'html', 'bootstrap', 'Ruby',
  ],
  liveLink: '#',
  sourceLink: '#',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/projects/todo_list.png',
},

{
  name: 'To-Do List',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",

  featuredImage: '',
  technologies: ['html', 'bootstrap', 'Ruby'],
  liveLink: 'https://danielochuba.github.io/To-Do-Structure/dist/index.html',
  sourceLink: 'https://github.com/danielochuba/To-Do-Structure',
  popUpDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  popUpImage: './img/projects/todo_list.png',
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
const firstCard = document.querySelector('.card-1');

firstCard.innerHTML += `
      <img src="${projectDetails[0].image}" class="img-3" alt="first placeholder">
      <div class="tags">
              <div class="flap-1">
                  <h2 class="Title-post-1">${projectDetails[0].name}</h2>
                  <p class="Supporting-text-1">${projectDetails[0].description}</p>
              </div>
              <div >
                  <ul class="tag-link-1">
                      <li class="tag "><a>${projectDetails[0].technologies[0]}</a></li>
                      <li class="tag "><a>${projectDetails[0].technologies[1]}</a></li>
                      <li class="tag "><a>${projectDetails[0].technologies[2]}</a></li>
                      <li class="tag "><a>${projectDetails[0].technologies[3]}</a></li>
                  </ul>
              </div>
              <button class="see-project-1 open-project-button-2 project-btn" id="project1"  href="">See project</button>
        </div>
     `;
const allCards = document.querySelector('.card-sec');

allCards.innerHTML += `
 <div class="card-2 card card-sec-1 card-sec-m-1">                           
 <h2 class="Title-post mob"></h2>
 <h2 class="Title-post desk">Todo List App</h2>
 <p class="Supporting-text">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="tags deskoff">
 <div>
     <ul class="tag-link ">
         <li class="tag "><a href="https://www.html.org">html</a></li>
         <li class="tag "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag "><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>
 <span class="see-project see-project-vis project-btn" id="project2"><a >See project</a></span>
</div>
</div>              
<div class="card-body"></div>
<div class="card-3 card card-sec-2 card-sec-m-2 card-fill">
 <h2 class="Title-post mob"></h2>
 <h2 class="Title-post desk">Website Protfolio </h2>
 <p class="Supporting-text">ugt</p>

<div class="tags">
 <div >
     <ul class="tag-link">
         <li class="tag "><a href="https://www.html.org">html</a></li>
         <li class="tag "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag "><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>
 <span class="see-project project-btn" id="project3"<a >See project</a></span>
</div>
</div>
<div class="card-4 card card-sec-3 card-fill">

 <h2 class="Title-post mob">Profesional Art Printing Data</h2>
 <h2 class="Title-post desk">Data Dashboard Healthcare</h2>
 <p class="Supporting-text">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="tags">
 <div>
     <ul class="tag-link">
         <li class="tag "><a href="https://www.html.org">html</a></li>
         <li class="tag "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag "><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>

 <span class="see-project project-btn" id="project4" <a >See project</a></span>
</div>
</div>
<div class="card-5 card card-sec-4 card-fill">

 <p class="Title-post">Profesional Art Printing Data</p>

 <p class="Supporting-text">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="tags">
 <div >
     <ul class="tag-link">
         <li class="tag  "><a href="https://www.html.org">html</a></li>
         <li class="tag "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag "><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>
 <span class="see-project project-btn" id="project5"<a>See project</a></span>
</div>
</div>
<div class="card-6 card card-sec-5 card-fill">

 <h2 class="Title-post mob">Profesional Art Printing Data</h2>
 <h2 class="Title-post desk">Data Dashboard Healthcare</h2>
 <p class="Supporting-text">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="tags">
 <div>
     <ul class="tag-link">
         <li class="tag "><a href="https://www.html.org">html</a></li>
         <li class="tag  "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag"><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>
 <span class="see-project project-btn" id="project6"<a>See project</a></span>
</div>
</div>
<div class="card-7 card card-sec-6 card-fill">

 <h2 class="Title-post mob">Profesional Art Printing Data</h2>
 <h2 class="Title-post desk">Website Protfolio </h2>
 <p class="Supporting-text">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>

<div class="tags">
 <div>
     <ul  class="tag-link">
         <li class="tag "><a href="https://www.html.org">html</a></li>
         <li class="tag "><a href="https://getbootstrap.com/">bootstrap</a></li>
         <li class="tag "><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
     </ul>
 </div>
 <span class="see-project project-btn" id="project7"<a>See project</a></span>
</div>

</div>
 `;

const projectBtns = document.querySelectorAll('.project-btn');
const popup = document.getElementById('popup');
const projectName = document.getElementById('title');
const projectDescription = document.getElementById('project-description');
const popupImage = document.querySelector('.popup-image');

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
    if (projectId === 1) {
      document.getElementById('technologies').innerHTML += `
    <li><button>css</button></li>
    <li><button>html</button></li>
    <li><button>bootstrap</button></li>
    <li><button>Ruby on rails</button></li>
    `;
    }
    projectName.innerText = project.name;
    projectDescription.innerText = project.description;
    popupImage.setAttribute('src', project.popUpImage);
    body1.style.overflow = 'hidden';
  });
});

function showModal (num) {

}

