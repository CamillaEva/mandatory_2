<script>

    import { handleLogout } from './util/logoutUtil.js';


    //================== Stores =====================

    import { user } from './store/AuthStore';

    //================== Pages =====================

    import Login from "./pages/Login.svelte";
    import Dashboard from "./pages/Dashboard.svelte";
    import About from "./pages/About.svelte";
    import Contact from "./pages/Contact.svelte";
    import Footer from "./component/Footer.svelte";

    //================= Routes ====================

    import { Router, Link, Route } from "svelte-routing";
</script>

<div class="layout-container">
    <Router>
        <nav>
        {#if $user}
            <button on:click={handleLogout}>
                <img src="/images/logout.png" height="30px" alt="login-button"/>
            </button>
            <Link to="/dashboard">
                <img src="/images/pokedexi.png" height="30px" alt="dashboard-button"/>
            </Link>
        {/if}

            <Link to="/about">
                <img src="/images/about.png" height="30px" alt="About-button" />
            </Link>

            <Link to="/contact">
                <img src="/images/contact.png" height="30px" alt="Contact-button" />
            </Link>

        </nav>

        <div class="links">
            <Route path="/"><Login /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/dashboard"><Dashboard /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
        </div>

        <Footer />
    </Router>
</div>

<style>
.layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.links {
    flex: 1;
}

button {
    background-color: transparent;
    border-color: transparent;
}

nav {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 10px;
    background-color: transparent;
}

</style>