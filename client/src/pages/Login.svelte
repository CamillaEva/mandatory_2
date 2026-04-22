<script>
    import toastr from "toastr";
    import { fetchPost } from "../util/fetchUtil.js";
    import { user } from "../store/AuthStore.js";

    let username;

    let password;

    async function handleLogin(event) {
        event.preventDefault();
        const result = await fetchPost("/api/login", { username, password });

        if (result.ok) {
            user.set(username);
            toastr.info("login succeeded!");
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
        } else {
            toastr.warning("error logging in to site.");
        }
    }


</script>

<div class="background">
    <div class="login-wrapper">
        <form on:submit={handleLogin}>
            <h1>Login</h1>
            <div class="input-box">
                <input
                    bind:value={username}
                    type="text"
                    placeholder="Username"
                    required
                />
            </div>
            <div class="input-box">
                <input
                    bind:value={password}
                    type="password"
                    placeholder="password"
                    required
                />
            </div>

            <button type="submit" class="Login-button">Login</button>

        </form>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: url("/images/background-login.png") no-repeat;
        background-size: cover;
        background-position: center;
    }

    .login-wrapper {
        width: 400px;
        height: 370px;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
    }

    .login-wrapper h1 {
        font-size: 36px;
        text-align: center;
    }

    .login-wrapper .input-box {
        width: 100%;
        height: 50px;
        background: transparent;
        margin: 30px 0;
    }

    .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
        color: #fff;
    }


    .Login-button {
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

</style>
