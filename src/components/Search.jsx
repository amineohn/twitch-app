import React, { useState, useEffect } from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
const Search = () => {
    const [search, setSearch] = useState("");
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            try {
                return (
                    <ReactTwitchEmbedVideo channel="gotaga" />
                )
            } catch (err) {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }

        };
        fetchData();
    }, []);
    const handleSearchChange = event => {
        setSearch(event.target.value);
    };
    const renderError = () => {
        if (isError) {
            return (
                <div className="message" role="alert">
                    Unable to get stream.
                </div>
            );
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();
        setIsError(false);
        try {
            return (
                <ReactTwitchEmbedVideo channel={search} />
            )
        }
        catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }
    };

    return (
        <> 
        {renderError()}
                    <div className="flex flex-col items-center justify-center px-6 py-10 rounded">
                    <input
                        value={search}
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Search"
                        className="h-10 px-5 pr-16 text-sm text-white placeholder-white transition duration-150 bg-purple-300 rounded-lg dark:text-white dark:border-gray-600 dark:placeholder-white dark:bg-gray-800 focus:outline-none w-72"
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="absolute top-0 right-0 hidden mt-5 mr-4"
                    >
                    </button>
                        <ReactTwitchEmbedVideo channel={search} key="" channelName="lefakeveny" channelID="456543454" control="true" />
                    </div>
                    </>
    );
};

export default Search;
