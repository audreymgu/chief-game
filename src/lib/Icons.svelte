<div class="icon-view">
    <div class="icon">
        <img class="icon__img" src="img/about.png" />
        <p class="icon__label">ABOUT</p>
    </div>
    <div class="icon">
        <img class="icon__img" src="img/quit.png" />
        <p class="icon__label">QUIT</p>
    </div>
</div>

<style lang="scss">
    .icon-view {
        z-index: 0;
        position: fixed;
        bottom: 0;
        display: flex;
        width: calc(100vw - 128px);
        justify-content: space-between;
        margin: 56px 64px;
    }
    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
            &__label {
                color: #dcf15b;
            }
        }
        &__label {
            color: white;
            font-family: start-2p;
            margin-top: 24px;
        }
        &__img {
            height: 96px;
            width: fit-content;
        }
    }

</style>