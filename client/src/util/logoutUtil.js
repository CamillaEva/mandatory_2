import { user } from "../store/AuthStore.js"
import { fetchGet } from "./fetchUtil.js";

export async function handleLogout() {

    await fetchGet("/api/logout");
    user.set(null);
    window.location.href = "/login";

}