<script>
    export let iframe;
</script>

<iframe bind:this={iframe} class="game" src="/game.html" width="100%" height="100%" frameborder="0"></iframe>

<style lang="scss">
    .game {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }
</style>