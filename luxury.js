const luxuryTourData = {
  image: "luxury-resort.jpg",  // luxury image path
  heading: "Luxury Getaways",
  subheading: "Indulge in Ultimate Comfort & Elegance",
  paragraphs: [
    "Experience the finest in luxury travel with exquisite resorts, private beaches, and five-star amenities.",
    "Our luxury tours are designed for those who seek elegance, relaxation, and unforgettable memories at every destination."
  ]
};

function renderLuxuryTour() {
  const container = document.getElementById("luxury-tour-container");
  container.innerHTML = `
  <div class="luxury-tour-section">
    <div class="luxury-tour-content">
      <h2 class="luxury-heading-3d">${luxuryTourData.heading}</h2>
      <h4>${luxuryTourData.subheading}</h4>
      ${luxuryTourData.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="luxury-tour-image">
      <img src="la2.jpg" alt="Luxury Tour" />
    </div>
  </div>
  `;
}
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("luxury-intro-section").innerHTML = `
    <div class="luxury-intro-section">
      <div class="luxury-image">
        <img src="resort.jpg" alt="Luxury Resort Experience">
      </div>
      <div class="luxury-text">
        <h2 class="luxury-heading-3d">Pearl Luxury Resort-Pakistan</h2>
        <p>Indulge in an exclusive experience of opulence and serenity. Relax in premium suites, savor gourmet cuisine, and enjoy personalized services crafted for your comfort.</p>
        <ul class="luxury-points">
          <li><i class="fas fa-calendar-alt"></i> Best time: October to March</li>
          <li><i class="fas fa-money-bill-wave"></i> Packages starting from $499 per person</li>
          <li><i class="fas fa-gem"></i> Spa & wellness experiences included</li>
          <li><i class="fas fa-utensils"></i> Fine dining with international chefs</li>
        </ul>
      </div>
    </div>
  `;
});

renderLuxuryTour();
const luxuryAccommodations = [
  {
    image: "resort.jpg",
    title: "Seaside Luxury Resort",
    description: "Wake up to breathtaking ocean views and indulge in exclusive water sports, private beach experiences, and world-class amenities.",
    price: "$450 / night",
    timing: "Check-in: 3 PM | Check-out: 12 PM",
    facilities: ["Infinity Pool", "Private Beach", "Spa & Wellness Center", "Gourmet Dining"]
  },
  {
    image: "hikin.jpg",
    title: "Mountain Luxury Lodge",
    description: "Nestled amidst majestic peaks, perfect for guided treks, spa relaxation, and scenic mountain adventures.",
    price: "$380 / night",
    timing: "Check-in: 2 PM | Check-out: 11 AM",
    facilities: ["Guided Treks", "Mountain Spa", "Hot Tub Suites", "Gourmet Breakfast"]
  },
  {
    image: "city.jpg",
    title: "Urban Luxury Hotel",
    description: "Experience premium urban adventures with rooftop lounges, luxury gyms, and exclusive city tours.",
    price: "$500 / night",
    timing: "Check-in: 3 PM | Check-out: 12 PM",
    facilities: ["Rooftop Lounge", "Adventure Gym", "Sky Pool", "VIP City Tours"]
  },
  {
    image: "side inn.jpg",
    title: "Countryside Luxury Inn",
    description: "Secluded luxury retreat surrounded by nature, offering horseback riding, private hiking trails, and exclusive wellness sessions.",
    price: "$320 / night",
    timing: "Check-in: 4 PM | Check-out: 11 AM",
    facilities: ["Private Hiking Trails", "Horseback Riding", "Wellness Spa", "Gourmet Dining"]
  }
];

const luxuryAccSection = document.getElementById("luxury-accommodation-section");

let luxuryAccHTML = `<h1 class="luxury-heading-3d">Luxury Accommodations</h1>
<div class="luxury-accommodation-container">`;

luxuryAccommodations.forEach(acc => {
  luxuryAccHTML += `
    <div class="luxury-accommodation-card">
      <i class="fa-solid fa-heart wishlist-icon"></i>
      <img src="${acc.image}" alt="${acc.title}">
      <div class="luxury-accommodation-info">
        <h3>${acc.title}</h3>
        <p>${acc.description}</p>
        <div class="luxury-accommodation-details">
          <span><strong>Price:</strong> ${acc.price}</span>
          <span><strong>Timing:</strong> ${acc.timing}</span>
          <span><strong>Facilities:</strong> ${acc.facilities.join(", ")}</span>
        </div>
      </div>
    </div>
  `;
});

luxuryAccHTML += `</div>`;
luxuryAccSection.innerHTML = luxuryAccHTML;
const luxuryTransportationData = [
  {
    name: "Luxury Shuttle",
    image: "shuttle.jpg",
    description: "Premium shuttle service from the airport to your luxury retreat with comfort and style.",
    price: "$35 per person",
    availability: "24/7 with VIP service"
  },
  {
    name: "Executive Metro Pass",
    image: "pass.jpg",
    description: "Unlimited metro rides for effortless access to luxury destinations and exclusive spots.",
    price: "$10 per day",
    availability: "5:00 AM - 11:30 PM"
  },
  {
    name: "Luxury Car Rental",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    description: "Rent a premium car with chauffeur for full-day sightseeing in style and comfort.",
    price: "$120 per day",
    availability: "Pre-booking recommended"
  },
  {
    name: "Premium Bicycle Hire",
    image: "hire.jpg",
    description: "Explore scenic routes with high-end bicycles and enjoy a luxurious cycling experience.",
    price: "$12 per hour",
    availability: "7:00 AM - 8:00 PM"
  }
];

// Inject Luxury Transportation Section
const luxuryTransportContainer = document.getElementById("luxury-transportation-section");
luxuryTransportContainer.innerHTML = ""; // clear first

let luxHeading = document.createElement("h2");
luxHeading.classList.add("luxury-transport-heading");
luxHeading.textContent = "Luxury Transportation Options";
luxuryTransportContainer.appendChild(luxHeading);

let luxGrid = document.createElement("div");
luxGrid.classList.add("luxury-transport-container");

luxuryTransportationData.forEach(item => {
  let card = document.createElement("div");
  card.classList.add("luxury-transport-card");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.onerror = function () {
    this.onerror = null;
    this.src = "https://picsum.photos/800/600?random=" + Math.floor(Math.random() * 1000);
  };

  card.innerHTML = `
        <span class="wishlist-icon"><i class="fas fa-heart"></i></span>
        <div class="luxury-transport-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price"><strong>Price:</strong> ${item.price}</p>
            <p><strong>Availability:</strong> ${item.availability}</p>
        </div>
    `;

  card.insertBefore(img, card.firstChild);
  luxGrid.appendChild(card);
});

luxuryTransportContainer.appendChild(luxGrid);
const luxuryActivities = [
  {
    id: 1,
    title: "Royal Desert Safari",
    description: "Experience the luxury of private desert tours with camel rides, gourmet dining, and exclusive overnight camping.",
    image: "luxu.jpg",
    duration: "6 hours",
    price: "$250",
    location: "Thar Desert, Pakistan",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Luxury Mountain Trek",
    description: "Enjoy guided treks to majestic peaks with high-end tents, gourmet meals, and scenic helicopter views.",
    image: "wild.jpg",
    duration: "8 hours",
    price: "$300",
    location: "Karakoram Range",
    difficulty: "Moderate"
  },
  {
    id: 3,
    title: "Exclusive Jungle Retreat",
    description: "Relax in luxury treehouse accommodations while exploring rich wildlife with expert guides.",
    image: "jungle.jpg",
    duration: "7 hours",
    price: "$280",
    location: "Chitral Forests",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Premium River Cruise",
    description: "Sail in style along pristine rivers with private boats, onboard fine dining, and adventure activities.",
    image: "river.jpg",
    duration: "5 hours",
    price: "$220",
    location: "Indus River",
    difficulty: "Easy"
  }
];

function renderLuxuryActivities() {
  const container = document.getElementById('luxury-activity-container');
  container.innerHTML = '';

  luxuryActivities.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'luxury-activity-card';

    card.innerHTML = `
      <img src="${activity.image}" alt="${activity.title}" class="luxury-activity-image" />
      <div class="luxury-activity-content">
        <h3 class="luxury-activity-title">${activity.title}</h3>
        <p class="luxury-activity-description">${activity.description}</p>
        <div class="luxury-activity-info">
          <div><span class="luxury-label">Duration:</span> ${activity.duration}</div>
          <div><span class="luxury-label">Price:</span> ${activity.price}</div>
          <div><span class="luxury-label">Location:</span> ${activity.location}</div>
          <div><span class="luxury-label">Difficulty:</span> ${activity.difficulty}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderLuxuryActivities();
const galleryItems = [
  {
    type: "image",
    src: "la1.jpg",
    alt: "Mountain View",
  },
  {
    type: "video",
    src: "855633-hd_1920_1080_25fps.mp4",
  },
  {
    type: "image",
    src: "la2.jpg",
    alt: "Forest Path",
  },
  {
    type: "video",
    src: "856710-hd_1920_1080_30fps.mp4",
  },
  {
    type: "image",
    src: "g5.jpg",
    alt: "Lake Sunset"
  },
  // Added 3 mixed new items:
  {
    type: "image",
    src: "ga1.jpg",
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

  if (item.type === "image") {
    div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
    `;
  } else if (item.type === "video") {
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

