'use strict';

class slides {
  constructor(el) {
    this.el = el;
    this.SlidesOptions = ['previous','play', 'next'];
    this.SlidesData = [
      {
        'id': '1',
        'src': 'img/257531.jpg',
      },
      {
        'id': '2',
        'src': 'img/316708.webp',
      },
      {
        'id': '3',
        'src': 'img/elephant-1822636_1280.jpg',
      },
      {
        'id': '4',
        'src': 'img/wallpaper-picture-sunrise-sea (7).jpeg',
      },
      {
        'id': '5',
        'src': 'img/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg',
      }

    ];
    this.SlidesInView = [1, 2, 3, 4, 5];
    this.SlidesContainer;
    this.SlidesPlayState;
  }

  mounted() {
    this.setupSlides();
  }

  setupSlides() {
    const container = document.createElement('div');
    const controls = document.createElement('div');

   
    this.el.append(container, controls);
    container.className = 'Slides-container';
    controls.className = 'Slides-controls';

   
    this.SlidesData.forEach((item, index) => {
      const SlidesItem = item.src ? document.createElement('img') : document.createElement('div');

      container.append(SlidesItem);
 
      SlidesItem.className = `Slides-item Slides-item-${index + 1}`;
      SlidesItem.src = item.src;
      SlidesItem.setAttribute('loading', 'lazy');
  
      SlidesItem.setAttribute('data-index', `${index + 1}`);
    });

    this.SlidesOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      axSpan.innerText = option;
      axSpan.className = 'ax-hidden';
      btn.append(axSpan);

    
      btn.className = `Slides-control Slides-control-${option}`;
      btn.setAttribute('data-name', option);

    
      controls.append(btn);
    });

   
    this.setControls([...controls.children]);

    this.SlidesContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();

       
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();
    if (control === 'play') return this.play();

    return;
  }

  previous() {
    
    this.SlidesData.unshift(this.SlidesData.pop());

    
    this.SlidesInView.push(this.SlidesInView.shift());

   
    this.SlidesInView.forEach((item, index) => {
      this.SlidesContainer.children[index].className = `Slides-item Slides-item-${item}`;
    });

    
    this.SlidesData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.Slides-item-${index + 1}`).src = data.src;
    });
  }

  next() {
    
    this.SlidesData.push(this.SlidesData.shift());

   
    this.SlidesInView.unshift(this.SlidesInView.pop());

    
    this.SlidesInView.forEach((item, index) => {
      this.SlidesContainer.children[index].className = `Slides-item Slides-item-${item}`;
    });

    
    this.SlidesData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.Slides-item-${index + 1}`).src = data.src;
    });
  }



  play() {
    const playBtn = document.querySelector('.Slides-control-play');
    const startPlaying = () => this.next();

    if (playBtn.classList.contains('playing')) {
     
      playBtn.classList.remove('playing');

      
      clearInterval(this.SlidesPlayState); 
      this.SlidesPlayState = null; 
    } else {
     
      playBtn.classList.add('playing');

     
      this.next();

     
      this.SlidesPlayState = setInterval(startPlaying, 1000);
    };
  }

}


const el = document.querySelector('.Slides');

const exampleSlides = new slides(el);

exampleSlides.mounted();
