
(function () {
  const author = document.body.dataset.author || 'youssef';

  const projects = [];

for (let i = 0; i < 18; i++) {
  projects.push({
    id: i + 1,
    title: `project ${i + 1}`,
    subtitle: "youssef"
  });
}
  const css = `
    :root{
      --bar-bg:#e38ce3;
      --card-bg: #f2f2f5;
      --accent: #5b2bb8;
      --card-shadow: rgba(91,43,184,0.18);
      font-family: 'Poppins', 'Segoe UI', Tahoma, system-ui, -apple-system, 'Helvetica Neue', Arial;
    }
    html,body{height:100%;margin:0}
    body{
      display:flex;
      align-items:center;
      justify-content:center;
      background:#0f0f10;
      padding:20px;
      overflow:hidden
    }
    .bar{
      width:100%;
      max-width:1100px;
      background:var(--bar-bg);
      padding:18px 20px;
      border-radius:6px;
      box-sizing:border-box;
      box-shadow: 0 6px 14px rgba(0,0,0,0.25), inset 0 -6px 14px rgba(255,255,255,0.03);
    }
    .bar__title{
      text-align:center;
      color:#0056b3;
      font-weight:700;
      margin:0 0 14px;
      font-size:28px;
      text-transform:lowercase;
      letter-spacing:1px;
    }
    .grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(120px,1fr));
      gap:14px;
      align-items:start;
    }
    .card{
      background:var(--card-bg);
      padding:28px;
      border-radius:6px;
      text-align:center;
      box-shadow:0 8px 0 var(--card-shadow), 0 10px 24px rgba(0,0,0,0.25);
      cursor:pointer;
      transition:transform .18s ease, box-shadow .18s ease;
      user-select:none;
    }
    .card:hover{ transform:translateY(-6px) scale(1.02); box-shadow: 0 14px 34px rgba(0,0,0,0.35); }
    .card__title{ 
      color:var(--accent); 
      font-weight:700; 
      margin:4px 0; 
      font-size:18px; 
      text-transform:lowercase; 
    }

    /* special styling */
    .card__sub { 
  color: var(--accent);
  font-weight: 700;
  font-size: 13px; 
  letter-spacing: 0.5px;
  margin-top: 6px;;
  opacity: 0.9; 
}

    @keyframes shine {
      0% { background-position: 0% }
      100% { background-position: 200% }
    }

    @media (min-width:1024px){
      .grid{ grid-template-columns: repeat(6, 1fr); }
    }
    @media (max-width:480px){
      .bar{ padding:12px }
      .card{ padding:12px }
    }

    .container-center{ display:flex; justify-content:center; }
  `;

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // Build markup
  const container = document.createElement('div');
  container.className = 'container-center';

  const bar = document.createElement('section');
  bar.className = 'bar';

  const title = document.createElement('h2');
  title.className = 'bar__title';
  title.textContent = 'projects';
  bar.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'grid';

  // create cards dynamically
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = p.id;

    const h = document.createElement('div');
    h.className = 'card__title';
    h.textContent = p.title;

    const s = document.createElement('div');
    s.className = 'card__sub';
    s.textContent = p.subtitle;

    card.appendChild(h);
    card.appendChild(s);

    card.addEventListener('click', () => {
      showDetail(p);
    });

    grid.appendChild(card);
  });

  bar.appendChild(grid);
  container.appendChild(bar);
  document.body.appendChild(container);

  // Simple detail popup
  function showDetail(project) {
    const existing = document.getElementById('proj-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'proj-modal';
    modal.style.position = 'fixed';
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.right = 0;
    modal.style.bottom = 0;
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.background = 'rgba(0,0,0,0.45)';
    modal.style.zIndex = 9999;

    const card = document.createElement('div');
    card.style.background = '#fff';
    card.style.borderRadius = '8px';
    card.style.padding = '18px';
    card.style.minWidth = '260px';
    card.style.textAlign = 'center';
    card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';

    const title = document.createElement('h3');
    title.textContent = project.title;
    title.style.margin = '6px 0';
    title.style.color = '#5b2bb8';

    const sub = document.createElement('p');
    sub.textContent = 'by ' + project.subtitle;
    sub.style.margin = '6px 0 12px';
    sub.style.color = '#333';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.padding = '8px 12px';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '6px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.background = '#5b2bb8';
    closeBtn.style.color = '#fff';
    closeBtn.addEventListener('click', () => modal.remove());

    card.appendChild(title);
    card.appendChild(sub);
    card.appendChild(closeBtn);
    modal.appendChild(card);
    document.body.appendChild(modal);
  }

})();