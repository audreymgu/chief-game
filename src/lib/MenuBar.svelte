<script>
    export let menuEnding;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleQuit() {
        // Dispatch a custom event to the parent component
        dispatch('quit');
    }

    function handleRestart () {
        dispatch('restart');
    }
</script>

<div class="menu-bar">
    <div class="menu-bar__group">
        <a class="menu-bar__link">About</a>
    </div>
    <img class="menu-bar__logo" src="img/logo-small.png" />
    {#if menuEnding}
        <a on:click={handleRestart} class="menu-bar__link menu-bar__link--highlight">Retry?</a>
    {:else}
        <a on:click={handleQuit} class="menu-bar__link">Quit</a>
    {/if}
</div>

<style lang="scss">
    .menu-bar {
        position: fixed;
        z-index: 2;
        width: calc(100vw - 12px);
        background-color: #668547;
        left: 0;
        top: 0;
        display: flex;
        height: 36px;
        padding: 6px;
        justify-content: space-between;
        font-family: ticker;
        font-size: 16px;
        &__group {
            height: 100%;
            display: flex;
            gap: 4px;
        }
        &__link {
            color: #DCF15B;
            background-color: #547335;
            padding: 6px 12px 0 12px;
            &:hover {
                color: black;
                background-color: #DCF15B;
            }
            &--highlight {
                color: black;
                background-color: #DCF15B;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        &__logo {
            @include breakpoint(desktop) {
                display: none;
            }
        }
    }
</style>