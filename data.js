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

let data = [
    {
        "id": 1,
        "region": "North America",
        "title": "Canada",
        "image": "Assets/canada north.jpg",
        "description": "Amidst endless forests and shimmering lakes Canada whispers tales of wonder where natures grace and vibrant spirit entwine in perfect harmony",
        "price": "Rs 50000",
        "days": "5 days",
        "package": "Individual deal"
    },
    {
        "id": 2,
        "region": "North America",
        "title": "United States of America",
        "image": "Assets/united states.jpg",
        "description": "Where vast horizons meet endless dreams — the USA invites you to chase the stars and discover freedoms endless melody",
        "price": "Rs 30000",
        "days": "3 days",
        "package": "Family deal"
    },
    {
        "id": 3,
        "region": "North America",
        "title": "Mexico",
        "image": "Assets/mexico real.jpg",
        "description": " Dive into Mexico’s vibrant colors, sun-kissed beaches, and timeless fiestas — where every moment is a celebration of life and culture!",
        "price": "Rs 45000",
        "days": "4 days",
        "package": "Individual deal"
    },
    {
        "id": 4,
        "region": "South America",
        "title": "Argentina-South America",
        "image": "Assets/argentinacardreal.png",
        "description": "Argentina is a South American country famous for its tango music, passionate football culture, and stunning landscapes like Patagonia. Its capital, Buenos Aires, is known for vibrant street life and European-style architecture.",
        "price": "Rs 90000",
        "days": "7 days",
        "package": "Family deal"
    },
    {
        "id": 5,
        "region": "South America",
        "title": "Brazil-South America",
        "image": "Assets/brazilcardreal.jpg",
        "description": "Brazil is famous for its vibrant Carnival, samba rhythms, and breathtaking Amazon rainforest — a country where football isn’t just a sport, it’s a religion. It’s also the land of bold flavors, from feijoada to sizzling churrasco.",
        "price": "Rs 250000",
        "days": "12 days",
        "package": "Family deal"
    },
    {
        "id": 6,
        "region": "South America",
        "title": "Venezuela-South America",
        "image": "Assets/venuscardreal.png",
        "description": "Venezuela is a fascinating mix of beauty, history, and complexity — like a telenovela with both breathtaking scenery and plenty of drama.",
        "price": "Rs 20000",
        "days": "2 days",
        "package": "Individual deal"
    },
    {
        "id": 7,
        "region": "Africa",
        "title": "Egypt-Africa",
        "image": "Assets/egyptcard.jpg",
        "description": "Discover the timeless magic of Egypt, where ancient pyramids whisper secrets of a lost civilization.",
        "price": "Rs 600000",
        "days": "6 days",
        "package": "Family deal"
    },
    {
        "id": 8,
        "region": "Africa",
        "title": "South Africa-Africa",
        "image": "Assets/southafricacard.png",
        "description": "Dive into South Africa’s wild heart — where thrilling safaris meet vibrant city beats and breathtaking landscapes",
        "price": "Rs 1200000",
        "days": "12 days",
        "package": "Family deal"
    },
    {
        "id": 9,
        "region": "Africa",
        "title": "Nigeria-Africa",
        "image": "Assets/nigeriacard.png",
        "description": "From golden savannahs to bustling streets, Nigeria sings a song both wild and sweet",
        "price": "Rs 100,000",
        "days": "2 days",
        "package": "Individual deal"
    },
    {
        "id": 10,
        "region": "Europe",
        "title": "Russia-Europe",
        "image": "Assets/russiacard.png",
        "description": "Russia unfolds like a vast, icy canvas, where history and mystery paint every horizon",
        "price": "Rs  500,000",
        "days": "30 days",
        "package": "Individual deal"
    },
    {
        "id": 11,
        "region": "Europe",
        "title": "France-Europe",
        "image": "Assets/francecard.png",
        "description": "Dive into South Africa’s wild heart — where thrilling safaris meet vibrant city beats and breathtaking landscapes",
        "price": "Rs 1200000",
        "days": "12 days",
        "package": "Family deal"
    },
    {
        "id": 12,
        "region": "Europe",
        "title": "Spain-Europe",
        "image": "Assets/spaincard.png",
        "description": "From golden savannahs to bustling streets, Nigeria sings a song both wild and sweet",
        "price": "Rs 100,000",
        "days": "2 days",
        "package": "Individual deal"
    },
    {
        "id": 13,
        "region": "Asia",
        "title": "Japan-Asia",
        "image": "Assets/japancard.png",
        "description": "Beneath the silent sakura’s gentle bloom,Whispers of ancient dreams dissolve the gloom.",
        "price": "Rs  400,000",
        "days": "8 days",
        "package": "Family deal"
    },
    {
        "id": 14,
        "region": "Asia",
        "title": "Maldives-Asia",
        "image": "Assets/maldivescard.png",
        "description": "Emerald waves kiss the sunlit shore,A paradise where hearts forever soar.",
        "price": "Rs 900000",
        "days": "13 days",
        "package": "Family deal"
    },
    {
        "id": 15,
        "region": "Asia",
        "title": "Turkey-Asia",
        "image": "Assets/turkeycard.png",
        "description": "Where East and West in twilight dance,History’s breath in every glance.",
        "price": "Rs 230,000",
        "days": "5 days",
        "package": "Individual deal"
    },
    {
        "id": 16,
        "region": "Antarctica",
        "title": "Antarctic Explorer: Discovering the 7th Continent",
        "image": "Assets/antarcticacard.png",
        "description": "Endless ice beneath the endless sky,Where silent glaciers and dreams lie high.",
        "price": "Rs  200,000",
        "days": "11 days",
        "package": "Family deal"
    },
    {
        "id": 17,
        "region": "Antarctica",
        "title": "Crossing the Circle: Southern Expedition (Ocean Explorer)",
        "image": "Assets/antarctocean.png",
        "description": "Across the icy waves, a silent ship glides,Where ocean’s secrets and frozen beauty collides.",
        "price": "Rs 250000",
        "days": "13 days",
        "package": "Family deal"
    },
    {
        "id": 18,
        "region": "Antarctica",
        "title": "Best of Antarctica: Whale Journey",
        "image": "Assets/antarctwhale.png",
        "description": "Majestic giants breach in icy seas,Antarctic whales sing ancient melodies",
        "price": "Rs 95,000",
        "days": "5 days",
        "package": "Individual deal"
    },
    {
        "id": 19,
        "region": "Australia",
        "title": "Fiji-Australia",
        "image": "Assets/fijicard.png",
        "description": "Where coral reefs in colors gleam,Fiji floats like a tropical dream.",
        "price": "Rs  150,000",
        "days": "3 days",
        "package": "Individual deal"
    },
    {
        "id": 20,
        "region": "Australia",
        "title": "Marshall Islands-Australia",
        "image": "Assets/marshallcard.png",
        "description": "Islands kissed by the endless sun,Where ocean and sky weave as one.",
        "price": "Rs 800000",
        "days": "12 days",
        "package": "Family deal"
    },
    {
        "id": 21,
        "region": "Australia",
        "title": "Papua New Guinea-Australia",
        "image": "Assets/papucard.png",
        "description": "In misty jungles, spirits roam free,A land of whispers beneath the canopy.",
        "price": "Rs 300,000",
        "days": "5 days",
        "package": "Individual deal"
    },

]

let card2 = [

    {
        "id": 22,
        "region": "Canada",
        "title": "Montreal Marriott Chateau Champlain(Hotel)",
        "image": "Assets/hotelcanadareal.png",
        "description": "Comfortable stay for 5 days. Early booking discounts available!",
        "price": "Price-Rs 25,000",
        "category":"Accomodation"

    },

    {
        "id": 23,
        "region": "Canada",
        "title": "Woody Island Resort(Resort)",
        "image": "Assets/canadaresortreal.png",
        "description": "Luxury beachfront resort with spa and wellness facilities for 3 days.",
        "price": "Price-Rs 34,000",
        "category":"Accomodation"

    },

    {
        "id": 24,
        "region": "Canada",
        "title": "Tofino(Guesthouse)",
        "image": "Assets/canadaguestreal.png",
        "description": "Cozy guesthouse in the city center with great local vibes for 10 days.",
        "price": "Price-Rs 55,000",
        "category":"Accomodation"

    },

    {
        "id": 25,
        "region": "Canada",
        "title": "Flight", 
        "image": "Assets/canadaplanereal.png",
        "description": "Fly to Canada in comfort and style—your adventure starts in the skies!",
        "price": "Price-Rs 23,000",
        "time": "14-17 hours",
        "category":"Transport options"

    },

    {
        "id": 26,
        "region": "Canada",
        "title": "Taxi",
        "image": "Assets/canadataxireal.png",
        "description": "Reliable taxi service available 24/7 for quick and convenient travel.",
        "price": "Price-Rs 30,000",
        "time": "2 hours",
        "category":"Transport options"

    },

    {
        "id": 27,
        "region": "Canada",
        "title": "Bicycle Rental",
        "image": "Assets/canadabikereal.png",
        "description": "Explore the city on two wheels with affordable bike rentals.",
        "price": "  Price-Rs 3,000",
        "time": "2 hours",
        "category":"Transport options"

    },

    {
        "id": 28,
        "region": "Canada",
        "title": "Ice Canoeing",
        "image": "Assets/canadaact1.png",
        "description": "Experience thrilling waves and scenic winter landscapes in Canada.",
        "price": " Price:Rs10,000",
        "time": "45 min",
        "category":"Activities"

    },

    {
        "id": 29,
        "region": "Canada",
        "title": "Hike on designated trails",
        "image": "Assets/canadaact2.png",
        "description": "Explore forests, mountains, and lakes across the diverse landscape",
        "price": "Price:Rs 20,000",
        "time": "1 hr 30 min",
        "category":"Activities"

    },

    {
        "id": 30,
        "region": "Canada",
        "title": "Paragliding",
        "image": "Assets/canadaact3.png",
        "description": "Soar above majestic mountains and ancient landscapes. Feel the thrill of flying over China's breathtaking scenery!",
        "price": "Price:Rs 12,000",
        "time": " 15 min",
       "category":"Activities"

    },

    {
        "id": 49,
        "region": "Canada",
        "title": "Niagara Falls",
        "image": "Assets/niagarafallreal.png",
       "category":"Popular"

    },

    {
        "id": 50,
        "region": "Canada",
        "title": "CN Tower",
        "image": "Assets/cntowerreal.png",
       "category":"Popular"

    },

    {
        "id": 51,
        "region": "Canada",
        "title": "Banff National Park",
        "image": "Assets/banffreal.png",
       "category":"Popular"

    },

    {
        "id": 52,
        "region": "Canada",
        "title": "Quebec",
        "image": "Assets/quebecreal.png",
       "category":"Popular"

    },

    {
        "id": 31,
        "region": "United States of America",
        "title": "White River Junction Hotel",
        "image": "Assets/usahotel.png",
        "description": "5 star hotel for a reason",
        "price": "Price:Rs 250,000",
        "category":"Accomodation"
      
    },

    {
        "id": 32,
        "region": "United States of America",
        "title": "Arizona Luxury Oasis(Resort)",
        "image": "Assets/usaresort.png",
        "description": "There's a reason you visit every year",
        "price": "Price:Rs 100,000",
         "category":"Accomodation"
       
    },

    {
        "id": 33,
        "region": "United States of America",
        "title": "Morrison House Hotel Old Town (GuestHouse)",
        "image": "Assets/usaguest.png",
        "description": "A peaceful vibe is all i ask for",
        "price": "Price:Rs 120,000",
         "category":"Accomodation"
       
    },

    {
        "id": 34,
        "region": "United States of America",
        "title": "Flight",
        "image": "Assets/usaplane.png",
        "description": "Get on the flight to join us ",
        "price": "Price:Rs 35,000",
        "time": "24 hours",
         "category":"Transport options"
    },

    {
        "id": 35,
        "region": "United States of America",
        "title": "Bus",
        "image": "Assets/usabus.png",
        "description": "Hop on for the ride of joy of your life",
        "price": "Price:Rs 15,000",
        "time": " 12 hours",
        "category":"Transport options"
    },
  {
        "id": 36,
        "region": "United States of America",
        "title": "Rental Car",
        "image": "Assets/usacar.png",
        "description": "Be fast and hurry",
        "price": "Price:Rs 10,000",
        "time": " 4 hours",
        "category":"Transport options"
    },  {
        "id": 37,
        "region": "United States of America",
        "title": "Statue of Liberty",
        "image": "Assets/canadaact3.png",
        "description": "Wonder why everyone is attracted to this site,visit you sure will know",
        "price": "Price:Rs 12,000",
        "time": " 2 hours",
        "category":"Activities"
    },
    {
        "id": 38,
        "region": "United States of America",
        "title": "Paragliding",
        "image": "Assets/canadaact3.png",
        "description": "Soar high in the heights of America",
        "price": "Price:Rs 7,000",
        "time": " 15 min",
        "category":"Activities"
    },{
        "id": 39,
        "region": "United States of America",
        "title": "Hiking in natural parks",
        "image": "Assets/canadaact3.png",
        "description": "Get lost in the beauty of nature",
        "price": "Price:Rs 15,000",
        "days": "3 hours",
        "category":"Activities"
    },


    {
        "id": 53,
        "region": "United States of America",
        "title": "Statue of Liberty",
        "image": "Assets/quebecreal.png",
       "category":"Popular"

    },
    
    {
        "id": 54,
        "region": "United States of America",
        "title": "Central Park",
        "image": "Assets/quebecreal.png",
       "category":"Popular"

    },
    
    {
        "id": 55,
        "region": "United States of America",
        "title": "Walt Disney World",
        "image": "Assets/quebecreal.png",
       "category":"Popular"

    },
    
    {
        "id": 56,
        "region": "United States of America",
        "title": "Golden Gate Bridge",
        "image": "Assets/quebecreal.png",
       "category":"Popular"

    },
    
      {
        "id": 40,
        "region": "Mexico",
        "title": "Hyatt Regency Hotel",
        "image": "Assets/canadaact3.png",
        "description": "4 star hotel but still the best",
        "price": "Price:Rs 100,000",
          "category":"Accomodation"
      
    },

    {
        "id": 41,
        "region": "Mexico",
        "title": "Hyatt Vivid Playa del Carmen(Resort)",
        "image": "Assets/canadaact3.png",
        "description": "Gives you home vibes",
        "price": "Price:Rs 95,000",
         "category":"Accomodation"
       
    },

    {
        "id": 42,
        "region": "Mexico",
        "title": "Reforma Guest House",
        "image": "Assets/canadaact3.png",
        "description": "A peaceful vibe is all i ask for",
        "price": "Price:Rs 35,000",
         "category":"Accomodation"
       
    },

    {
        "id": 43,
        "region": "Mexico",
        "title": "Taxi",
        "image": "Assets/canadaact3.png",
        "description": "Get on the yellow ride to join us ",
        "price": "Price:Rs 30,000",
        "time": "6 hours",
         "category":"Transport options"
    },

    {
        "id": 44,
        "region": "Mexico",
        "title": "Car",
        "image": "Assets/canadaact3.png",
        "description": "Mexico here we come",
        "price": "Price:Rs 50,000",
        "time": " 12 hours",
           "category":"Transport options"
    },
  {
        "id": 45,
        "region": "Mexico",
        "title": "Rental Bicycle",
        "image": "Assets/canadaact3.png",
        "description": "Be fast and quick to reach",
        "price": "Price:Rs 5,000",
        "time": " 4 hours",
           "category":"Transport options"
    },
    {
        "id": 46,
        "region": "Mexico",
        "title": "Snorkeling",
        "image": "Assets/canadaact3.png",
        "description": "A new experience to have in life",
        "price": "Price:Rs 5,000",
        "time": " 1 hour",
           "category":"Activities"
    },
    {
        "id": 47,
        "region": "Mexico",
        "title": "Chicken Itza",
        "image": "Assets/canadaact3.png",
        "description": "What in the world join us to find out",
        "price": "Price:Rs 15,000",
        "time": " 2 hours",
        "category":"Activities"
    },{
        "id": 48,
        "region": "Mexico",
        "title": "Dolphin and Marine life",
        "image": "Assets/canadaact3.png",
        "description": "Sea is my whole world ",
        "price": "Price:Rs 15,000",
        "time": " 1 hour",
        "category":"Activities"
    }

]


