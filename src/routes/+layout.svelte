<script lang="ts">
    import type {Snippet} from "svelte";
    import PWA from "$lib/components/PWA.svelte";

    let {
        children,
    }: {
        children: Snippet;
    } = $props();
</script>

<svelte:head>
    <title>SvelteKit PWA Issue</title>
</svelte:head>

<PWA />

<h1>SvelteKit PWA - Issue</h1>

{@render children()}
