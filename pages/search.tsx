import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { GetServerSideProps } from 'next';
import Response from '../response';
import SearchResult from '../components/SearchResult';

function Search({ result }: { result: any }) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<SearchResult results={result} />
		</div>
	);
}

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const useDummyData = false;
	const startIndex = context.query.start || '0';

	console.log(context.query.term);

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
		  ).then((res) => res.json());

	console.log(data);

	return {
		props: {
			result: data,
		},
	};
};
