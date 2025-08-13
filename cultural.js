const culturalTourData = {
  image: "cultural-heritage.jpg",  // apni cultural image ka path
  heading: "Captivating Cultural Tours",
  subheading: "Discover the Soul of Traditions",
  paragraphs: [
    "Explore ancient cities, magnificent landmarks, and colorful marketplaces that echo with stories of the past.",
    "Our tours immerse you in art, music, cuisine, and customs — creating memories steeped in history and culture."
  ]
};

function renderCulturalTour() {
  const container = document.getElementById("cultural-tour-container");
  container.innerHTML = `
  <div class="cultural-tour-section">
    <div class="cultural-tour-content">
      <h2 class="cultural-heading-3d">${culturalTourData.heading}</h2>
      <h4>${culturalTourData.subheading}</h4>
      ${culturalTourData.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="cultural-tour-image">
      <img src="dance.jpg" alt="Cultural Tour" />
    </div>
  </div>
  `;
}

renderCulturalTour();
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("cultural-intro-section").innerHTML = `
    <div class="cultural-intro-section">
      <div class="cultural-image">
        <img src="bad.jpg" alt="Cultural Heritage Festival">
      </div>
      <div class="cultural-text">
        <h2 class="cultural-heading-3d">Badshahi Mosque-Pakistan</h2>
        <p>Immerse yourself in the rich traditions, vibrant colors, and timeless stories of the Karakoram. Experience cultural performances, artisan crafts, and flavors passed down through generations.</p>
        <ul class="cultural-points">
          <li><i class="fas fa-calendar-alt"></i> Best time: April to September</li>
          <li><i class="fas fa-money-bill-wave"></i> Starting from $199 per person</li>
          <li><i class="fas fa-drum"></i> Live cultural music & dance performances</li>
          <li><i class="fas fa-utensils"></i> Traditional Karakoram cuisine tasting</li>
        </ul>
      </div>
    </div>
  `;
});
const culturalAccommodations = [
  {
    image: "luxu hotel.jpg",
    title: "Heritage Palace Hotel",
    description: "Stay in a beautifully preserved palace that reflects the art, architecture, and traditions of the past.",
    price: "$220 / night",
    timing: "Check-in: 2 PM | Check-out: 11 AM",
    facilities: ["Traditional Cuisine", "Cultural Performances", "Historical Tours", "Free WiFi"]
  },
  {
    image: "lodge.jpg",
    title: "Folk Village Lodge",
    description: "Immerse yourself in village life with authentic crafts, music, and traditional meals.",
    price: "$160 / night",
    timing: "Check-in: 1 PM | Check-out: 10 AM",
    facilities: ["Craft Workshops", "Folk Dance Shows", "Local Guides", "Breakfast Included"]
  },
  {
    image: "city.jpg",
    title: "City Cultural Hotel",
    description: "Perfect for exploring museums, theaters, and historic neighborhoods in the city.",
    price: "$280 / night",
    timing: "Check-in: 3 PM | Check-out: 12 PM",
    facilities: ["Art Exhibitions", "Cultural Tours", "Music Nights", "Airport Pickup"]
  },
  {
    image: "side inn.jpg",
    title: "Nature & Culture Inn",
    description: "Located near scenic landscapes with easy access to cultural landmarks and heritage sites.",
    price: "$140 / night",
    timing: "Check-in: 4 PM | Check-out: 11 AM",
    facilities: ["Guided Nature & Culture Walks", "Local Cuisine", "Photography Spots", "Pet Friendly"]
  }
];

const culturalAccSection = document.getElementById("cultural-accommodation-section");

let culturalAccHTML = `<h1 class="cultural-heading-3d">Cultural Accommodations</h1>
<div class="cultural-accommodation-container">`;

culturalAccommodations.forEach(acc => {
  culturalAccHTML += `
    <div class="cultural-accommodation-card">
      <i class="fa-solid fa-heart wishlist-icon"></i>
      <img src="${acc.image}" alt="${acc.title}">
      <div class="cultural-accommodation-info">
        <h3>${acc.title}</h3>
        <p>${acc.description}</p>
        <div class="cultural-accommodation-details">
          <span><strong>Price:</strong> ${acc.price}</span>
          <span><strong>Timing:</strong> ${acc.timing}</span>
          <span><strong>Facilities:</strong> ${acc.facilities.join(", ")}</span>
        </div>
      </div>
    </div>
  `;
});

culturalAccHTML += `</div>`;
culturalAccSection.innerHTML = culturalAccHTML;
const culturalTransportationData = [
    {
        name: "Heritage Rickshaw Ride",
        image: "ric.jpg",
        description: "Traditional cycle rickshaw ride through old city bazaars and heritage streets.",
        price: "$5 per person",
        availability: "9:00 AM - 7:00 PM"
    },
    {
        name: "Vintage Tram Tour",
        image: "tage.jpg",
        description: "Ride a restored vintage tram through historic districts with live commentary.",
        price: "$8 per person",
        availability: "10:00 AM - 6:00 PM"
    },
    {
        name: "Cultural Bus Pass",
        image: "https://images.unsplash.com/photo-1606760724273-e1634c06c751?auto=format&fit=crop&w=800&q=80",
        description: "Unlimited bus rides to museums, theaters, and cultural hotspots.",
        price: "$12 per day",
        availability: "6:00 AM - 10:00 PM"
    },
    {
        name: "Horse Carriage Experience",
        image: "horse.jpg",
        description: "Elegant horse-drawn carriage ride past monuments and royal gardens.",
        price: "$15 per ride",
        availability: "4:00 PM - 9:00 PM"
    }
];

// Inject Cultural Transportation Section
const culturalTransportContainer = document.getElementById("cultural-transportation-container");

culturalTransportContainer.innerHTML = ""; // clear first

let cultHeading = document.createElement("h2");
cultHeading.classList.add("cultural-transport-heading");
cultHeading.textContent = "Cultural Transportation Options";
culturalTransportContainer.appendChild(cultHeading);

let cultGrid = document.createElement("div");
cultGrid.classList.add("cultural-transport-container");

culturalTransportationData.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("cultural-transport-card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.onerror = function() {
        this.onerror = null;
        this.src = "https://picsum.photos/800/600?random=" + Math.floor(Math.random()*1000);
    };

    card.innerHTML = `
        <span class="wishlist-icon"><i class="fas fa-heart"></i></span>
        <div class="cultural-transport-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price"><strong>Price:</strong> ${item.price}</p>
            <p><strong>Availability:</strong> ${item.availability}</p>
        </div>
    `;

    card.insertBefore(img, card.firstChild);

    cultGrid.appendChild(card);
});

culturalTransportContainer.appendChild(cultGrid);
const culturalActivities = [
  {
    id: 1,
    title: "Traditional Dance Performance",
    description: "Experience the vibrant energy of folk dances passed down through generations.",
    image: "dance.jpg",
    duration: "2 hours",
    price: "$25",
    location: "Local Cultural Hall",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Historic City Walking Tour",
    description: "Discover ancient architecture, hidden alleys, and the rich history of the city.",
    image: "city.jpg",
    duration: "4 hours",
    price: "$35",
    location: "Old Town",
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Crafts & Pottery Workshop",
    description: "Learn the art of traditional pottery-making from skilled local artisans.",
    image: "cult.jpg",
    duration: "3 hours",
    price: "$30",
    location: "Cultural Art Center",
    difficulty: "Moderate"
  },
  {
    id: 4,
    title: "Local Cuisine Cooking Class",
    description: "Cook and taste authentic dishes with guidance from expert chefs.",
    image: "cook.jpg",
    duration: "2.5 hours",
    price: "$40",
    location: "Community Kitchen",
    difficulty: "Easy"
  }
];

function renderCulturalActivities() {
  const container = document.getElementById('cultural-activity-container');
  container.innerHTML = '';

  culturalActivities.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'cultural-activity-card';

    card.innerHTML = `
      <img src="${activity.image}" alt="${activity.title}" class="cultural-activity-image" />
      <div class="cultural-activity-content">
        <h3 class="cultural-activity-title">${activity.title}</h3>
        <p class="cultural-activity-description">${activity.description}</p>
        <div class="cultural-activity-info">
          <div><span class="cultural-label">Duration:</span> ${activity.duration}</div>
          <div><span class="cultural-label">Price:</span> ${activity.price}</div>
          <div><span class="cultural-label">Location:</span> ${activity.location}</div>
          <div><span class="cultural-label">Difficulty:</span> ${activity.difficulty}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderCulturalActivities();
const galleryItems = [
  {
    type: "image",
    src: "walk.jpg",
    alt: "Mountain View",
  },
  {
    type: "video",
    src: "855633-hd_1920_1080_25fps.mp4",
  },
  {
    type: "image",
    src: "ric.jpg",
    alt: "Forest Path",
  },
  {
    type: "video",
    src: "856710-hd_1920_1080_30fps.mp4",
  },
  {
    type: "image",
    src: "nat.jpg",
    alt: "Lake Sunset"
  },
  // Added 3 mixed new items:
  {
    type: "image",
    src: "miti.jpg",
    alt: "Sunset Beach",
  },
  {
    type: "video",
    src: "1854202-hd_1280_720_25fps.mp4",
  },
  {
    type: "image",
    src: "river.jpg",
    alt: "City Skyline",
  }
];

const galleryGrid = document.querySelector(".gallery-grid");

galleryItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  if(item.type === "image") {
    div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
    `;
  } else if(item.type === "video") {
    div.innerHTML = `
      <video controls preload="metadata" muted>
        <source src="${item.src}" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    `;
  }

  galleryGrid.appendChild(div);
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("footer").innerHTML = ` <div class="container-fluid bg-black pt-1 mt-5">

            <hr class="text-light">

            <div class="row mt-5 text-light p-4 gap-2 justify-content-around">

                <div class="col-md-4 col-xl-4 mx-auto">
                    <h5 class="fw-bold footerhead"><i class="fa-solid fa-plane fs-3 text-center text-light"></i><span
                            class="fw-bold fs-3"> Travel Smart</h5>
                    <p>Travel isn’t just about reaching a destination — it’s about making the most of every moment.
                        Learn how to plan efficiently, save money, and explore like a local. From packing tips to
                        finding hidden gems, we guide you to travel with confidence, comfort, and style.
                    </p>
                </div>
                <div class="col-md-2 col-xl-2 mx-auto">
                    <h5 class="footerhead">Destinations</h5>
                    <ul class="list-unstyled">
                        <li><a href="north.html" class="custom-link">North America</a></li>
                        <li><a href="southamerica.html" class="custom-link">South America</a></li>
                        <li><a href="africa.html" class="custom-link">Africa</a></li>
                        <li><a href="europe.html" class="custom-link">Europe</a></li>
                        <li><a href="asia.html" class="custom-link">Asia</a></li>
                        <li><a href="antarctica.html" class="custom-link">Antarctica</a></li>
                        <li><a href="australia.html" class="custom-link">Australia</a></li>
                    </ul>
                </div>

                <div class="col-md-2 col-xl-2 mx-auto">
                    <h5 class="footerhead">Activities</h5>
                    <ul class="list-unstyled">
                        <li><a href="trip.html" class="custom-link">Family Tours</a></li>
                        <li><a href="adventure.html" class="custom-link">Adventure Tours</a></li>
                        <li><a href="luxury.html" class="custom-link">Luxury Tours</a></li>
                        <li><a href="cultural.html" class="custom-link">Cultural Tours</a></li>
                </div>
                <div class="col-md-2 col-xl-2 mx-auto">
                    <h5 class="footerhead">Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="about.html" class="custom-link">About Us</a></li>
                        <li><a href="feedback.html" class="custom-link">Feedback</a></li>
                        <li><a href="contact.html" class="custom-link">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="row text-light p-3 justify-content-around">
                <div class="col-md-11 text-end text-light fs-4">
                    <ul class="list-inline list-unstyled">
                        <li class="list-inline-item">
                            <p><i class="fab fa-facebook"></i></p>
                        </li>
                        <li class="list-inline-item">
                            <p><i class="fab fa-instagram"></i></p>
                        </li>
                        <li class="list-inline-item">
                            <p><i class="fab fa-google"></i></p>
                        </li>
                    </ul>
                </div>
            </div>

            <hr class="text-light">

            <div class="row text-light pb-4">
                <div class="text-secondary fs-6 text-center">&copy;2025
                    TravelSmart. All rights reserved
                </div>
            </div>
        </div>`});

document.getElementById("navbarrepeat").innerHTML = ` <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center" id="minibar">
            <div class="small col-lg-4 col-md-3 text-md-start text-center">
                <i class="fas fa-phone mx-2 icon"></i><span class="number text-light">(00) 2353 7878</span>
                <i class="fas fa-envelope mx-2 icon"></i><a href="mailto:travelsmart@gmail.com"
                    class="contact text-light"><span class="contact">travelsmart@gmail.com</span></a>
            </div>
            <div class="text-light small col-md-6 col-lg-6 text-md-start py-1">Book your package before <strong
                    class="mx-1"> June 30th </strong> and enjoy
                unbeatable discounts.</div>
            <div class="mx-auto" id="hr">
                <hr class="text-light fw-bold p-0 m-0">
            </div>
        </div>
        <div class="row" id="navbar">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html"><img src="Assets/travel logo.png" alt="logo"
                            class="rounded-circle mx-3" height="60px" width="auto"><span
                            class="fw-bold text-light brand">Travel Smart</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link text-light" aria-current="page" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="contact.html">Contact</a>
                            </li>
                            <li class="nav-item dropdown" id="tourDropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Tour Catalog
                                </a>
                                <ul class="dropdown-menu text-center">
                                    <li class="dropdown-submenu">
                                        <a class="dropdown-item" href="#">Sort by Activity ▸</a>
                                        <ul class="dropdown-menu">
                                             <li><a class="dropdown-item" href="trip.html">Family Tours</a></li>
                                            <li><a class="dropdown-item" href="adventure.html">Adventure Tours</a></li>
                                            <li><a class="dropdown-item" href="luxury.html">Luxury Tours</a></li>
                                            <li><a class="dropdown-item" href="cultural.html">Cultural Tours</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a class="dropdown-item" href="#">Sort by Destination ▸</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="north.html">North America</a></li>
                                            <li><a class="dropdown-item" href="southamerica.html">South America</a></li>
                                            <li><a class="dropdown-item" href="africa.html">Africa</a></li>
                                            <li><a class="dropdown-item" href="europe.html">Europe</a></li>
                                            <li><a class="dropdown-item" href="asia.html">Asia</a></li>
                                            <li><a class="dropdown-item" href="antarctica.html">Antarctica</a></li>
                                            <li><a class="dropdown-item" href="australia.html">Australia</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div class="d-flex mt-3 mt-md-0">
                            <button class="nbtn rounded-pill text-light p-2 me-md-4 me-0"><i
                                    class="fas fa-phone mx-2"></i>
                                (00) 23537878
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>`

    window.addEventListener('scroll', function () {
  const toggleBtn = document.querySelector('.navbar-toggler');
  if (window.scrollY > 50) {
    toggleBtn.classList.add('scrolled');
  } else {
    toggleBtn.classList.remove('scrolled');
  }
});

document.querySelectorAll('.dropdown-submenu > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });

    this.nextElementSibling.classList.toggle('show');
  });
});

document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('hide.bs.dropdown', function () {
    this.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });
  });
});

const tourDropdown = document.getElementById('tourDropdown');

tourDropdown.addEventListener('mouseenter', () => {
  tourDropdown.classList.add('show');
});

tourDropdown.addEventListener('mouseleave', () => {
  tourDropdown.classList.remove('show');
});