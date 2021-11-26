import React from 'react';
import './App.css';
import ServiceSearch from './components/ServiceSearch';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <div className="container-md my-5">
      <ServiceSearch />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}
