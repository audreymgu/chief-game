<script>
    import GameArea from '$lib/GameArea.svelte';
    import MenuBar from '$lib/MenuBar.svelte';
    import '../app.css';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';

    let { ogTitle, ogDescription, ogImage } = $page.data;

    let iframeEl;

    let menuVisible;
    let menuEnding;

    onMount(() => {
        window.addEventListener("message", (event) => {
            // Check the origin if needed
            // if (event.origin !== 'YOUR_TRUSTED_ORIGIN') return;

            const data = event.data;

            // Check for the labeled boolean message type
            // if (data.type === "showMenu") {
            //     console.log(data.type, data.value);
            //     // Handle the labeled boolean value here
            //     if (data.value === false) {
            //         menuVisible = false;
            //     } else if (data.value === true) {
            //         menuVisible = true;
            //         if (data.mod) {
            //             menuEnding = true;
            //         } else {
            //             menuEnding = false;
            //         }
            //     }
            // }

            if (data.type === "menuColor") {
                console.log(data.type, data.value);
                // Handle the labeled boolean value here
                if (data.value === true) {
                    menuEnding = true;
                } else {
                    menuEnding = false;
                }
            }
        });

        iframeEl.contentWindow.postMessage({ type: "parentReady" }, "*");
    });

    function handleQuit() {
        iframeEl.contentWindow.postMessage('quit', '*');
        console.log("Skip to quit ending.");
    }
    function handleRestart() {
        iframeEl.contentWindow.postMessage('restart', '*');
        console.log("Restart request.");
    }
</script>

<svelte:head>
  <title>The Corporate Trail</title>
  <meta property="og:title" content="{ogTitle}" />
  <meta property="og:description" content="{ogDescription}" />
  <meta property="og:image" content="{ogImage}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{`https://chief-game.vercel.app`}">
</svelte:head>

<!-- <About/> -->
<!-- {#if menuVisible} -->
<!-- <MenuBar menuEnding={menuEnding} on:restart={handleRestart} on:quit={handleQuit}/> -->
<!-- {/if} -->
<GameArea bind:iframe={iframeEl}/>
<!-- <Icons /> -->