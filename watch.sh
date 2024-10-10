#!/bin/bash

CSS_FILE="./src/game/main.css"
TWEET_FILE="./src/game/special/StoryStylesheet.twee"

update_twee_file() {
  echo "::Story Stylesheet" [stylesheet]> "$TWEET_FILE"
  cat "$CSS_FILE" >> "$TWEET_FILE"
  echo "Updated $TWEET_FILE with latest CSS"
}

fswatch -o "$CSS_FILE" | while read event
do
  update_twee_file
done