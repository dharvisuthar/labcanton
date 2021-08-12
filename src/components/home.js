import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import avtarImg from "../images/img/avatar.jpg";
import img1Img from "../images/img/img1.jpg";
import img2Img from "../images/img/img2.jpg";
import img3Img from "../images/img/img3.jpg";
import img4Img from "../images/img/img4.jpg";
import img5Img from "../images/img/img5.jpg";
import img6Img from "../images/img/img6.jpg";
import img7Img from "../images/img/img7.jpg";
import img8Img from "../images/img/img8.jpg";
import img9Img from "../images/img/img9.jpg";
import img10Img from "../images/img/img10.jpg";
import img11Img from "../images/img/img11.jpg";
import img12Img from "../images/img/img12.jpg";
import img13Img from "../images/img/img13.jpg";
import img14Img from "../images/img/img14.jpg";
import img15Img from "../images/img/img15.jpg";
import img16Img from "../images/img/img16.jpg";
import img17Img from "../images/img/img17.jpg";
import img18Img from "../images/img/img18.jpg";
import img20Img from "../images/img/img20.jpg";
import img21Img from "../images/img/img21.jpg";
import img22Img from "../images/img/img22.jpg";
import img23Img from "../images/img/img23.jpg";
import img24Img from "../images/img/img24.jpg";
import img25Img from "../images/img/img25.jpg";
import img26Img from "../images/img/img26.jpg";
import img27Img from "../images/img/img27.jpg";
import img28Img from "../images/img/img28.jpg";
import aboutUsImg from "../images/img/about_us.jpg";
import team_tour_warm_upImg from "../images/img/team_tour_warm_up.jpg";
import hitPitchCatchZoneRentalImg from "../images/img/hit_pitch_catch_zone_rental.jpg";
import tunnelRentalImg from "../images/img/tunnel_rental.jpg";
import fullFacilityRentalImg from "../images/img/full_facility_rental.jpg";
import chrisYatesProImg from "../images/img/chris_yates_pro.jpg";
import jbImg from "../images/img/jb.jpg";
import orlandoMartinezImg from "../images/img/orlando_martinez.jpg";
import steveSimmonsImg from "../images/img/steve_simmons.jpg";
import elaineGerouImg from "../images/img/elaine_gerou.jpg";
import rickRojasImg from "../images/img/rick_rojas.jpg";
import slider1Img from "../images/img/slider1.jpg";
import slider3Img from "../images/img/slider3.jpg";
import slider4Img from "../images/img/slider4.jpg";
import { isMobile } from "react-device-detect";
AOS.init();
const Home = () => {

    return (
        <div>
            <div className="get-contact-div">
                <div className="get-contact-cardmedia"></div>
                <div className="get-contact-over-div">
                    <h1 className="get-contact-h1">Develop Your Game!</h1>
                    <div className="get-contact-h3-div">
                        <a className="get-contact-h3" href="#contactus">Contact us</a>
                    </div>
                    <div className="slider-contact-div"  style={{ display: isMobile? 'none':'block'}}>                    
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Conditioning</a>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Strength</a>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Balance</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Athlete</a>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Train</a>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Team</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                       </div>
                       <div className="slider-contact-div-mobile" style={{ display:isMobile? 'block':'none'}}>                         
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Conditioning</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Strength</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Balance</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Athlete</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Train</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={12}>
                                            <div className="get-contact-slider-div">
                                                <a className="get-contact-h3" href="#contactus">Team</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                     
                    </div>
                </div>
                <div className="get-contact-div-container">
                    <div className="get-contact-details-container">
                        <Row className="m-0">
                            <Col md={3} xs={3} className="p-0" >
                                <div className="text-center">
                                    <p className="pt-3">
                                        <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                                        <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                                        <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                                        <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                                        <i className="fa fa-star color-icon-yellow fa-lg" aria-hidden="true"></i></p>
                                    <p>5 (4 reviews)</p>
                                </div>
                            </Col>
                            <Col md={5} xs={5} className="p-0">
                                <div className="get-contact-sec-div">
                                    <p className="get-contact-details-sec-p">Closed</p>
                                    <p>Today: 04:00 PM - 10:00 PM</p>
                                </div>
                            </Col>
                            <Col md={4} xs={4} className="p-0">
                                <div className="text-center">
                                    <p className="get-contact-details-sec-p-yelow pt-4"><a href="https://maps.google.com/maps?q=42.2679758,%20-83.4973503"> <i className="fa fa-location-arrow mr-2 color-039be5 fa-lg" aria-hidden="true"><span className="ml-2">Directions</span></i></a></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


            <div className="cadet-blue-bg" id="ourservices">
                <h1 className="our-services-div-h1 ">Our Service</h1>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <div className="bg-white w-75 m-auto">
                            <Row>
                                <Col md={6} className="p-3">
                                    <h1 className="carousel-paper-grid-col-1-h1">Private and Semi Private Training</h1>
                                    <p className="p-3">For athletes, muscle memory is extremely important. And for hitters, the best way to improve baseball swing mechanics is through muscle memory training. The key is repetition. Consistent physical repetition helps develop a feel for the proper swing path and trains the brain on the impulses necessary to perform the desired action without conscious effort. Our trainers are skilled in identifying mechanics issues and developing a plan to fix the issue. A good trainer that has a plan and develops trust with the player, can help he or she really develop their game for the next level. All players that play this sport should work with a trainer as often as possible but especially during the off season.</p>
                                    <h3 className="what-we-offer-sec-div-first-col-sec-span pl-3"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=7&sView=day&sLoc=0" target="_blank" className="a-book-now">BOOK NOW</a></h3>
                                </Col>
                                <Col md={6}>
                                    <img src={slider1Img} className="slider-img" alt="Private and Semi Private Training"></img>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="bg-white w-75 m-auto">
                            <Row>
                                <Col md={6} className="p-3">
                                    <h1 className="carousel-paper-grid-col-1-h1">Team Training</h1>
                                    <p className="p-3">We offer a variety of opportunities for teams to come in and work out in our flexible facility. The facility is equipped with both softball and baseball pitching machines. Hitting Tees, band wall and pitching mounds. Teams are able to get in a complete workout just like in a larger facility.</p>
                                    <h5 className="what-we-offer-sec-div-first-col-sec-span-contact pl-3">Call us at <span className="font-weight-bold">734-530-3785</span></h5>
                                </Col>
                                <Col md={6}>
                                    <img src={slider1Img} className="slider-img" alt="Team Training"></img>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="bg-white w-75 m-auto">
                            <Row>
                                <Col md={6} className="p-3">
                                    <h1 className="carousel-paper-grid-col-1-h1">Camps - Classes</h1>
                                    <p className="p-3">The Lab will continue to offer classes for players of all skill levels as well as camps that will provide a fun yet competitive atmosphere for players to Develop their Game. Please check our website and Facebook for camp and class updates.</p>
                                    <h3 className="what-we-offer-sec-div-first-col-sec-span pl-3"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-8&sView=day&sLoc=0" target="_blank" className="a-book-now">CLICK HERE FOR OUR DYG CAMPS AND CLASSES</a></h3>
                                </Col>
                                <Col md={6}>
                                    <img src={slider3Img} className="slider-img" alt="Camps - Classes"></img>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="bg-white w-75 m-auto">
                            <Row>
                                <Col md={6} className="p-3">
                                    <h1 className="carousel-paper-grid-col-1-h1">Camwood ALL American 30 Day Hitting Program</h1>
                                    <p className="pl-3 pt-2">What are your hitting goals for next year? More Power? Better Average? Exit Velocity? Bat Speed? If you answered YES to any of these questions then this program is for you. We are making it easy for you to achieve your goals. (All American 30 day Program works best if you complete in 30 days or no longer than 60 days) All Camwood bats are available for use at the LAB. Players: Come in watch the youtube video and then follow the program for the day.</p>
                                    <p className="p-0 mb-2 pl-3">We have two options avialable:</p>
                                    <p className="p-0 mb-2 pl-3">Option 1: Self Paced 30 minute session</p>
                                    <p className="p-0 mb-2 pl-3">Option 2: Self Paced 30 minute session w/ trainer</p>
                                    <p className="what-we-offer-sec-div-first-col-sec-span-slider p-0 m-0 pl-3"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=14&sView=day&sLoc=0" target="_blank" className="a-book-now">HTTPS://CLIENTS.MINDBODYONLINE.COM/CLASSIC/WS?STUDIOID=907281&STYPE=-9&STG=14&SVIEW=DAY&SLOC=0</a></p>
                                </Col>
                                <Col md={6}>
                                    <img src={slider4Img} className="slider-img" alt="Camwood ALL American 30 Day Hitting Program"></img>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="about-us-div">
                <h1 className="about-us-div-h1">About Us</h1>
                <div className="what-we-offer-sec-div">
                    <div className="what-we-offer-sec-div-container">
                        <Row>
                            <Col md={7} xs={12}>
                                <p>Why Train at The Lab?</p>
                                <p>We offer a perfect combination of analytics and expert instruction at our indoor facility.</p>
                                <p>The Lab is a premiere baseball/softball training facility designed with the purpose to “Develop Your Game.”  In a science lab, you experiment to develop the perfect formula to create something that is sustainable.  The Lab concept comes from intense research of the best hitting facilities in Georgia, Florida and Arizona.  Our most unique feature is our 13 x 14 hitting zones.  These hitting zones are custom made and tailored for the serious ball player that understands that quality tee work is an integral part of developing the perfect swing for success.</p>
                                <p>The days of hitting in a long tunnel and the inefficiency of shagging balls are gone.  The game of baseball and softball is about quality reps in a short period of time that are repeatable and consistently performed.  There are many facilities that put up cages and provide players a place to hit.   However, The Lab is a baseball/softball facility that provides a higher level experience.  When players enter The Lab, their mentality, energy and competitive spirit will immediately change.  Their focus will be on quality reps with perfection as the only objective.</p>
                                <p>The Lab will also provide a certified training staff who has completed an extensive training program in order to provide quality assessments and training with a purpose.  The best ball players work with a private trainers.  The Lab’s trainers will incorporate the latest technology with the best training tools for the development of any player.</p>
                                <p>The Lab is not just a place to take batting practice, throw bullpen sessions or field ground balls. The Lab is a place to develop the winning techniques for success.  No matter what high school or travel organization, if players are not working 3 to 4 times a week, the game will dictate their success.  There are many places to work on your game, but only one place to Develop Your Game.  That place is The Lab.  </p>
                            </Col>
                            <Col md={5} xs={12}>
                                <img src={aboutUsImg} className="team-tour-worm-up-img" alt="The Lab" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="what-we-offer-div">
                <h1 className="what-we-offer-div-h1">What We Offer</h1>
                <div className="what-we-offer-sec-div">
                    <div className="what-we-offer-sec-div-container">
                        <Row>
                            <Col md={12} xs={12} className="p-3">
                                <p>For our new first-time users please register at the following link at Mindbody to schedule your conditioning classes at The Lab Canton:</p>
                                <p>If you are an existing Mindbody user, please scroll down to pick your conditioning class and select "<a link href="https://clients.mindbodyonline.com/asp/su1.asp?fl=true&tabID=2">Book now</a>".</p>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h1 className="what-we-offer-sec-div-first-col-h1">Team Tournament Warm Up</h1>
                                <span>Teams can come into our climate controlled facility for a proper warm up. We have Tees, L screens and mounds available for any type warm up to get your team ready to compete. No more hitting into a bownet on a small patch of grass. We are ready to meet your teams needs at a very affordable price. We are located inside the Arctic Edge skating rink just across the parking lot.  Balls included. TURF OR TENNIS SHOES ONLY!!</span>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={team_tour_warm_upImg} className="team-tour-worm-up-img" alt="What we offer" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={hitPitchCatchZoneRentalImg} className="team-tour-worm-up-img" alt="what we offer"/>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h1 className="what-we-offer-sec-div-first-col-h1">Hit - Pitch - Catch Zone Rental</h1>
                                <span>These (4) training zones can be used for pitching, soft toss, tee work, throwing and catching drills. Baseballs, Bean Bags, Tees and Soft Toss machines available. This is a great way for your player to get in the reps they need on a weekly basis. This is also a great time for a parent to spend some time coaching their players and providing feedback. The importance of quality reps will make the difference in your game.</span>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span pt-3"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=2&sView=day&sLoc=0" target="_blank" className="a-book-now">Book now</a></h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h1 className="what-we-offer-sec-div-first-col-h1">Tunnel Rental</h1>
                                <span>We offer (3) large 65ft tunnels for rent to develop any aspect of your game. Our tunnels are equipped with Pro mounds, baseballs, and tees. Players can work on their entire game with other players or a parent.</span>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span pt-3"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=9&sView=day&sLoc=0&sTrn=100000028" target="_blank" className="a-book-now">BOOK NOW</a><span className="what-we-offer-sec-div-first-col-sec-span-black"> - DYG Cage 1</span></h3>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=10&sView=day&sLoc=0&sTrn=100000028" target="_blank" className="a-book-now">BOOK NOW</a><span className="what-we-offer-sec-div-first-col-sec-span-black"> - DYG Cage 2</span></h3>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=13&sView=day&sLoc=0&sTrn=100000028" target="_blank" className="a-book-now">BOOK NOW</a><span className="what-we-offer-sec-div-first-col-sec-span-black"> - DYG Cage 3</span></h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={tunnelRentalImg} className="team-tour-worm-up-img" alt="Tunnel Rental" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={fullFacilityRentalImg} className="team-tour-worm-up-img" alt="Full facility" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h1 className="what-we-offer-sec-div-first-col-h1">Full Facility Rental</h1>
                                <span>Call us about our Full Facility rental, our space can accommodate all you team training needs. You can work on all aspects of the game with some creativity and imagination. Our staff can help with practice plans and drill demonstrations for your coaching staff.</span>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span-black pt-3">Call us now at 734-530-3785</h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">CHRIS YATES (Pro)</h4>
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">HITTING &amp; PITCHING INSTRUCTOR</h4>
                                <span>Coach Yates is a former player for the Houston Astros organization. He specializes in Hitting and Pitching for players of all skill levels. Coach Yates is currently coaching several youth travel teams in the area and believes fundamentals and hard work are keys to becoming a great baseball player. Coach Yates is excellent at developing left handed pitchers.</span>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span-black pt-3">Call or Text 734-330-3860 for Coach Yates availability</h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={chrisYatesProImg} className="team-tour-worm-up-img" alt="chris yates" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={jbImg} className="team-tour-worm-up-img" alt="JB"/>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">Binko John "JB"</h4>
                                <p>The Lab is excited to have coach John "JB" Binko join our training staff.</p>
                                <p>Coach Binko, was a 3 year starter for Swartz Creek High School Varsity program where he carried a .347 career average,while swiping 30 steals per year. Also was awarded a golden glove for his play at SS for 2000 and 2001.  Coach Binko then was able to continue his academic and playing career at Saginaw Valley State University, there he was able to hit .321 over his career and was a starter at CF, SS and for 3 years at 2nd.  After college Coach Binko joined the Army and once off active duty he returned to his high school alma mater as Varsity Head Coach. There within 2 years, he guided them to the division title and helped players continue their career playing into college.  He then made the jump to coaching travel ball and has been able to coach some of the best teams in the state.  At this time he started teaching hitting and fielding lessons as well. Coach Binko believes in utilizing the best technology available and creating proper mechanics at the plate and in the field.  He is a certified Blast Coach and utilizes the technology with his hitters to create an elite swing path and drive through the ball. Coach Binko has been able to work with both baseball and softball hitters into their college careers starting at ages as young as 8.  </p>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span-black"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=7&sView=day&sLoc=0&sTrn=100000035" target="_blank" className="a-book-now">BOOK NOW</a></h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">Orlando (Magic) Martinez</h4>
                                <span>Coach Orlando Martinez has worked with a number of top baseball players Michigan, Illinois and Canada. Coach Orlando is a detailed trainer that belives in the mesurables and improving them every session. He uses the latest technology and training to develop quality competitive players. Coach Orlando speciality is developing catchersm both baseball and softball.</span>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={orlandoMartinezImg} className="team-tour-worm-up-img" alt="Orlando Martinez" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={steveSimmonsImg} className="team-tour-worm-up-img" alt="Steve Simmons" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">Steve Simmons</h4>
                                <p>Coach Simmons is an excellent pitching instructor. He works with many pitchers at all levels in the Canton, Plymouth and Ann Arbor area.</p>
                                <p>Coach Simmons has also exclusively trained with Driveline in Seattle for velocity and strength development and will be implementing this approach with his students. Coach Simmons strives to work with coachable young athletes who want to buy into a process and see the rewards everyday. He focuses on working with pitchers of all ages and their parents who seek to have a plan to get better everyday and want to understand every step of their development. Steve is currently in school working on his masters degree and we are fortunate to have him join our team. Steve has a great story of determination and hard work and is a great instructor for players of all ages.</p>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span-black"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=7&sView=day&sLoc=0&sTrn=100000028" target="_blank" className="a-book-now">BOOK NOW</a></h3>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">ELAINE GEROU</h4>
                                <p>Pitching, hitting, fielding, and base running (sliding/diving) softball instructor </p>
                                <p>I am a driven, hard-working softball instructor with 12 years of competitive softball experience under my belt and have been dedicated to giving back to younger players and the game of softball through coaching since 2009. </p>
                                <p>I played collegiate softball at Concordia University Ann Arbor in the 2013/2014 season and was the captain of Schoolcraft College's first-ever women's softball team in the 2015/2016 season. At Plymouth High School, I was an All-State D1 Honorable Mention pitcher and played every position except catcher. </p>
                                <p>My freshman year, I pitched all of the playoff games to win the District title and go the Regional finals, helping me earn the P-CEP Freshman Athlete of the Year. I received team MVP awards 2 years and KLAA All Academic Excellence all 4 years. I also played top-level travel softball for 9 years, placing 2nd place in the USSSA Class B 14U World Series, where I earned Tournament Offensive MVP, and 5th place in the USSSA Class A 18U World Series. Throughout my travel years, I earned numerous game MVP awards, team awards, and made the USSSA All-State team several times. My competitive softball days are over, but I now love helping young athletes improve their skills and work ethics in order to reach their goals. Call 734-787-3410</p>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={elaineGerouImg} className="team-tour-worm-up-img" alt="Elaine Gerou"/>
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <img src={rickRojasImg} className="team-tour-worm-up-img" alt="Rick Rojas" />
                            </Col>
                            <Col md={6} xs={12} className="p-3">
                                <h4 className="what-we-offer-sec-div-first-col-sec-span-h4">RICK ROJAS</h4>
                                <p>Coach Rojas is currently coaching the Detroit Bees 13U and the 10U Hit Dogs travel baseball teams.  Coach Rojas has been coaching elite travel baseball for players ages 7 through 14 for 10 years. A teacher by trade, Coach Rojas knows which skills need to be developed by a player at an early age to become successful athletes and grow year after year. Coach Rojas believes a player development starts with supportive parents and players who enjoy the game and want to learn. He sees his coaching role as being the person who fosters an athlete’s enjoyment for the game. His coaching philosophy is for players to learn the correct movements and skills which are needed to build and learn the next skill. He engages all players with varied activities and correct repetitions.</p>
                                <h3 className="what-we-offer-sec-div-first-col-sec-span-black"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=907281&stype=-9&sTG=7&sView=day&sLoc=0&sTrn=100000008" target="_blank" className="a-book-now">BOOK NOW</a></h3>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div id="gallery" className="gallery-div">
                <h1 className="gallery-div-h1"> Gallery</h1>
                <div className="gallery-sec-div">
                    <div className="what-we-offer-sec-div-container">
                        <Row>
                            <Col md={3} xs={12} className="gallery-column">
                                <img src={img1Img} className="gallery-img" />
                                <img src={img5Img} className="gallery-img" />
                                <img src={img9Img} className="gallery-img" />
                                <img src={img13Img} className="gallery-img" />
                                <img src={img17Img} className="gallery-img" />
                                <img src={img22Img} className="gallery-img" />
                            </Col>
                            <Col md={3} xs={12} className="gallery-column">
                                <img src={img2Img} className="gallery-img" />
                                <img src={img6Img} className="gallery-img" />
                                <img src={img10Img} className="gallery-img" />
                                <img src={img14Img} className="gallery-img" />
                                <img src={img18Img} className="gallery-img" />
                                <img src={img23Img} className="gallery-img" />
                                <img src={img27Img} className="gallery-img" />
                                <img src={img26Img} className="gallery-img" />
                            </Col>
                            <Col md={3} xs={12} className="gallery-column">
                                <img src={img3Img} className="gallery-img" />
                                <img src={img7Img} className="gallery-img" />
                                <img src={img11Img} className="gallery-img" />
                                <img src={img15Img} className="gallery-img" />
                                <img src={img20Img} className="gallery-img" />
                                <img src={img24Img} className="gallery-img" />
                                <img src={img28Img} className="gallery-img" />

                            </Col>
                            <Col md={3} xs={12} className="gallery-column">
                                <img src={img4Img} className="gallery-img" />
                                <img src={img8Img} className="gallery-img" />
                                <img src={img12Img} className="gallery-img" />
                                <img src={img16Img} className="gallery-img" />
                                <img src={img21Img} className="gallery-img" />
                                <img src={img25Img} className="gallery-img" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="Customer-review-div" id="testimonials">
                <h1 className="Customer-review-h1">Customer Review</h1>
                <Row className="customer-review-container text-center">
                    <Col md={3} xs={12} className="customer-review-inner-div-text">
                        <img src={avtarImg} className="avatar" alt="avatar" />
                        <h1 className="customer-review-inner-div-text-h1">Danny L.</h1>
                        <h3 className="customer-review-inner-div-text-h3 ">02/08/2020</h3>
                        <span className="margin-top-20">
                            <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow  fa-lg" aria-hidden="true"></i>
                        </span>
                        <p classname="customer-review-inner-div-text-p">A+</p>
                    </Col>
                    <Col md={3} xs={12} className="customer-review-inner-div-text">
                        <img src={avtarImg} className="avatar" alt="avatar"  />
                        <h1 className="customer-review-inner-div-text-h1">Danny L.</h1>
                        <h3 className="customer-review-inner-div-text-h3 ">01/08/2020</h3>
                        <span className="margin-top-20">
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow fa-lg" aria-hidden="true"></i>
                        </span>
                        <p classname="customer-review-inner-div-text-p">Great instruction</p>
                    </Col>
                    <Col md={3} xs={12} className="customer-review-inner-div-text">
                        <img src={avtarImg} className="avatar" alt="avatar"  />
                        <h1 className="customer-review-inner-div-text-h1">Chris M.</h1>
                        <h3 className="customer-review-inner-div-text-h3 ">01/07/2020</h3>
                        <span className="margin-top-20">
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow fa-lg" aria-hidden="true"></i>
                        </span>
                        <p classname="customer-review-inner-div-text-p">Great indoor baseball facility to work on hitting and pitching.</p>
                    </Col>
                    <Col md={3} xs={12} className="">
                        <img src={avtarImg} className="avatar" alt="avatar"  />
                        <h1 className="customer-review-inner-div-text-h1">Caleb L.</h1>
                        <h3 className="customer-review-inner-div-text-h3 ">07/10/2019</h3>
                        <span className="margin-top-20">
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow fa-lg" aria-hidden="true"></i>
                        </span>
                        <p classname="customer-review-inner-div-text-p">The Lab has helped my son with his baseball throwing, fielding, hitting and pitching tremendously.</p>
                    </Col>
                    <div className="text-right customer-review-container padding-bottom-20">
                        <p className="color-icon-yellow"></p>
                        <span><span className="font-size-30 color-icon-yellow">5</span>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow mr-1 fa-lg" aria-hidden="true"></i>
                            <i className="fa fa-star color-icon-yellow start-icon-yellow fa-lg" aria-hidden="true"></i>
                        </span>
                        <p>Based on 4 reviews</p>
                    </div>
                </Row>
            </div>
            <div className="quoate-div">
                <h1 className="quoate-div-h1">Earn "Free Team Full Facility Rental" with our Loyalty program</h1>
            </div>
            <div className="information-div ">
                <Row>
                    <Col md={6} xs={12} className="text-center information-inner-div">
                        <h3 className="font-weight-bold">Earn points when you complete activites</h3>
                        <p className="font-weight-bold">Every time you Check-In</p>
                        <p>1 point</p>
                        <p className="font-weight-bold">Share on Social Media</p>
                        <p>5 point</p>
                        <p className="font-weight-bold">Post a review</p>
                        <p>5 point</p>
                    </Col>
                    <Col md={6} xs={12} className="text-center">
                        <h3 className="font-weight-bold">Redeem Points for rewards</h3>
                        <p className="font-weight-bold">Free Hit Zone Rental</p>
                        <p>15 point</p>
                        <p className="font-weight-bold">Free 30 min Tunnel rental</p>
                        <p>25 points</p>
                        <p className="font-weight-bold">Free 60 min Tunnel rental</p>
                        <p>50 points</p>
                        <p className="font-weight-bold">LAB Swag Gear $40 value</p>
                        <p>60 points</p>
                        <p className="font-weight-bold">Free Team Full Facility Rental</p>
                        <p>100 points</p>
                    </Col>
                </Row>
            </div>
            <div className="main-bg-subscribe">
                <div className="subscribe-main-inner-div">
                    <div className="padding-80">
                        <h1 className="subscribe-main-div-h1">Subscribe to receive more offers and news</h1>
                        <h2 className="subscribe-main-div-h2">Join thousands of awesome people, there is only one thing to do.</h2>
                        <span><input placeholder="Email Address" className="textbox-subscribe"></input><button className="btn-subscribe">SUBSCRIBE</button> </span>
                    </div>
                </div>
            </div>   
        </div>
    );
}
export default Home