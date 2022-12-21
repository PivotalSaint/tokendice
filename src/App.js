import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import BlogList from './components/BlogList';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/"
              element={<Home />}
              />
            <Route path="/login"
              element={<Login />}
              />
            <Route path="/create"
              element={<SignupForm />}
              />
            <Route path="/gallery"
              element={<BlogList />}
              />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
