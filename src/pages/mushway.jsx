import Navigation from "../components/Navigation";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import Circles from "../components/Circles";
const Mushway = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center px-6 py-10 rounded fade-in">
        <ReactTwitchEmbedVideo channel="Mushway" />
      </div>
      <Circles />
    </>
  );
};
export default Mushway;