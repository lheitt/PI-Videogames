import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';
import App from './App';

test('renders loading text on landing page', () => {
  render(<BrowserRouter><Provider store = {store}><App /></Provider></BrowserRouter>);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
