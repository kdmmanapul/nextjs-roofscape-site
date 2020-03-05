import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./homepage"

import MessengerCustomerChat from 'react-messenger-customer-chat';

// const Home = () => (
//   <div>
//     <Header/>
//     <HomePage/>
//     <AboutPage/>
//     <Footer/>
//   </div>
// )

function Home() {
  const router = useRouter()
  return(
    <div>
      <Header/>
      <HomePage/>
      <MessengerCustomerChat
        themeColor="#0084FF"
        pageId={2071208729806750}
      />
      <Footer/>
    </div>
  )
}

export default Home