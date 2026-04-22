<script>
    import { navigate } from "svelte-routing";
    import { user, authCheck } from "./store/AuthStore.js";

    let hasReDirected = false;

    $: if (!hasReDirected && !$authCheck && !$user) {
        hasReDirected = true;
        navigate("/login", {
            replace: true,
        });
    }
</script>

{#if $authCheck}
    <p>Loading...</p>
{:else if $user}
    <slot />
{/if}
