import Navigation from "../components/Navigation";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
const Anas = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center px-6 py-10 rounded fade-in">
        <ReactTwitchEmbedVideo channel="Anas" />
      </div>
    </>
  );
};
export default Anas;