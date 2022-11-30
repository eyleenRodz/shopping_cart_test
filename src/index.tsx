import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
	createBrowserRouter,
	RouterProvider,
	Navigate
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main';
import Cart from './pages/cart';

const router = createBrowserRouter([
	{
		path: '/',
		index: true,
		element: <Main />
	},
	{
		path: '/cart',
		element: <Cart />
	},
	{
		path: '/*',
		index: true,
		element: <Navigate to="/" />
	}
]);
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
	<>
		<Header />
		<RouterProvider router={router} />
		<Footer />
	</>
);
	