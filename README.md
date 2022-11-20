<!-- Title -->
<h1 align="center">
  Mobile Application Programming
</h1>

<!-- Header -->

<p align="center">
  <b>Create Movies list application</b>
  <br />
<!-- Body -->


## Table of contents
* [Features](#features)
* [Install dependencies](#install-dependencies)
* [Coding Explanation](#coding-explanation)
* [References](#references)


## Features

- Home Page, showing the movies and description of the movies.
- Selecting the cinemas between Hollywood and Bollywood, Hollywood represent the movies of Los Angeles, California, USA and Bollywood represent fraction of Indian cinema. 
- Search movies, searching the movies name.

## Install dependencies
- Redux 
```sh
npm install redux
```
- Axios
```sh
 npm install axios
 ```
 - Google Maps Search Component for React Native
 ```sh
 npm install react-native-google-places-autocomplete --save
 ```

## Coding Explanation
- To search the movies in home page
```sh
<GooglePlacesAutocomplete placeholder="Search Movies"
        textInputProps={{
          onChangeText: (text) => setTitle(text),
          onSubmitEditing: () => dispatch(fetchMovies(title))}} />
```
- To show the movies in home page
```sh
data={movies}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
```

## References
- API: https://www.themoviedb.org/
- Axios: https://axios-http.com/
- GooglePlacesAutoComplete: https://www.npmjs.com/


