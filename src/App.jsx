import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import './css/main.css'
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {

  const h1Productos = "Nuestros productos";
  const [cantItem, setCantItem] = useState(10);
  
  return (
    <BrowserRouter>
      <Header cantItem={cantItem} setCantItem={setCantItem} />
      <Routes>
        <Route path="/" element={<ItemListContainer h1Prods={h1Productos} />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer h1Prods={h1Productos} />}/>
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App