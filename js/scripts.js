function populateCards() {
  // Array of data for each list item
  const plants = [
    {
      image:
        'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGN1Y3VtYmVyfGVufDB8fDB8fHww',
      title: 'Gurka',
      description: 'A tropical plant that thrives in bright, indirect light.',
      tags: ['Blommor', 'Ätbart', 'Grönska'],
      author: {
        name: 'Coolio',
        avatar: 'https://avatar.iran.liara.run/public/1',
        date: '2024-04-01',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1722960803957-0644aafcf97e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvbWF0ZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Tomat',
      description: 'Low-maintenance plant perfect for low light conditions.',
      tags: ['Solälskande', 'Lättodlat', 'Ätbart'],
      author: {
        name: 'Anna Odlare',
        avatar: 'https://avatar.iran.liara.run/public/2',
        date: '2024-12-05',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1729257423933-63f12279e7da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VyYW5pdW18ZW58MHx8MHx8fDA%3D',
      title: 'Pelargon',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Dekorativ', 'Färgstark', 'Tålig', 'Blommor'],
      author: {
        name: 'Blomsterkalle',
        avatar: 'https://avatar.iran.liara.run/public/3',
        date: '2024-12-03',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1691885784056-5eaf7e5199df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEJhc2lsfGVufDB8fDB8fHww',
      title: 'Basilika',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Kryddor', 'Doftande', 'Solälskande'],
      author: {
        name: 'Krydd-malin',
        avatar: 'https://avatar.iran.liara.run/public/4',
        date: '2024-12-16',
      },
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1702403157932-9a93ac2404d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGljZWJlcmclMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Sallad',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Snabbväxande', 'Ätbart', 'Grönska'],
      author: {
        name: 'Grönis',
        avatar: 'https://avatar.iran.liara.run/public/5',
        date: '2024-12-16',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1707007288081-931c5291429f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZlcm58ZW58MHx8MHx8fDA%3D',
      title: 'Ormbunke',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Luftfuktande', 'Grönska', 'Dekorativ'],
      author: {
        name: 'Naturvännen',
        avatar: 'https://avatar.iran.liara.run/public/6',
        date: '2024-12-16',
      },
    },
  ];

  // Select the <ul> with the class "plant-cards"
  const ul = document.querySelector('.plant-cards');

  // Function to create and append plant cards
  const appendPlantCards = () => {
    plants.forEach((plant) => {
      const li = document.createElement('li');
      li.classList.add('plant-card'); // Add a class to the <li>

      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = plant.image;
      image.style.width = '200px';
      image.alt = plant.description.replace;
      figure.appendChild(image);

      // Title
      const title = document.createElement('h4');
      title.textContent = plant.title;

      // Description
      const description = document.createElement('p');
      description.textContent = plant.description;

      // Tags
      const tags = document.createElement('div');
      tags.classList.add('tags');
      tags.innerHTML = plant.tags
        .map((tag) => `<span class="tag" data-tag="${tag}">${tag}</span>`)
        .join(' ');

      // Author Section
      const author = document.createElement('div');
      author.classList.add('author');

      const avatar = document.createElement('img');
      avatar.src = plant.author.avatar;
      avatar.alt = `${plant.author.name}'s avatar`;

      const authorInfo = document.createElement('div');
      authorInfo.classList.add('author-info');

      const authorName = document.createElement('span');
      authorName.textContent = plant.author.name;
      authorName.classList.add('author-name');

      const authorDate = document.createElement('span');
      authorDate.textContent = ` ${plant.author.date}`;
      authorDate.classList.add('author-date');

      authorInfo.appendChild(authorName);
      authorInfo.appendChild(authorDate);
      author.appendChild(avatar);
      author.appendChild(authorInfo);

      // Append all elements to the <li>
      li.appendChild(figure);
      li.appendChild(tags);
      li.appendChild(title);
      li.appendChild(description);
      li.appendChild(author);

      // Append the <li> to the <ul>
      ul.appendChild(li);
    });
  };

  // Call the function twice to duplicate the <li> elements
  appendPlantCards();
  appendPlantCards();
}

populateCards();

function inlineAllSVGImages() {
  // Select all img elements on the page
  const imgElements = document.querySelectorAll('img');

  imgElements.forEach((img) => {
    // Check if the img src is an SVG
    const imgSrc = img.src;
    if (imgSrc && imgSrc.endsWith('.svg')) {
      // Fetch the SVG content
      fetch(imgSrc)
        .then((response) => response.text()) // Convert response to text
        .then((svgText) => {
          // Create a div to temporarily hold the SVG content
          const div = document.createElement('div');
          div.innerHTML = svgText;

          // Get the SVG element from the parsed text
          const svgElement = div.querySelector('svg');

          // Replace the img element with the inlined SVG
          img.replaceWith(svgElement);
        })
        .catch((error) => {
          console.error('Error inlining SVG image:', error);
        });
    }
  });
}

// Call the function to inline all SVG images
inlineAllSVGImages();

// Function to adjust main's padding-top based on header height
function adjustMainPadding() {
  const mainHeader = document.querySelector('.main-header');
  const main = document.querySelector('main');
  const headerHeight = mainHeader.offsetHeight; // Get height of the fixed header
  main.style.paddingTop = `${headerHeight}px`; // Set padding-top on main
}

// Run the function after the DOM is fully loaded
window.addEventListener('load', adjustMainPadding);

// Also run it on window resize to handle dynamic changes
window.addEventListener('resize', adjustMainPadding);
