const projects = [
  {
    title: "eCommercite Project For Sena",
    description: "eCommerce website, developed with Python, Django, HTML, and basic CSS.",
    videoSrc: "videos/projects/eCommercite.mp4",
    websiteUrl: "https://github.com/David-Peralta-Rd/Ecommerce-Project-for-Work-at-Sena"
  },
  {
    title: "PortFolio v1",
    description: "First portfolio developed with pure HTML, CSS, and JavaScript.",
    videoSrc: "videos/projects/portFoliov1.mp4",
    websiteUrl: "https://github.com/David-Peralta-Rd/David-Portfolio"
  },
  {
    title: "Modern Portfolio V2",
    description: "Portfolio v2, developed with HTML, CSS and JavaScript, this portfolio uses more effects.",
    videoSrc: "videos/projects/portFoliov2.mp4",
    websiteUrl: "https://github.com/David-Peralta-Rd/my-portfolio-v2"
  },
];




const projectsPerPage = 8;
let currentPage = 1;

const container = document.getElementById('projects-container');
const pagination = document.getElementById('pagination-controls');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')
const hoverSign = document.querySelector('.hover-sign');

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});


function renderProjects(page = 1) {
  container.innerHTML = '';

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const pageProjects = projects.slice(startIndex, endIndex);

  pageProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card autoBlur';
    card.style.position = 'relative';

    const hoverSign = document.createElement('div');
    hoverSign.className = 'hover-sign';

    const videoBox = document.createElement('div');
    videoBox.className = 'project-vidbox autoBlur';

    const video = document.createElement('video');
    video.src = project.videoSrc;
    video.muted = true;
    video.loop = true;
    video.loading = "lazy";

    video.addEventListener('mouseenter', () => {
      video.play();
      hoverSign.classList.add('active');
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    videoBox.appendChild(video);

    const info = document.createElement('div');
    info.className = 'project-info fadeInRight';

    const title = document.createElement('h1');
    title.innerHTML = `<span class="gradient">${project.title}</span>`;

    const description = document.createElement('p');
    description.textContent = project.description;

    const button = document.createElement('button');
    button.innerHTML = `<i class='bx bx-plug-connect'></i> Website`;
    button.onclick = () => window.open(project.websiteUrl, '_blank');

    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(button);

    card.appendChild(hoverSign);
    card.appendChild(videoBox);
    card.appendChild(info);
    container.appendChild(card);
  });
}

function renderPagination() {
  pagination.innerHTML = '';

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = `pagination-btn ${i === currentPage ? 'active-page' : ''}`;
    btn.onclick = () => {
      currentPage = i;
      renderProjects(currentPage);
      renderPagination();
    };
    pagination.appendChild(btn);
  }
}

// Inicializar
renderProjects(currentPage);
renderPagination();
