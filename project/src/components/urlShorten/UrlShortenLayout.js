import React from "react";

// components
import Layout from "components/common/Layout";
import UrlShortenInput from "./UrlShortenInput";
import UrlShortenInsights from "./UrlShortenInsights";
import UrlsShortenedList from "./UrlsShortenedList";

const URLS = [
  {
    id: "1",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
  {
    id: "2",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
  {
    id: "3",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
  {
    id: "4",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
  {
    id: "5",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
  {
    id: "6",
    shortenedUrL: "https://sd.fy/xxxxx",
    fullUrl: "https://somelongwebsite.com/slashsomething",
  },
];


const UrlShorten = () => {
  const [urls, setUrls] = React.useState(URLS);

  React.useEffect(() => {
    // onMount => fetch urls shortened
    setUrls(URLS);
  }, []);
  
  return (
    <div>
      <Layout>
        <div className="flex items-center justify-between mt-20">
          <UrlShortenInput />
          <UrlShortenInsights />
        </div>
        <UrlsShortenedList urls={urls} />
      </Layout>
    </div>
  );
};

export default UrlShorten;
