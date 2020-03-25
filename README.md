This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Simple Movie Search

This is a mini project that was create with the create react app. The purpose of this project is to allow the user to query the movie database API for a movie which will return the first page of results, then the user is able to favourite any number they like, which will be kept in the Redux store and be avaliable to them when the navigate to the favourites section.

The project has a lot of room to be improved and developed more into a more full web app with the addition of a proper user area and content detail pages along with pagination or infinite loading the search results can all help to improve the use.

## About the technology

- React 16.13
- Redux
- Redux Thunk
- Styled-components
- TypeScript

This is entirly frontend and contains the latest use of React using a complete Hook based architecture to allow complete functional components and full intergration with Redux without the need for connect. This provides a much more flexible base to work with. All state managment is controlled via Redux providing predictable outcomes for fetch actions or state updates.

## TMDB key

I use the V3 API key for this project and it is not commited on here. To add the keys under /src/keys.ts and in the file:

```
export const MOVIE_DB_KEY_V3 = "XXXXXXXXXXXXXX";
```

This will alow for the project to call the endpoint correctly, if this had a server backend this would be proxied via that instead.
