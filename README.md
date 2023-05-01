# BirdCollector: A Bird Watcher's Diary

## Overview
BirdCollector provides hobby birdwatchers with a way to keep track of the birds they've seen, also known as a life list. The app provides users with existing bird data to browse to find a bird they've seen, and save a list of their sightings. Users are also encouraged to populate the BirdCollector database with more birds.

## Functionality:
A user must sign up and log in to use this app. The user is able to browse an existing database of birds, as well as contribute by populating the database with new birds they've seen. The user accumulates sightings of birds through recording the date, location, and notes about their sighting, which is saved and persisted on their unique account. They are able to create, read, update, and delete any sighting they have created of a bird.

## Preview
![](birdcollectorgif.gif)

## Technologies

The app utilizes Ruby on Rails, JavaScript, React.js, JSX, HTML, CSS.

## Installation

To run the app locally, clone this GitHub repository into your machine with 'git clone'. In the root directory, run 'bundle install', followed by 'rails db:create db:migrate db:seed' and 'npm install --prefix client'. To start the application, run 'rails s' to start the server on [http://localhost:3000](http://localhost:3000), and run 'npm start --prefix client' to start the frontend on [http://localhost:4000](http://localhost:4000).

## Inspiration and Future Direction

This project was inspired by the Merlin Bird App, created by the Cornell Lab of Ornithology. Merlin provides bird identification for hobby birdwatchers and records their sightings in a "life list." With BirdCollector, I hope to take this in the future direction of a social media-oriented approach, with the ability to add other birdwatchers as "friends", being able to view your friends' sightings and share your own.

## Authors and Acknowledgement

This project was completed by Gucci Fan for Phase 4 of the Software Engineering course at Flatiron School.

## Sources

Images and descriptions of birds were pulled from [eBird](https://ebird.org), a project of the Cornell Lab of Ornithology.

## MIT License

Copyright (c) 2023 Gucci Fan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.