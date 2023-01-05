import Footer from "../../components/Footer/Footer"
import NavbarHome from "../../components/NavbarHome/NavbarHome"
import "./Home.css"



const Home = () => {
    return (
        <>
            <NavbarHome />

            <div className="bgimg" style={{backgroundColor: "grey", paddingTop: "10vh"}}>
            <h2>
            Find your perfect course
            <br/>
            to study abroad or online.
            </h2>
        </div>

        <div className="categories-container">
            <h1 style={{fontWeight: "500", height: "10vh", display: "flex", justifyContent: "center"}} >What course are you looking for?</h1>
            <div className="categories">
                <div className="category" >
                    <h2 style={{paddingBottom: "5vh"}}>Bachelors Portal</h2>
                    <h3 style={{paddingBottom: "5vh", fontWeight: "400"}}>Bachelor's programmes</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                    <button className="search-ctg-btn">Search Bachelors</button>
                </div>
                <div className="category">
                    <h2 style={{paddingBottom: "5vh"}} >Masters Portal</h2>
                    <h3 style={{paddingBottom: "5vh", fontWeight: "400"}} >Bachelor's programmes</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                    <button className="search-ctg-btn">Search Bachelors</button>

                </div>
                <div className="category">
                    <h2 style={{paddingBottom: "5vh"}}>PhD Portal</h2>
                    <h3 style={{paddingBottom: "5vh", fontWeight: "400"}}>Bachelor's programmes</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                    <button className="search-ctg-btn">Search Bachelors</button>

                </div>

            </div>
        </div>

        <div className="courses" >
            <div className="courses-img">
                <img src={require("../../data/ShortCourses.jpg")} style={{width: "auto", maxHeight: "100%"}} />
            </div>
            <div className="courses-desc">
                <h1 style={{paddingBottom: "5vh", fontWeight: "500"}}>Learn more in less time</h1>
                <p style={{paddingBottom: "5vh", fontWeight: "300", lineHeight: "25px"}} >Find and compare international summer/winter schools, study abroad semesters, conferences, short courses and certificate programmes across the world on 
                <a href="/" style={{textDecoration: "none"}} > Short Courses Portal</a>.</p>
                <button className="courses-btn" >Search Short Courses</button>
            </div>
        </div>

        <div style={{backgroundColor: "white"}} className="courses" >
            <div className="courses-img">
                <img src={require("../../data/DLP.jpg")} style={{width: "auto", maxHeight: "100%"}} />
            </div>
            <div className="courses-desc">
                <h1 style={{paddingBottom: "5vh", fontWeight: "500"}}>Study from the comfort of your home</h1>
                <p style={{paddingBottom: "5vh", fontWeight: "300", lineHeight: "25px"}} >Distance Learning allows you to get a high quality university education from anywhere in the world! Improve your education without compromising your job, your family or your personal plans. Developed with leading universities, 
                <a href="/" style={{textDecoration: "none"}} > Distance Learning Portal </a> helps you to find and compare distance and online degree programmes from different universities around the world.</p>
                <button className="courses-btn" >Search Distance Learning Programmes</button>
            </div>
        </div>

        <div className="more-help">
            <h1 style={{paddingTop: "40px", fontWeight: "450", height: "10vh", display: "flex", justifyContent: "center"}} >How can Studyportals help you even more?</h1>
            <div className="categories">
                <div className="category" >
                    <img src={require("../../data/Scholarship-01.jpg")} />
                    <h3 style={{paddingTop: "5vh", paddingBottom: "5vh", fontWeight: "400"}}>Find scholarships</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Over 1,000 scholarships and grants to finance the study of your dreams.</p>
                    <button className="search-ctg-btn">Search scholarships</button>
                </div>
                <div className="category">
                    <img src={require("../../data/stexx-01.jpg")} />
                    <h3 style={{paddingTop: "5vh", paddingBottom: "5vh", fontWeight: "400"}} >Write a review</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Your opinion can have an impact on fellow students who want to study abroad.</p>
                    <button className="search-ctg-btn">Review your University</button>

                </div>
                <div className="category">
                    <img src={require("../../data/Gift-01.jpg")} />
                    <h3 style={{paddingTop: "5vh", paddingBottom: "5vh", fontWeight: "400"}}>Get your enrolment gift</h3>
                    <p style={{paddingBottom: "5vh", textAlign: "center", fontWeight: "300"}}>Found your programme via Studyportals? Tell us where you started studying and get a gift!</p>
                    <button className="search-ctg-btn">Get your Gift</button>

                </div>

            </div>
        </div>

        <div className="students" >
            <div className="courses-desc">
                <h1 style={{paddingBottom: "5vh", fontWeight: "500"}}>Students about Studyportals</h1>
                <p style={{paddingBottom: "5vh", fontWeight: "300", lineHeight: "25px"}} >‘I started by searching on Google for courses that suites my interest and I was redirected to different websites, one of which is Studyportals.com, which turned out to be the most useful. I chose Vytautas Magnus University because it was the most affordable for me and the course completely suited my needs. Studyportals helped by giving me a wide range of detailed options of schools and courses to choose from. I did not have an idea of either the course or the university I wanted to attend. At the initial stage, before the application, I received all the necessary information about the course and school, through a direct website link to the course.’ – <i>Angela,  25 years, Nigeria</i></p>
                <button className="courses-btn" >Read more</button>
            </div>
            <div className="courses-img">
                <img src={require("../../data/gbandi.jpg")} style={{width: "auto", maxHeight: "100%"}} />
            </div>
        </div>

        <div className="updates">
            <h1 style={{paddingBottom: "5vh", fontWeight: "500"}}>Get free personalised updates</h1>
            <p style={{paddingBottom: "5vh", fontWeight: "300", lineHeight: "25px"}}>Receive monthly emails right to your inbox with programmes that match your individual profile as well as useful information to plan your study abroad journey. Join over 300,000 happy users today.</p>
            <button style={{padding: "25px 35px"}} className="courses-btn">Subscribe now</button>
        </div>

        <div className="blue-line"></div>

            <Footer />
        </>
    )
}

export default Home