function populateCards() {
  console.log('jek');
  // Array of data for each list item
  const plants = [
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Gurka',
      description: 'A tropical plant that thrives in bright, indirect light.',
      tags: ['Blommor', 'Ätbart', 'Grönska'],
      author: {
        name: 'Jane Doe',
        avatar: 'https://avatar.iran.liara.run/public/1',
        date: '2024-12-18',
      },
    },
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Tomat',
      description: 'Low-maintenance plant perfect for low light conditions.',
      tags: ['Solälskande', 'Lättodlat', 'Ätbart'],
      author: {
        name: 'John Smith',
        avatar: 'https://avatar.iran.liara.run/public/2',
        date: '2024-12-17',
      },
    },
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Pelargon',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Dekorativ', 'Färgstark', 'Tålig', 'Blommor'],
      author: {
        name: 'Alice Brown',
        avatar: 'https://avatar.iran.liara.run/public/3',
        date: '2024-12-16',
      },
    },
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Basilika',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Kryddor', 'Doftande', 'Solälskande'],
      author: {
        name: 'Alice Brown',
        avatar: 'https://avatar.iran.liara.run/public/4',
        date: '2024-12-16',
      },
    },
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Sallad',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Snabbväxande', 'Ätbart', 'Grönska'],
      author: {
        name: 'Alice Brown',
        avatar: 'https://avatar.iran.liara.run/public/5',
        date: '2024-12-16',
      },
    },
    {
      image: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Ormbunke',
      description: 'A popular houseplant known for its large, violin-shaped leaves.',
      tags: ['Luftfuktande', 'Grönska', 'Dekorativ'],
      author: {
        name: 'Alice Brown',
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
      figure.appendChild(image);

      // Title
      const title = document.createElement('h3');
      title.textContent = plant.title;

      // Description
      const description = document.createElement('p');
      description.textContent = plant.description;

      // Tags
      const tags = document.createElement('div');
      tags.classList.add('tags');
      tags.innerHTML = plant.tags.map((tag) => `<span class="tag" data-tag="${tag}">${tag}</span>`).join(' ');

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
