<script>
    import { user } from "../store/AuthStore.js";
    import { fetchGet } from "../util/fetchUtil.js";
    import { favoritePokemon } from "../store/pokemonStore.js";
    import { onMount } from "svelte";

    async function checkSession() {
        const result = await fetchGet("/api/session");
        if (!result.data) {
            window.location.href = "/login";
        }
    }

    checkSession();

    onMount(async () => {
        const result = await fetchGet("/api/dashboard");
        if (result.user) {
            user.set(result.user);
            favoritePokemon.set(result.pokemons);
        } else {
            window.location.href = "/login";
        }
    });
</script>

<h1 class="headline">
    {$user}'s favorite pokemon!
</h1>

<div class="pokemon-container">
    {#each $favoritePokemon as pokemon}
        <div>
            <img
                src="images/pokemon/{pokemon}.png"
                alt="{pokemon} pokemon"
                height="200px"
            />
            <p>{pokemon}</p>
        </div>
    {/each}
</div>

<style>
    .pokemon-container {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    .headline {
        line-height: 1.5;
        padding: 10px 0;
        text-align: center;
    }
</style>
