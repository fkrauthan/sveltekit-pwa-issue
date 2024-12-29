<script lang="ts">
    import {goto} from "$app/navigation";

    let slug = $state("");

    function onSubmit(e: SubmitEvent) {
        e.preventDefault();

        goto(`/${slug}`);
    }
</script>

<h2>Welcome to my second test page</h2>

<form onsubmit={onSubmit}>
    <input bind:value={slug} type="text" name="slug" placeholder="Enter some string" />
    <button type="submit">Go To page</button>
</form>

<p><a href="/">Go Back</a></p>
