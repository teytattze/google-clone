import PaginationButtons from './PaginationButtons';

function SearchResult({ results }: { results: any }) {
	return (
		<div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
			<p className="text-gray-600 text-md mb-5 mt-3">
				About {results.searchInformation?.formattedSearchTime} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
			{results.items?.map((result: any) => (
				<div key={result.link} className="max-w-xl truncate mb-8">
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
					<p className="line-clamp-2 truncate">{result.snippet}</p>
				</div>
			))}
			<PaginationButtons />
		</div>
	);
}

export default SearchResult;
