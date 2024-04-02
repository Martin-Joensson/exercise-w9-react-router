import { songs } from "../data/songs.json";
import { Link } from "react-router-dom";
// TODO: Import necessary modules and data
export const Home = () => {
  // TODO: Implement logic to display the list of songs
  console.log(songs);
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        <div>
          {songs.map((song, index) => (
            <div>
              <li>
                <Link
                  to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}
                  key={index}
                >
                  {song.title}
                </Link>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
