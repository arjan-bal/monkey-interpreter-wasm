#!/usr/bin/env bash

# Run this from repo root.
tmp_path='/tmp/www-deploy'

rm -rf "$tmp_path" &&
  echo "Building rust..." &&
  cargo build &&
  echo "Building javascript..." &&
  cd ./www &&
  npm run build &&
  cp -r ./dist "$tmp_path" &&
  cd .. &&
  echo "Deploying to gh-pages..." &&
  git checkout gh-pages &&
  rm -rf ./docs &&
  cp -r "$tmp_path/" ./docs &&
  git add docs/ &&
  git commit -m "Deploying to gh-pages" &&
  git push &&
  echo "Returning to main branch..." &&
  git checkout main
