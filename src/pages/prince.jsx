import Navigation from "../components/Navigation";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
const Prince = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center px-6 py-10 rounded fade-in">
        <ReactTwitchEmbedVideo channel="Prince__OFF" />
      </div>
    </>
  );
};
export default Prince;