import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import {UserProvider} from "../context/UserContext";



function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
      <Component {...pageProps} />
  </UserProvider>
  
  
  )
}

export default MyApp

