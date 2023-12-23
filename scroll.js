document.addEventListener('DOMContentLoaded', e => {
  document.onscroll = se => {
    const glowers = document.querySelectorAll('.container.fifth .block > div');
    const h = document.documentElement.clientHeight;
    for(let i of glowers) {
      const y = i.getBoundingClientRect().y;
      i.classList.toggle('glow', y < h*0.7 && y > 0)
    }
  }
})
