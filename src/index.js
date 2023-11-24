import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/index.css';
import './Styles/GlobalSyle.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from "../src/Redux/Store"
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles/index.css';
import Footer from './Components/Global/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<Provider store={Store}>
		<BrowserRouter>
			<React.StrictMode>

				<App />
			

			</React.StrictMode>
			
		</BrowserRouter>
	</Provider>
);
