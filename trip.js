
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("intro-section").innerHTML = `
    <div class="intro-section">
      <div class="intro-image">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Experience Beach Paradise">
      </div>
      <div class="intro-text">
        <h2 class="family-heading-3d">Sandspit Beach-Pakistan</h2>
        <p>Step into a serene escape where golden sands meet the crystal blue ocean. This is not just a vacation — it's the story you'll tell for years to come.</p>
        <ul class="intro-points">
          <li><i class="fas fa-clock"></i> Best time: November to March</li>
          <li><i class="fas fa-money-bill-wave"></i> Starting from $299 per person</li>
          <li><i class="fas fa-umbrella-beach"></i> Private beach access</li>
          <li><i class="fas fa-utensils"></i> Sea-view dining experience</li>
        </ul>
      </div>
    </div>
  `;
});

const accommodations = [
  {
    image: "resort.jpg",
    title: "Seaside Resort",
    description: "Enjoy breathtaking ocean views with luxury suites and world-class service.",
    price: "$250 / night",
    timing: "Check-in: 2 PM | Check-out: 11 AM",
    facilities: ["Free WiFi", "Swimming Pool", "Spa & Sauna", "Beach Access"]
  },
  {
    image: "lodge.jpg",
    title: "Mountain Lodge",
    description: "Stay amidst the peaceful mountains with hiking trails right at your doorstep.",
    price: "$180 / night",
    timing: "Check-in: 1 PM | Check-out: 10 AM",
    facilities: ["Fireplace Rooms", "Guided Treks", "Breakfast Included", "Free Parking"]
  },
  {
    image: "city.jpg",
    title: "City Luxury Hotel",
    description: "Experience modern comfort in the heart of the city with top-class amenities.",
    price: "$300 / night",
    timing: "Check-in: 3 PM | Check-out: 12 PM",
    facilities: ["Sky Lounge", "Gym & Spa", "Conference Hall", "Airport Pickup"]
  },
  {
    image: "side inn.jpg",
    title: "Countryside Inn",
    description: "Cozy inn surrounded by nature, perfect for a quiet getaway.",
    price: "$120 / night",
    timing: "Check-in: 4 PM | Check-out: 11 AM",
    facilities: ["Free Breakfast", "Pet Friendly", "Garden", "Free Parking"]
  }
];

const accSection = document.getElementById("accommodation-section");

let accHTML = `<h1 class="heading-3d">Accommodation</h1>
<div class="accommodation-container">`;

accommodations.forEach(acc => {
  accHTML += `
    <div class="accommodation-card">
      <i class="fa-solid fa-heart wishlist-icon"></i>
      <img src="${acc.image}" alt="${acc.title}">
      <div class="accommodation-info">
        <h3>${acc.title}</h3>
        <p>${acc.description}</p>
        <div class="accommodation-details">
          <span><strong>Price:</strong> ${acc.price}</span>
          <span><strong>Timing:</strong> ${acc.timing}</span>
          <span><strong>Facilities:</strong> ${acc.facilities.join(", ")}</span>
        </div>
      </div>
    </div>
  `;
});

accHTML += `</div>`;
accSection.innerHTML = accHTML;
// Transportation Data
// Updated Transportation Data with working image URLs + fallback
const transportationData = [
    {
        name: "Airport Shuttle",
        image: "shuttle.jpg",
        description: "Comfortable shuttle service from the airport to your hotel.",
        price: "$15 per person",
        availability: "Available 24/7"
    },
    {
        name: "City Metro Pass",
        // updated working Unsplash URL with params
        image: "pass.jpg",
        description: "Unlimited metro rides for 24 hours to explore the city.",
        price: "$5 per day",
        availability: "5:00 AM - 11:30 PM"
    },
    {
        name: "Private Car Rental",
        // updated working Unsplash URL with params
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        description: "Rent a private car with driver for full-day sightseeing.",
        price: "$50 per day",
        availability: "Pre-booking required"
    },
    {
        name: "Bicycle Hire",
        image: "hire.jpg",
        description: "Eco-friendly way to explore the city and parks.",
        price: "$3 per hour",
        availability: "7:00 AM - 8:00 PM"
    }
];

// Inject Transportation Section (with onerror fallback)
const transportContainer = document.getElementById("transportation-container");

transportContainer.innerHTML = ""; // clear first

let heading = document.createElement("h2");
heading.classList.add("transport-heading");
heading.textContent = " Transportation Services";
transportContainer.appendChild(heading);

let grid = document.createElement("div");
grid.classList.add("transport-container");

transportationData.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("transport-card");

    // create img element so we can attach onerror
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    // fallback to picsum if original fails
    img.onerror = function() {
        this.onerror = null;
        this.src = "https://picsum.photos/800/600?random=" + Math.floor(Math.random()*1000);
    };

   card.innerHTML = `
    <span class="wishlist-icon"><i class="fas fa-heart"></i></span>
    <div class="transport-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
        <p><strong>Availability:</strong> ${item.availability}</p>
    </div>
`;

    // insert image at top
    card.insertBefore(img, card.firstChild);

    grid.appendChild(card);
});

transportContainer.appendChild(grid);


// Make sure Font Awesome CSS is loaded in your HTML <head>:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
const activities = [
  {
    id: 1,
    title: "Desert Safari Adventure",
    description: "Experience the thrill of dune bashing and desert camping under stars.",
    image: "deert.jpg",
    duration: "4 hours",
    price: "$50",
    location: "Dubai Desert",
    difficulty: "Moderate"
  },
  {
    id: 2,
    title: "Mountain Hiking",
    description: "Explore breathtaking mountain trails with expert guides.",
    image: "hikin.jpg",
    duration: "8 hours",
    price: "$70",
    location: "Rocky Mountains",
    difficulty: "Hard"
  },
  {
    id: 3,
    title: "City Cultural Tour",
    description: "Discover historical sites and local culture in a guided city tour.",
    image: "city.jpg",
    duration: "5 hours",
    price: "$40",
    location: "Rome, Italy",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Beach Relaxation Package",
    description: "Enjoy sunbathing, swimming, and beach games with refreshments.",
    image: "relax.jpg",
    duration: "6 hours",
    price: "$55",
    location: "Maldives",
    difficulty: "Easy"
  }
];

function renderActivities() {
  const container = document.getElementById('activity-container');
  container.innerHTML = '';

  activities.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'activity-card';

    card.innerHTML = `
      <img src="${activity.image}" alt="${activity.title}" class="activity-image" />
      <div class="activity-content">
        <h3 class="activity-title">${activity.title}</h3>
        <p class="activity-description">${activity.description}</p>
        <div class="activity-info">
          <div><span class="label">Duration:</span> ${activity.duration}</div>
          <div><span class="label">Price:</span> ${activity.price}</div>
          <div><span class="label">Location:</span> ${activity.location}</div>
          <div><span class="label">Difficulty:</span> ${activity.difficulty}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}


renderActivities();



const galleryItems = [
  {
    type: "image",
    src: "g1.jpg",
    alt: "Mountain View",
  },
  {
    type: "video",
    src: "855633-hd_1920_1080_25fps.mp4",
  },
  {
    type: "image",
    src: "g7.jpg",
    alt: "Forest Path",
  },
  {
    type: "video",
    src: "856710-hd_1920_1080_30fps.mp4",
  },
  {
    type: "image",
    src: "g4.jpg",
    alt: "Lake Sunset"
  },
  // Added 3 mixed new items:
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    alt: "Sunset Beach",
  },
  {
    type: "video",
    src: "1854202-hd_1280_720_25fps.mp4",
  },
  {
    type: "image",
    src: "g8.jpg",
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


