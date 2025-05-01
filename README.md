# Movie Explorer

Movie Explorer is a React-based web application that allows users to explore movies, view details, and manage a personalized movie list. The app integrates with The Movie Database (TMDB) API to fetch movie data.

## Features

- **Login Page**: A cinematic login page with validation for email and password fields.
- **Search Functionality**: Search for movies directly from the header.
- **Movie Details**: View detailed information about a movie, including similar movies.
- **My List**: Add or remove movies from a personalized list.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Material-UI**: Component library for styling and layout.
- **React Router**: For client-side routing.
- **TMDB API**: Fetches movie data, including details, credits, and similar movies.

## API Integration

The application uses the TMDB API to fetch movie data. Below are the key endpoints utilized:

- **Popular Movies**: `/movie/popular`
- **Top Rated Movies**: `/movie/top_rated`
- **Upcoming Movies**: `/movie/upcoming`
- **Now Playing Movies**: `/movie/now_playing`
- **Movie Details**: `/movie/{movie_id}`
- **Movie Credits**: `/movie/{movie_id}/credits`
- **Similar Movies**: `/movie/{movie_id}/similar`

### API Key

To use the TMDB API, an API key is required. Replace the placeholder in `src/api/tmdb.js` with your actual API key:

```javascript
const API_KEY = 'your_api_key_here';
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-explorer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-explorer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Folder Structure

- **src/**: Contains the source code.
  - **api/**: API integration logic.
  - **components/**: Reusable UI components.
  - **context/**: Context for managing global state.
  - **pages/**: Page components for different routes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
