<script>
    import GameArea from '$lib/GameArea.svelte';
    import MenuBar from '$lib/MenuBar.svelte';
    import About from '$lib/About.svelte';
    import '../app.css';
    import { onMount } from 'svelte';

    let iframeEl;

    let menuVisible;
    let menuEnding;

    onMount(() => {
        window.addEventListener("message", (event) => {
            // Check the origin if needed
            // if (event.origin !== 'YOUR_TRUSTED_ORIGIN') return;

            const data = event.data;

            // Check for the labeled boolean message type
            if (data.type === "showMenu") {
                console.log(data.type, data.value);
                // Handle the labeled boolean value here
                if (data.value === false) {
                    menuVisible = false;
                } else if (data.value === true) {
                    menuVisible = true;
                    if (data.mod) {
                        menuEnding = true;
                    } else {
                        menuEnding = false;
                    }
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
<!-- <About/> -->
{#if menuVisible}
    <MenuBar menuEnding={menuEnding} on:restart={handleRestart} on:quit={handleQuit}/>
{/if}
<GameArea bind:iframe={iframeEl}/>