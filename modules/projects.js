const projects = [
  {
    title: "Animated Gaming Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores unde, ipsum vero ea repellendus incidunt voluptatem ab iste at rem officiis explicabo, est magni. Eligendi, velit nisi. Esse, nobis enim?",
    videoSrc: "videos/galaxy.mp4",
    websiteUrl: "#"
  },
  {
    title: "Modern Portfolio",
    description: "Un portafolio personal moderno, con animaciones suaves y diseño responsive.",
    videoSrc: "videos/glob.mp4",
    websiteUrl: "https://example.com"
  },
  {
    title: "Modern Portfolio",
    description: "Un portafolio personal moderno, con animaciones suaves y diseño responsive.",
    videoSrc: "videos/galaxy.mp4",
    websiteUrl: "https://example.com"
  },
  {
    title: "Modern Portfolio",
    description: "Un portafolio personal moderno, con animaciones suaves y diseño responsive.",
    videoSrc: "videos/galaxy.mp4",
    websiteUrl: "https://example.com"
  },
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.position = 'relative';

  const hoverSign = document.createElement('div');
  hoverSign.className = 'hover-sign';

  const videoBox = document.createElement('div');
  videoBox.className = 'project-vidbox';

  // Configuracion de videos
  const video = document.createElement('video');
  video.src = project.videoSrc;
  video.muted = true;
  video.loop = true;
  video.loading = "lazy";

  // visualizador de mano
  video.addEventListener('mouseenter', () => {
    video.play();
    hoverSign.classList.add('active'); // Ocultar dedito
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  videoBox.appendChild(video);

  // Mostrar informacion
  const info = document.createElement('div');
  info.className = 'project-info';

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

  // 🧩 Ensamblar todo
  card.appendChild(hoverSign);   // el dedito arriba de todo
  card.appendChild(videoBox);    // el video
  card.appendChild(info);        // el texto
  container.appendChild(card);
});
