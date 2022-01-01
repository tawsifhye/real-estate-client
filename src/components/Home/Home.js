import Review from '../Review/Review'
import './Home.css'
import OurAgent from '../OurAgent/OurAgent';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Counter from '../Counter/Counter';

const Home = () => {

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            {/* Service Section Starts*/}
            <div id="service" className="mb-5">
                <Services></Services>
            </div>
            {/* service Section Ends */}
            {/* <Counter></Counter> */}
            <div className="pt-5">
                <Review></Review>
            </div>
            <div className="pt-5">
                <OurAgent></OurAgent>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Home;