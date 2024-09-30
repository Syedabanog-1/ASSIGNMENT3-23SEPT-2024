import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import './app/globals.css';


function MyApp({ Component, pageProps } : any) {
  return (
    <div>
    <h1>Welcome to the Home Page</h1>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;