window.addEventListener('scroll', function () {
    const minibar = document.getElementById('containernavbar');
    if (window.scrollY > 50) {
        containernavbar.classList.add('scrolled');
    } else {
        containernavbar.classList.remove('scrolled');;
    }
});

window.addEventListener('scroll', function () {
    const toggleBtn = document.querySelector('.navbar-toggler');
    if (window.scrollY > 50) {
        toggleBtn.classList.add('scrolled');
    } else {
        toggleBtn.classList.remove('scrolled');
    }
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

