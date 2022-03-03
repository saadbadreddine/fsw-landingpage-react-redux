function NotFound() {
  require("../NotFound.css");
  return (
    <body>
      <section class="notFound">
        <div class="img">
          <img
            width="80%"
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            width="80%"
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div class="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
        </div>
      </section>
    </body>
  );
}

export default NotFound;
