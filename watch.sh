#!/bin/bash

CSS_FILE="/Users/gu/Repositories/chief-game/src/main.css"
TWEET_FILE="/Users/gu/Repositories/chief-game/src/Special Passages/StoryStylesheet.twee"

update_twee_file() {
  echo "::Story Stylesheet" [stylesheet]> "$TWEET_FILE"
  cat "$CSS_FILE" >> "$TWEET_FILE"
  echo "Updated $TWEET_FILE with latest CSS"
}

fswatch -o "$CSS_FILE" | while read event
do
  update_twee_file
done