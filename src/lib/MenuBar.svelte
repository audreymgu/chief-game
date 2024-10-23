<script>
    export let menuEnding;
    export let menuColor;
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
{#if menuEnding}
    <div class="menu-bar menu-bar--color">
        <!-- <div class="menu-bar__group">
            <a class="menu-bar__link">About</a>
        </div> -->
            <img class="menu-bar__logo" src="img/logo.png" />
            <a href="https://chief.com" class="menu-bar__heading menu-bar__heading--color">A corporate survival game by<img src="img/chief.svg"/></a>
        <!-- {#if menuEnding}
            <a on:click={handleRestart} class="menu-bar__link menu-bar__link--highlight">Retry?</a>
        {:else}
            <a on:click={handleQuit} class="menu-bar__link">Quit</a>
        {/if} -->
    </div>
{:else}
    <div class="menu-bar">
        <img class="menu-bar__logo" src="img/logo.png" />
        <a href="https://chief.com" class="menu-bar__heading">A corporate survival game by<img src="img/chief.svg"/></a>
    </div>
{/if}

<style lang="scss">
    .menu-bar {
        position: fixed;
        z-index: 2;
        width: calc(100vw - 12px);
        background-color: #1D3803;
        left: 0;
        top: 0;
        display: flex;
        height: 36px;
        padding: 6px;
        justify-content: center;
        font-family: ticker;
        font-size: 16px;
        &--color {
            background-color: rgba(0,0,0,0.4);
        }
        &__heading {
            display: none;
            @include breakpoint(desktop) {
                display: block;
                color: #E3F6D0;
                text-decoration: underline;
                text-transform: uppercase;
                font-size: 12px;
                margin-top: 8px;
                & img {
                    margin-left: 12px;
                    margin-bottom: -3px;
                }
            }
            &--color {
                @include breakpoint(desktop) {
                    color: #DFDFD0;
                    background-color: transparent;
                }
            }
        }
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
            margin-top: 8px;
            height: 20px;
            @include breakpoint(desktop) {
                display: none;
            }
        }
    }
</style>