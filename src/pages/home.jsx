import Navigation from "../components/Navigation";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
const Home = () => {
  return (
    <>
    <Navigation />
      <div className="flex flex-col items-center justify-center px-6 py-10 rounded">
        <ReactTwitchEmbedVideo channel="shironamie" />
      </div>
      </>
  );
}
export default Home;