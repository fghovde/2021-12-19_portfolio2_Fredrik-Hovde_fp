import NextHead from 'next/head';

export default function Head({ title = '' }) {
	return (
		<NextHead>
			<title>
				{title}
				{title ? ' | ' : ''}RttN boardgame
			</title>
		</NextHead>
	);
}