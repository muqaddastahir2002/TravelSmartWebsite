const adventureTourData = {
  image: "adventure-mountain.jpg",  // apni adventure image ka path
  heading: "Epic Adventure Tours",
  subheading: "Unleash Your Inner Explorer",
  paragraphs: [
    "Embark on thrilling journeys from rugged mountain treks to roaring river rafting experiences.",
    "Our tours are designed for adrenaline enthusiasts, offering excitement, safety, and unforgettable memories at every adventure stop."
  ]
};

function renderAdventureTour() {
  const container = document.getElementById("adventure-tour-container");
  container.innerHTML = `
  <div class="adventure-tour-section">
    <div class="adventure-tour-content">
      <h2 class="adventure-heading-3d">${adventureTourData.heading}</h2>
      <h4>${adventureTourData.subheading}</h4>
      ${adventureTourData.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="adventure-tour-image">
      <img src="jungle.jpg" alt="Adventure Tour" />
    </div>
  </div>
  `;
}

renderAdventureTour();


window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("adventure-intro-section").innerHTML = `
    <div class="adventure-intro-section">
      <div class="adventure-image">
        <img src="kara.jpg" alt="Adventure Beach Paradise">
      </div>
      <div class="adventure-text">
        <h2 class="adventure-heading-3d">Karakoram Adventure-Quest</h2>
        <p>Step into a thrilling escape where golden sands meet the crystal blue ocean. This adventure is packed with unforgettable experiences for thrill-seekers and nature lovers alike.</p>
        <ul class="adventure-points">
          <li><i class="fas fa-clock"></i> Best time: November to March</li>
          <li><i class="fas fa-money-bill-wave"></i> Starting from $299 per person</li>
          <li><i class="fas fa-umbrella-beach"></i> Exclusive adventure activities on the beach</li>
          <li><i class="fas fa-utensils"></i> Adventure-themed dining experiences</li>
        </ul>
      </div>
    </div>
  `;
});

const adventureAccommodations = [
  {
    image: "resort.jpg",
    title: "Seaside Adventure Resort",
    description: "Wake up to stunning ocean views and start your adventure with water sports and beach activities.",
    price: "$250 / night",
    timing: "Check-in: 2 PM | Check-out: 11 AM",
    facilities: ["Surfing Gear", "Beach Volleyball", "Guided Kayak Tours", "Free WiFi"]
  },
  {
    image: "lodge.jpg",
    title: "Mountain Adventure Lodge",
    description: "Nestled in the mountains, ideal for hiking, climbing, and exploring nature trails right from your doorstep.",
    price: "$180 / night",
    timing: "Check-in: 1 PM | Check-out: 10 AM",
    facilities: ["Guided Treks", "Fireplace Rooms", "Mountain Bikes", "Breakfast Included"]
  },
  {
    image: "city.jpg",
    title: "Urban Adventure Hotel",
    description: "Experience city-based adventures with rooftop activities, urban trails, and easy access to adventure parks.",
    price: "$300 / night",
    timing: "Check-in: 3 PM | Check-out: 12 PM",
    facilities: ["Rooftop Climbing Wall", "Sky Lounge", "Fitness & Adventure Gym", "Airport Pickup"]
  },
  {
    image: "side inn.jpg",
    title: "Countryside Adventure Inn",
    description: "Cozy inn surrounded by forests and rivers, perfect for kayaking, horseback riding, and nature exploration.",
    price: "$120 / night",
    timing: "Check-in: 4 PM | Check-out: 11 AM",
    facilities: ["Kayaking", "Horseback Riding", "Guided Nature Walks", "Pet Friendly"]
  }
];

const adventureAccSection = document.getElementById("adventure-accommodation-section");

let adventureAccHTML = `<h1 class="adventure-heading-3d">Adventure Accommodations</h1>
<div class="adventure-accommodation-container">`;

adventureAccommodations.forEach(acc => {
  adventureAccHTML += `
    <div class="adventure-accommodation-card">
      <i class="fa-solid fa-heart wishlist-icon"></i>
      <img src="${acc.image}" alt="${acc.title}">
      <div class="adventure-accommodation-info">
        <h3>${acc.title}</h3>
        <p>${acc.description}</p>
        <div class="adventure-accommodation-details">
          <span><strong>Price:</strong> ${acc.price}</span>
          <span><strong>Timing:</strong> ${acc.timing}</span>
          <span><strong>Facilities:</strong> ${acc.facilities.join(", ")}</span>
        </div>
      </div>
    </div>
  `;
});

adventureAccHTML += `</div>`;
adventureAccSection.innerHTML = adventureAccHTML;

const adventureTransportationData = [
    {
        name: "Adventure Shuttle",
        image: "shuttle.jpg",
        description: "Fast and safe shuttle service from the airport straight to your adventure basecamp.",
        price: "$20 per person",
        availability: "24/7 for all adventure travelers"
    },
    {
        name: "Explorer Metro Pass",
        image: "pass.jpg",
        description: "Unlimited metro rides to reach all major adventure zones and outdoor hotspots.",
        price: "$6 per day",
        availability: "5:00 AM - 11:30 PM"
    },
    {
        name: "Adventure Car Rental",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        description: "Rent a rugged 4x4 with driver for full-day off-road and adventure exploration.",
        price: "$60 per day",
        availability: "Pre-booking recommended"
    },
    {
        name: "Mountain Bicycle Hire",
        image: "hire.jpg",
        description: "Eco-friendly mountain bikes to explore trails, forests, and adventure parks.",
        price: "$4 per hour",
        availability: "7:00 AM - 8:00 PM"
    }
];

// Inject Adventure Transportation Section (with onerror fallback)
const adventureTransportContainer = document.getElementById("adventure-transportation-container");

adventureTransportContainer.innerHTML = ""; // clear first

let advHeading = document.createElement("h2");
advHeading.classList.add("adventure-transport-heading");
advHeading.textContent = "Adventure Transportation Options";
adventureTransportContainer.appendChild(advHeading);

let advGrid = document.createElement("div");
advGrid.classList.add("adventure-transport-container");

adventureTransportationData.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("adventure-transport-card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.onerror = function() {
        this.onerror = null;
        this.src = "https://picsum.photos/800/600?random=" + Math.floor(Math.random()*1000);
    };

    card.innerHTML = `
        <span class="wishlist-icon"><i class="fas fa-heart"></i></span>
        <div class="adventure-transport-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price"><strong>Price:</strong> ${item.price}</p>
            <p><strong>Availability:</strong> ${item.availability}</p>
        </div>
    `;

    card.insertBefore(img, card.firstChild);

    advGrid.appendChild(card);
});

adventureTransportContainer.appendChild(advGrid);

const adventureActivities = [
  {
    id: 1,
    title: "Desert Safari Expedition",
    description: "Feel the adrenaline rush while dune bashing, and spend the night camping under the starry desert sky.",
    image: "deert.jpg",
    duration: "6 hours",
    price: "$65",
    location: "Sahara Desert",
    difficulty: "Moderate"
  },
  {
    id: 2,
    title: "Mountain Peak Trek",
    description: "Conquer stunning peaks on guided treks with panoramic views of rugged landscapes.",
    image: "hikin.jpg",
    duration: "10 hours",
    price: "$80",
    location: "Himalayas",
    difficulty: "Hard"
  },
  {
    id: 3,
    title: "Jungle Wildlife Safari",
    description: "Explore dense forests and encounter exotic wildlife with experienced guides.",
    image: "jungle.jpg",
    duration: "7 hours",
    price: "$70",
    location: "Amazon Rainforest",
    difficulty: "Moderate"
  },
  {
    id: 4,
    title: "River Rafting Adventure",
    description: "Ride thrilling rapids and enjoy an adrenaline-packed river journey.",
    image: "river.jpg",
    duration: "5 hours",
    price: "$60",
    location: "Colorado River",
    difficulty: "Challenging"
  }
];

function renderAdventureActivities() {
  const container = document.getElementById('adventure-activity-container');
  container.innerHTML = '';

  adventureActivities.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'adventure-activity-card';

    card.innerHTML = `
      <img src="${activity.image}" alt="${activity.title}" class="adventure-activity-image" />
      <div class="adventure-activity-content">
        <h3 class="adventure-activity-title">${activity.title}</h3>
        <p class="adventure-activity-description">${activity.description}</p>
        <div class="adventure-activity-info">
          <div><span class="adventure-label">Duration:</span> ${activity.duration}</div>
          <div><span class="adventure-label">Price:</span> ${activity.price}</div>
          <div><span class="adventure-label">Location:</span> ${activity.location}</div>
          <div><span class="adventure-label">Difficulty:</span> ${activity.difficulty}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderAdventureActivities();
const galleryItems = [
  {
    type: "image",
    src: "ga1.jpg",
    alt: "Mountain View",
  },
  {
    type: "video",
    src: "855633-hd_1920_1080_25fps.mp4",
  },
  {
    type: "image",
    src: "ga2.jpg",
    alt: "Forest Path",
  },
  {
    type: "video",
    src: "856710-hd_1920_1080_30fps.mp4",
  },
  {
    type: "image",
    src: "ga3.jpg",
    alt: "Lake Sunset"
  },
  // Added 3 mixed new items:
  {
    type: "image",
    src: "ga5.jpg",
    alt: "Sunset Beach",
  },
  {
    type: "video",
    src: "1854202-hd_1280_720_25fps.mp4",
  },
  {
    type: "image",
    src: "ga4.jpg",
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