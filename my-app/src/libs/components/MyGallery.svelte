<script>
import { browser } from "$app/environment";
import Gallery from "svelte-image-gallery";

/** type [{
 *  src: string,
 * alt: string,
 * title: string,
 * }]*/
/**@type {object[]} */
export let images;

function handleClick(e) {
    console.log(e);
}
</script>

<h1>Gallery</h1>
{#if images && browser}
    <Gallery on:click={handleClick}>
        {#each images as image}
            <img
                src={image?.image || ""}
                alt={image?.alt || ""}
                title={image?.alt || ""}
            />
        {/each}
    </Gallery>
{/if}
