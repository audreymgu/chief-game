<div class="about-window">
    <div class="titlebar">
        <img src="img/grip.svg" class="titlebar__grip">
        <p class="titlebar__text">WHO MADE THIS?</p>
        <img src="img/grip.svg" class="titlebar__grip">
    </div>
    <div class="about-window__text">
        <h1>Meet Chief</h1>
        <p>Navigating the highs, lows, and absurdities of corporate life at the executive level takes more than grit and hustle. Just ask a member of Chief—<mark>40% of us are in the C-Suite</mark>.</p>
        <p>As <mark>the largest network of senior women executives</mark>, Chief can connect you to the right leaders and help you become a more impactful one yourself.</p>
        <p>Visit <a href="https://chief.com">Chief.com</a> to learn more.</p>
        <div class="button"><a href="https://www.linkedin.com/sharing/share-offsite/?url=google.com">Close</a></div>
    </div>
</div>

<style lang="scss">
    .scroll-bar {
        position: absolute;
        right: 0;
        top: 32px;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        &__middle {
            flex-shrink: 2;
            max-height: 100%;
        }
    }
    .about-window {
        z-index: 4;
        position: fixed;
        top: 80px;
        left: 30px;
        width: 650px;
        background-color: #FFFFF5;
        border: 1px solid black;
        filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.25));
        &__text {
            padding: 24px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 26px;
            }
            
            &::-webkit-scrollbar-button:vertical {
                background-color: red;
                border: 1px dashed blue;
                height: 24px;
            }
            
            /* Turn on single button up on top, and down on bottom */
            &::-webkit-scrollbar-button:start:decrement,
            &::-webkit-scrollbar-button:end:increment {
                display: block;
            }
            
            /* Turn off the down area up on top, and up area on bottom */
            &::-webkit-scrollbar-button:vertical:start:increment,
            &::-webkit-scrollbar-button:vertical:end:decrement {
                display: none;
            }
            
            /* Place The scroll down button at the bottom */
            &::-webkit-scrollbar-button:vertical:increment {
                background-color: #DFDFD0;
                border: 1px solid black;
                border-width: 1px 0 0 1px;
                background-image: url(img/scroll-bottom.svg);
                background-position: center;
                background-size: 28px;
                background-repeat: no-repeat;
            }
            
            /* Place The scroll up button at the up */
            &::-webkit-scrollbar-button:vertical:decrement {
                background-color: #DFDFD0;
                border: 1px solid black;
                border-width: 0 0 1px 1px;
                background-image: url(img/scroll-top.svg);
                background-position: center;
                background-size: 28px;
                background-repeat: no-repeat;
            }
            
            &::-webkit-scrollbar-track:vertical {
                background-color: #DFDFD0;
                border: 1px solid black;
                border-width: 0 0 0 1px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #FDF7EE;
                border: 1px solid black; /* Space around the thumb to ensure visibility */
            }

            & h1 {
                font-family: start-2p;
                text-transform: uppercase;
                font-size: 18px;
                margin-bottom: 16px;
            }
            & p {
                font-family: ticker;
                line-height: 1.75;
                margin-bottom: 24px;
                max-width: 550px;
                font-size: 16px;
                & mark {
                    background-color: #FDFFA2;
                }
                & a {
                    color: #85A506;
                }
            }

        }
    }
    .titlebar {
        color: white;
        display: flex;
        justify-content: space-between;    
        height: 24px;
        text-align: center;
        border: 1px solid black;
        @include breakpoint(desktop) {
            border-width: 0 0 1px 0;
        }
        padding: 3px;
        background-image: linear-gradient(to bottom, #2A2C41 0%, #2A2C41 100%), linear-gradient(to bottom, #F8F7F2 0%, #F8F7F2 100%);
        background-clip: content-box, padding-box;
        
        &__text {
            font-family: ticker;
            font-size: 14px;
            line-height: 24px;
        }
        &__grip {
            padding: 4px 2px 4px 2px;
        }
    }
    .button {
        &:active {
            -webkit-transform: translateY(2px);
            transform: translateY(2px);
        }
        & a {
            border-style: ridge;
            border-width: 1rem;
            border-image-source: url('img/button.png');
            border-image-slice: 30% 40% fill;
            border-image-repeat: repeat; 
            border-radius: 12px;
            color: #2A2C41;
            background: #DFDFD0;
            display: block;
            height: 10px;
            line-height:  16px;
            margin-top: 2px;
            font-size: 12px;
            @include breakpoint(desktop) {
                height: 18px;
                line-height:  22px;
                margin-top: 4px;
                font-size: 14px;
            }

            text-align: center;
            text-transform: uppercase;
            font-family: start-2p;
            
            &:hover {
                border-image-source: url('img/button-hover.png');
                text-decoration: none;
            }
            transition: none;
        }
        &--disabled {
            & a {
                border-image-source: url('img/button-inactive.png');
                border-image-slice: 30% 40% fill;
                border-image-repeat: repeat;
                pointer-events: none;
                cursor: default;
                &:hover {
                    border-image-source: url('img/button-inactive.png');
                }
            }
        }
        &--success {
            & a {
                border-image-source: url('img/button-hover.png');
                border-image-slice: 30% 40% fill;
                border-image-repeat: repeat;
                pointer-events: none;
                cursor: default;
                &:hover {
                    border-image-source: url('img/button-active.png');
                }
            }
        }
        &--sharing {
            & a {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                align-content: center;
                padding-top: 8px;
                @-moz-document url-prefix() {
                    padding-top: 4px;
                }
                gap: 8px;
                line-height: 0;
            }
        }
    }
</style>