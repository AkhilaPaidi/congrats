const element = (
  <div class="bg-container">
    <h1 class="heading">Congratulations</h1>
    <div class="card-container">
      <div class="detail-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          class="image"
        />
        <h1 class="name">Kiran V</h1>
        <p class="intro">
          central institute of plastics engineering and technology
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          class="watch"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
