import PaginationButtons from "./PaginationButtons";

interface result {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    metatags: Array<{
      "og:image": string;
      "apple-itunes-app": string;
      "og:type": string;
      "twitter:card": string;
      "twitter:title": string;
      "og:site_name": string;
      "og:title": string;
      "music:creator": string;
      title: string;
      "og:description": string;
      "twitter:creator": string;
      "article:author": string;
      "twitter:image": string;
      referrer: string;
      viewport: string;
      "og:url": string;
    }>;
    cse_image: Array<{
      src: string;
    }>;
  };
}

function SearchResult({ results }: { results: any }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedSearchTime} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result: result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResult;
