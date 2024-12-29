<script lang="ts">
  import { onMount } from "svelte";
  import { pwaAssetsHead } from "virtual:pwa-assets/head";
  import { pwaInfo } from "virtual:pwa-info";

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegisteredSW(url, r) {
          if (r) {
            setInterval(
              () => {
                r.update();
              },
              60 * 60 * 1000 /* Check every hour */
            );
          }
          console.log(`SW Registered: ${url}`);
        },
        onRegisterError(error) {
          console.error("SW registration error", error);
        },
      });
    }
  });

  const webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : "");
</script>

<svelte:head>
  {#if pwaAssetsHead.themeColor}
    <meta name="theme-color" content={pwaAssetsHead.themeColor.content} />
  {/if}
  {#each pwaAssetsHead.links as link}
    <link {...link} />
  {/each}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html webManifestLink}
</svelte:head>
