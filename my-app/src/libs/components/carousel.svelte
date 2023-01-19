<script>
// import banner from "/banner.png";
let banner = "/banner.png";
</script>

<div
  id="carouselExampleCaptions"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    />
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100000">
      <img src={banner} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>Where will you go next?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
          donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
          risus. Sed sit elit mauris adipiscing. <br /> Lobortis pellentesque nulla
          accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci
          magna non enim fames et sed.
        </p>
        <a href="#">Let’s Go.....</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={banner} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>Where will you go next?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
          donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
          risus. Sed sit elit mauris adipiscing. <br /> Lobortis pellentesque nulla
          accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci
          magna non enim fames et sed.
        </p>
        <a href="#">Let’s Go.....</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={banner} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1>Where will you go next?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
          donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
          risus. Sed sit elit mauris adipiscing. <br /> Lobortis pellentesque nulla
          accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci
          magna non enim fames et sed.
        </p>
        <a href="#">Let’s Go.....</a>
      </div>
    </div>
  </div>
</div>

<style>
.carousel-caption {
  padding-bottom: 15.5rem !important;
}
.carousel-caption h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
}
.carousel-caption p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 196.3%;
  text-align: center;
  color: #ffffff;
}
.carousel-caption a {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 196.3%;
  color: #ffa902;
  text-decoration: none;
}
@media only screen and (max-width: 559px) {
  .carousel-caption {
    padding-bottom: 60px !important;
    flex-direction: column;
    display: flex !important;
  }
  .carousel-caption h1 {
    font-size: 24px;
    line-height: normal;
  }
  .carousel-caption a {
    font-size: 13px;
    margin-top: -10px;
  }
  .carousel-caption p {
    line-height: normal;
    font-size: 10px;
  }
}

@media only screen and (max-width: 426px) {
  .carousel-caption {
    padding-bottom: 10px !important;
    flex-direction: column;
    display: flex !important;
  }
  .carousel-caption h1 {
    font-size: 24px;
    line-height: normal;
  }
  .carousel-caption a {
    font-size: 13px;
    margin-top: -20px;
  }
  .carousel-caption p {
    line-height: normal;
    font-size: 10px;
  }
}
@media only screen and (max-width: 426px) {
  .carousel-caption h1 {
    font-size: 20px;
  }
}
</style>
