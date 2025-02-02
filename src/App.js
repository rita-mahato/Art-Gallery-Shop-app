import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Cart } from './pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ArtCategory } from './pages/ArtCategory';
import { LoginSignup } from './pages/LoginSignup';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import painting_banner from './components/Images/painting_banner.png';
import photography_banner from './components/Images/photography_banner.png';
import sculpture_banner from './components/Images/Sculpture2.png';
import Product from './pages/Product';
// import { Main } from './components/Main/Main'
// import { ImageSlider } from './components/ImageSlider/ImageSlider';
// import { Images } from './components/Images'

function App() {
  // const slides = [
  //   { url: "/Images/image1.png", title: "wonen painting"},{url: "/Images/image2.png", title: "girl painting"} 
  //   ];
  // const ImageContainer = {
  //     width: "900px",
  //     height: "500px",
  //     margin: "0 auto",
  //     backgroundColor: 'rgb(227, 230, 234)',
  // }
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      {/* <div style={ImageContainer} > */}
      {/* <ImageSlider /> */}
       {/* <ImageSlider slides={slides} /> */}
      {/* </div> */}
      {/* <Main/> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path='/painting' element={<ArtCategory banner={painting_banner} category="painting"/>}/>
        <Route path='/photography' element={<ArtCategory banner={photography_banner} category="photography"/>}/>
        <Route path='/sculpture' element={<ArtCategory banner={sculpture_banner} category="sculpture"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
