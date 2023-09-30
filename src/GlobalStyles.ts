import { createGlobalStyle } from 'styled-components';

const GLobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;

		&,
		&::after,
		&::before {
			box-sizing: border-box;
		}
	}

	html {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
	}
`;

export default GLobalStyle;
