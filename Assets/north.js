let categories = [
    {
        title: "Rock Legends",
        image: "/rock.jpg",
        description: "Best rock bands of all time."
    },
    {
        title: "Jazz Vibes",
        image: "images/jazz.jpg",
        description: "Smooth and classic jazz hits."
    },
    { title: "Pop Icons",
        image: "images/pop.jpg",
        description: "Pop stars ruling the charts."
    }
];
let container = document.getElementById("cards-container");

categories.forEach(cat => {
    container.innerHTML += `
    <div class="col-md-4">
      <div class="card shadow border-0 my-4">
        <img src="${cat.image}" class="card-img-top" alt="${cat.title}">
        <div class="card-body">
          <h5 class="card-title">${cat.title}</h5>
          <p class="card-text">${cat.description}</p>
        </div>
      </div>
    </div>
  `;
});
