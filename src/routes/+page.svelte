<script>
    import GameArea from '$lib/GameArea.svelte';
    import MenuBar from '$lib/MenuBar.svelte';
    import '../app.css';
    import { onMount } from 'svelte';

    let menuVisible;

    onMount(() => {
        window.addEventListener("message", (event) => {
            // Check the origin if needed
            // if (event.origin !== 'YOUR_TRUSTED_ORIGIN') return;

            const data = event.data;

            // Check for the labeled boolean message type
            if (data.type === "loginFlag") {
                console.log("Received menu flag:", data.value);
                // Handle the labeled boolean value here
                if (data.value === false) {
                    console.log("hide");
                    menuVisible = false;
                } else if (data.value === true) {
                    console.log("show");
                    menuVisible = true;
                }
            }
        });
    });

    let iframeEl;

    function handleRestart() {
        // Send a message to the iframe to restart the game
        // iframeEl.contentWindow.postMessage('restart', '*');
        // console.log("Restart request.");
        iframeEl.contentWindow.postMessage('quit', '*');
        console.log("Quit ending.");
    }
</script>
{#if menuVisible}
    <MenuBar on:restart={handleRestart}/>
{/if}
<GameArea bind:iframe={iframeEl}/>