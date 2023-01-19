<!-- <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head> -->
<script lang="ts">
// import f from "../img/f.png";
// import i from "../img/i.png"
// import t from "../img/t.png"
// import y from "../img/y.png"
// let icon = "../blog1.png"
import { Col, Container, Row } from "sveltestrap";
</script>

<Container fluid style="margin: 0">
    <Row>
        <Col>
            <div class="footer__main">
                <div class="footer__text">2022 All Right Reserved</div>
                <div class="footer__sections">
                    <a href="#">Contact</a>
                    <!-- <a href="#">Privacy</a>
                    <a href="#">Terms</a> -->
                    <a href="#">About</a>
                </div>
                <div class="footer__media">
                    <!-- <a href="#">
                        <img src={f} alt="">
                    </a>
                    <a href="#">
                        <img src={i} alt="">
                    </a>
                    <a href="#">
                        <img src={t} alt="">
                    </a>
                    <a href="#">
                        <img src={y} alt="">
                    </a> -->
                </div>
            </div>
        </Col>
    </Row>
</Container>

<style>
.footer__main {
    width: 100%;
    height: 144px;
    background: #ffa902;
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
}
.footer__text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
}
.footer__sections a {
    text-decoration: none;
    margin-left: 35px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
}
.footer__media {
    display: flex;
}
.footer__media a {
    margin-left: 15px;
    width: 36px;
    height: 36px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
}
@media only screen and (max-width: 744px) {
    .footer__sections {
        display: none;
    }
    .footer__media {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        grid-gap: 10px;
    }
}
</style>
