import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import '@/styles/globals.css'
import Header from '../../Components/ShereComponent/Header/Header'
import Footer from '../../Components/ShereComponent/Header/Footer/Footer'



export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )


}
