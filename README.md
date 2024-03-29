# CineMate

This React Native application is designed to provide users with a seamless experience for exploring and discovering information about movies. The app utilizes data from The Movie Database (TMDb) API to offer a rich and up-to-date collection of movie details.

## Features

1. **Browse Movies**: Explore a vast collection of movies sorted by various criteria such as popular, top-rated, upcoming, and now playing.

2. **Search Functionality**: Easily search for movies using keywords or titles to quickly find the information you're looking for.

3. **Movie Details**: Access comprehensive details about each movie, including release date, overview, and user ratings.

4. **Responsive Design**: The app is built with a responsive design, ensuring a consistent and user-friendly experience across various devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed
- React Native CLI installed

1. **Clone the repository**

   ```bash
   git clone https://github.com/Deepakt46/cinemate.git
   cd cinemate
   
2. **Intsall dependencies**

   ```bash
   npm install

3. **run the android app**
    ```bash
   npx react-native run-ios


4. **run the android app**
    ```bash
   npx react-native run-android




## Component Architecture

### Component 1: Splash Screen
- *Description*: Displays a small animation while the app is launching.
- *Purpose*: To give users a visually appealing introduction to the app.

### Component 2: Carousel for Upcoming Movies
- *Description*: A carousel component that showcases upcoming movies.
- *Data Source*: TMDB API endpoint /movie/upcoming.
- *Functionality*: Allows users to swipe through a series of upcoming movie posters.

### Component 3: FlatList for Trending Movies
- *Description*: A FlatList component displaying a list of trending movies.
- *Data Source*: TMDB API endpoint /trending/movie/day.
- *Functionality*: Presents a scrollable list of trending movies, offering an overview of popular titles.

## TMDB API Endpoints

1. *Upcoming Movies Endpoint*
   - Endpoint: /movie/upcoming
   - Usage: Fetches data about movies that are scheduled to be released soon.

2. *Trending Movies Endpoint*
   - Endpoint: /trending/movie/day
   - Usage: Retrieves a list of movies trending on a daily basis.

3. *Movie Search Endpoint*
   - Endpoint: /search/movie
   - Usage: Allows users to search for movies based on a query.

4. *Movie Details Endpoint*
   - Endpoint: /movie/${id}
   - Usage: Provides detailed information about a movie, based on the movie's ID.




# Design Explanations

## Movie Listings with React Native Snap Carousel, FlatList,Stack Navigation and Bottom Tab Navigation

The movie listing feature integrates multiple components to provide a dynamic and user-friendly experience.

### **React Native Snap Carousel for Upcoming Movies**

- **Intuitive Navigation:**
  - Swipe through upcoming and trending movies with ease, leveraging the intuitive navigation of `react-native-snap-carousel`.

- **Responsive Design:**
  - Ensure a seamless user experience on both Android and iOS devices with a responsive layout that adapts to various screen sizes.

### **FlatList for Trending Movies**

- **Efficient Rendering:**
  - Utilize `FlatList` for rendering trending movies efficiently, optimizing memory usage and providing a smooth scrolling experience.

- **Infinite Scroll:**
  - Implement infinite scroll for the trending movies list, allowing users to explore an extensive collection effortlessly.

- **Customizable Rendering:**
  - Leverage the flexibility of `FlatList` to customize the presentation of each movie item, enhancing visual appeal.

### **Navigation and Detail Screens**

- **Seamless Transition:**
  - Navigate seamlessly between different sections, including the carousel, trending movies list, and detailed screens.

### **Bottom Tab Navigation for Movie Categories**

- **Clear Categorization:**
  - Enhance user accessibility with a bottom tab navigation bar, categorizing content into "Upcoming" and "Trending."

- **Discoverability:**
  - Improve discoverability with carefully chosen tab icons and labels, allowing users to easily switch between movie categories.

- **Responsive Design Across Tabs:**
  - Maintain a consistent and visually harmonious experience across various devices with a responsive design for the bottom tab navigation.

### **Overall User Experience**

The combined use of `react-native-snap-carousel`, `FlatList`, and a bottom tab navigation bar creates a holistic and user-centric movie listing experience. Users can intuitively navigate, explore, and engage with upcoming and trending movies seamlessly on both Android and iOS devices.




  
