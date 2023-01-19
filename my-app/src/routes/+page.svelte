<!-- 
    main page,
    show image galry useing 'svelte-image-gallery' and the info from the page api

 -->
<script>
import MyGallery from "../libs/components/MyGallery.svelte";
// import Header from "../libs/components/header.svelte";
import Carousel from "../libs/components/carousel.svelte";
import Footer from "../libs/components/footer.svelte";
import BlogsList from "../libs/components/blogsList.svelte";
/** @type {import('./$types').PageData} */
export let data;
</script>

<!-- <Header /> -->
<Carousel />
<BlogsList />
<MyGallery images={data.gallery.results} />

<Footer />
