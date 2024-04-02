// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import { songs } from "../data/songs.json"

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  const { songTitle } = useParams();

  const matchedSong = songs.find((song) => song.title.toLowerCase().replace(/ /g, "-") === songTitle)
  console.log("Song title: ", songTitle)
  console.log("Matched Song: ", matchedSong)
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)

  return (
    <>
      <div>
        <h2>Song Information</h2>
        <h3>Title: {matchedSong.title}</h3>
        <h3>By: {matchedSong.artist}</h3>
        <h3>Released: {matchedSong.year}</h3>
        {/* TODO: Display song details or a "Song not found!" message */}
      </div>
    </>
  );
}

export default SongInfo;
