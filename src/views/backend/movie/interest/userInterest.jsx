import React, { useState } from 'react';
import { Link ,useHistory,useLocation} from "react-router-dom";


const UserInterest = () => {
  // Sample data for movies, shows, and web series
  const sampleData = {
    movies: [
      { title: 'The Dark Knight', genre: 'Action', description: 'A vigilante known as Batman battles the criminal underworld of Gotham City.' },
      { title: 'Inception', genre: 'Sci-Fi', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.' },
      { title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
      // Add more movies
    ],
    shows: [
      { title: 'Stranger Things', genre: 'Thriller', description: 'A group of kids investigates supernatural occurrences in their small town.' },
      { title: 'Breaking Bad', genre: 'Drama', description: 'A high school chemistry teacher turned methamphetamine manufacturer.' },
      { title: 'Game of Thrones', genre: 'Fantasy', description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.' },
      // Add more shows
    ],
    webSeries: [
      { title: 'The Mandalorian', genre: 'Sci-Fi', description: 'A lone gunfighter makes his way through the outer reaches of the galaxy.' },
      { title: 'The Witcher', genre: 'Fantasy', description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny.' },
      { title: 'Money Heist', genre: 'Crime', description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.' },
      // Add more web series
    ]
  };

  // State to store user interests
  const [interests, setInterests] = useState({
    movies: [],
    shows: [],
    webSeries: []
  });

  // Handler function to add interest
  const addInterest = (type, interest) => {
    setInterests(prevInterests => ({
      ...prevInterests,
      [type]: [...prevInterests[type], interest]
    }));
  };

  
  const handleSubmit = () => {
    // Perform actions such as saving the interests to a database
    console.log('Interests submitted:', interests);
  };

  return (
    <div>
      <h2>User Interests</h2>
      <div>
        <h3>Movies</h3>
        <ul>
          {sampleData.movies.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong> - {movie.genre}<br />
              {movie.description}<br />
              {/* You could add a trailer or a thumbnail here */}
              <button onClick={() => addInterest('movies', movie.title)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Shows</h3>
        <ul>
          {sampleData.shows.map((show, index) => (
            <li key={index}>
              <strong>{show.title}</strong> - {show.genre}<br />
              {show.description}<br />
              {/* You could add a trailer or a thumbnail here */}
              <button onClick={() => addInterest('shows', show.title)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Web Series</h3>
        <ul>
          {sampleData.webSeries.map((webSeries, index) => (
            <li key={index}>
              <strong>{webSeries.title}</strong> - {webSeries.genre}<br />
              {webSeries.description}<br />
              {/* You could add a trailer or a thumbnail here */}
              <button onClick={() => addInterest('webSeries', webSeries.title)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      {/* Display user interests */}
      <div>
        <h3>Your Interests</h3>
        <ul>
          {interests.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
          {interests.shows.map((show, index) => (
            <li key={index}>{show}</li>
          ))}
          {interests.webSeries.map((webSeries, index) => (
            <li key={index}>{webSeries}</li>
          ))}
        </ul>
      </div>
      <Link to="/">
      <button onClick={handleSubmit}>Submit</button>
      </Link>
    </div>
  );
};

export default UserInterest;
