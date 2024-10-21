<script>
    export let iframe;
</script>

<iframe bind:this={iframe} class="game" src="/game.html" width="100%" height="100%" frameborder="0"></iframe>

<style lang="scss">
    .game {
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        width: 100vw;
        z-index: 1;
    }
</style>