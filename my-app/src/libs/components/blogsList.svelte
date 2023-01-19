<!-- <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head> -->
<script lang="ts">
// import blog1 from "../img/blog1.png";
// import blog2 from "../img/blog2.png";
// import blog3 from "../img/blog3.png";
let blog1 =
    "https://images.unsplash.com/photo-1617670000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
let blog2 =
    "https://images.unsplash.com/photo-1617670000000-2b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
let blog3 =
    "https://images.unsplash.com/photo-1617670000000-3b3b3b3b3b3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
import { Col, Container, Row } from "sveltestrap";
</script>

<Container>
    <Row>
        <Col>
            <div class="blog__title text-center mt-5 mb-4">
                <h1>Featured explore</h1>
            </div>
        </Col>
    </Row>

    <Row>
        <Col xs="12" sm="4">
            <div class="card">
                <div class="card-header">
                    <img src={blog1} alt="" />
                </div>
                <div class="card-body">
                    <div class="card__title">
                        <h3>The Golden Sands of Florida and clifornia</h3>
                    </div>
                    <div class="card__text">
                        Lorem ipsum dolor sit amet, con turadip iscingelit. In
                        sed et donec purus viverra. Sit justo velit, eu sed
                    </div>
                    <div class="card__footer">
                        <a href="#">Solo Travel</a>
                        <span>By Roni Segal</span>
                    </div>
                </div>
            </div>
        </Col>
        <Col xs="12" sm="4">
            <div class="card">
                <div class="card-header">
                    <img src={blog2} alt="" />
                </div>
                <div class="card-body">
                    <div class="card__title">
                        <h3>The Golden Sands of Florida and clifornia</h3>
                    </div>
                    <div class="card__text">
                        Lorem ipsum dolor sit amet, con turadip iscingelit. In
                        sed et donec purus viverra. Sit justo velit, eu sed
                    </div>
                    <div class="card__footer">
                        <a href="#">Solo Travel</a>
                        <span>By Roni Segal</span>
                    </div>
                </div>
            </div>
        </Col>
        <Col xs="12" sm="4">
            <div class="card">
                <div class="card-header">
                    <img src={blog3} alt="" />
                </div>
                <div class="card-body">
                    <div class="card__title">
                        <h3>The Golden Sands of Florida and clifornia</h3>
                    </div>
                    <div class="card__text">
                        Lorem ipsum dolor sit amet, con turadip iscingelit. In
                        sed et donec purus viverra. Sit justo velit, eu sed
                    </div>
                    <div class="card__footer">
                        <a href="#">Solo Travel</a>
                        <span>By Roni Segal</span>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</Container>

<style>
.card {
    border-top: 0;
}
.card-header {
    padding: 0;
    background: none;
}
.card-header img {
    width: 100%;
}

.blog__title h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    text-transform: capitalize;
    color: #141414;
}

.card__title h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    text-transform: capitalize;
    color: #141414;
}
.card__text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 183.3%;
    color: #868383;
}
.card__footer a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 183.3%;
    color: #ffa902;
}
.card__footer span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 183.3%;
    color: #141414;
}

.card-body {
    padding: 35px;
}
@media only screen and (max-width: 426px) {
    .card {
        margin-top: 25px;
    }
}
</style>
