import React, { useState, useEffect, useRef } from 'react';
import './Project.css';
import StackOverflow from '../../assets/project1.PNG'
import creditCard from '../../assets/creditcard.PNG'
import hostingSite from '../../assets/hostingsite.PNG'
import gamingLanding from '../../assets/gaminglanding.PNG'
import weatherApp from '../../assets/weatherapp.PNG'
import educationSite from '../../assets/educationsite.PNG'
import mealBook from '../../assets/mealbook.PNG'
import githubRepo from '../../assets/githubrepo.PNG'
import taxCalculator from '../../assets/taxcalculator.png'
import pulsePricing from '../../assets/pulse.PNG'
import podia from '../../assets/podia.PNG'

const Slider = () => {
    const [active, setActive] = useState(5);
    const [items, setItems] = useState([
        {
            date: '29th April 2023',
            title: 'Credit card landing page - UI',
            image: creditCard,
            description: 'This is a mockup project for any credit card landing page UI. While designing this project I get to learn about flexbox properties, positions, some transform animations and hover effects. This is done using HTML and Tailwind CSS.',
            point1:'Generalised UI design for credit card landing page.',
            point2:'Different layout methods to design.',
            point3:'Different CSS positions property.',
            point4:'Use case of z-index.',
            liveLink:'https://credit-card-landing-page-souvik-nath.netlify.app/',
            code:'https://github.com/souvikn18/FSJS-2.0/tree/main/Assignments/Credit%20card%20landing%20page',
        },
        {
            date: '8th May 2023',
            title: 'Hosting site landing page - UI',
            image: hostingSite,
            description:'This is a mockup project for any hosting site landing page UI. While designing this project I get to learn about flexbox properties, positions, some transform animations and hover effects. This is done using HTML and Tailwind CSS.',
            point1:'Generalised UI design for hosting site landing page.',
            point2:'Different layout methods and CSS positions to design.',
            point3:'Use case of "form" tag.',
            point4:'Use case of z-index and hover effects.',
            liveLink:'https://hosting-site-landing-souvik-nath.netlify.app/',
            code:'https://github.com/souvikn18/FSJS-2.0/tree/main/Assignments/Hosting%20Site%20landing%20page',
        },
        {
            date: '31st May 2023',
            title: 'Gaming landing page - UI',
            image: gamingLanding,
            description:'This is a mockup project for any gaming site landing page UI. While designing this project I get to learn about flexbox properties, positions, some transform animations and hover effects. This is done using HTML and Tailwind CSS.',
            point1:'Generalised UI design for gaming site landing page.',
            point2:'Different layout methods and CSS positions to design.',
            point3:'Different use case background image property.',
            point4:'Use case of z-index and hover effects.',
            liveLink:'https://gaming-landing-souvik-nath.netlify.app/',
            code:'https://github.com/souvikn18/FSJS-2.0/tree/main/Assignments/Gaming%20landing%20page',
        },
        {
            date: '29th July 2023',
            title: 'Weather App using weather API',
            image: weatherApp,
            description:'This is an weather app using paid version of weather api which was free for some initial days. For that reason some values will not show. Here you have to search for a location and you will get all the details about weather.',
            point1:'Get to learn about "async-await" and "fetch" method for API call.',
            point2:'Customised background weather for different weather conditions.',
            point3:'Fully responsive for mobile and desktops.',
            point4:'HTML, CSS, and JavaScript used in this project.',
            liveLink:'https://weather-app-souvik-nath.netlify.app/',
            code:'https://github.com/souvikn18/Weather-app-FSJS2.0'
        },
        {
            date: '9th September 2023',
            title: 'An educational site clone - UI',
            image: educationSite,
            description:'This is a UI clone of home page of an educational site using re-usable components. Implemented theme switcher in this project. This is not for any promotion, just for my learning and educational purpose.',
            point1:'Use case of React re-usable components.',
            point2:'Application of context API while using theme switching.',
            point3:'Fully responsive for large and extra large screens.',
            point4:'ReactJS, TailwindCSS, and Flowbite used to create this project',
            liveLink:'https://ineuron-homepage-souvik-nath.netlify.app/',
            code:'https://github.com/souvikn18/iNeuron-Home-page-clone-using-React-FSJS2.0'
        },
        {
            date:'4th January 2024',
            title:'The Meakbook app using Meal-db',
            image: mealBook,
            description:'This is a React app using Meal-db API. Here you have to search for any recepie and you get all the details about that recepie, like How to cook, Ingredients, Recepie video link and all. This is a fully responsive page for mobile, tablets, and desktops.',
            point1:'Get to learn about npm package named "Axios".',
            point2:'Gained a lot of knowledge about state and props in React.',
            point3:'User will get a toast message for unsuccessful search result.',
            point4:'ReactJS, TailwindCSS, Axios, react-toastify are used to create this project.',
            liveLink:'https://meal-db-react-app.vercel.app/',
            code:'https://github.com/souvikn18/Meal-db-react-app',
        },
        {
            date:'21st January 2024',
            title:'GitHub repository listing page',
            image: githubRepo,
            description:'GitHub REST API is used in this project. Here user have to search for a GitHub username and get all the details about the user like, user\'s beautiful photo, name, profile link, location, twitter link if available, and most importantly all the repositories.',
            point1:'This is a pure HTML, CSS, JavaScript project.',
            point2:'GitHub RESTful API used in this project.',
            point3:'"async-await" and "fetch" method used to call API.',
            point4:'Fully responsive for mobile, tablets, and desktops.',
            liveLink:'https://github-repositories-listing-page-nine.vercel.app/',
            code:'https://github.com/souvikn18/Github-Repositories-listing-page?tab=readme-ov-file'
        },
        {
            date: '5th February 2024',
            title: 'Stack Overflow Clone - Full stack',
            description: 'This is not exactly a clone of stack overflow but this follows some of functions. This is a MERN stack project created using following technologies like React, TailwindCSS, Redux toolkit, NodeJS, MongoDB, ExpressJS.',
            point1: 'User can signup or login with his/her credentials',
            point2:'User can ask questions to the community',
            point3: 'User can up vote or down vote questions according to their choise and answer.',
            point4: 'User can share any question and delete their own question.',
            image: StackOverflow,
            liveLink: 'https://stack-overflow-clone-mern-stack.vercel.app/',
            code: 'https://github.com/souvikn18/StackOverflow-clone-MERN-stack'
        },
        {
            date: '14th April 2024',
            title: 'Tax calculator - Web application',
            image: taxCalculator,
            description:'This is a basic project of tax calculator that calculate tax based on some criteria. This is one of an internship project. This is a very simple project but an interesting one for me. Learned a lot of core JavaScript and many things while creating this project',
            point1:'Get to learn about use case of tooltip.',
            point2:'Get to learn about error handling in an input field.',
            point3:'Fully responsive for mobile, tablets, and desktops.',
            point4:'This is pure HTML, CSS, and JavaScript project.',
            liveLink:'https://tax-calculator-fyle-six.vercel.app/',
            code:'https://github.com/souvikn18/Tax-calculator-Fyle'
        },
        {
            date: '22nd August 2024',
            title: 'Pulse pricing page - mock project',
            image: pulsePricing,
            description:'This is a mockup project that contains only the UI part of that particular page. Get to learn about different layouts and CSS animations while creating this project. Implemented different types of CSS selectors in this project.',
            point1:'Get to learn about cool button animations.',
            point2:'Different layout properties used in this project.',
            point3:'Use case of opacity and hover effect.',
            point4:'Fully responsive for large and extra large screens.',
            liveLink:'https://pulse-pricing-mock-project-souvik-nath.vercel.app/',
            code:'https://github.com/souvikn18/pulse-pricing-mockProject'
        },
        {
            date:'23rd August 2024',
            title:'Podia digital product page - mock project',
            image:podia,
            description:'This is a mockup project that contains only the UI part of that particular page. Get to learn about different layouts and CSS animations while creating this project. Implemented different types of CSS selectors in this project.',
            point1:'Get to learn about how to apply styles on window scroll event.',
            point2:'Different layout properties used in this project.',
            point3:'Use case of hover effect, transition duration and translate property.',
            point4:'Fully responsive for large and extra large screens.',
            liveLink:'https://podia-mock-project-souvik-nath.vercel.app/',
            code:'https://github.com/souvikn18/podia-mockProject'
        }
    ]);

    const cardRefs = useRef([]);

    useEffect(() => {
        const animation = () => {
            cardRefs.current.forEach((card, index) => {
                if (index === active) {
                    card.style.transform = `none`;
                    card.style.zIndex = 1;
                    card.style.opacity = 1;
                } else {
                    let stt = Math.abs(index - active);
                    card.style.transform = `translateX(${index > active ? 200 * stt : -200 * stt}px) scale(${1 - 0.32 * stt}) perspective(16px) rotateY(${index > active ? -1 : 1}deg)`;
                    card.style.zIndex = -stt;
                    card.style.opacity = stt > 2 ? 0 : 0.6;
                }
            });
        };
        animation();
    }, [active]);

    const nextSlide = () => {
        setActive(active + 1 < items.length ? active + 1 : active);
    };

    const prevSlide = () => {
        setActive(active - 1 >= 0 ? active - 1 : active);
    };

    return (
        <div className='bg-gradient-to-b from-[#282828] to-[#121212] lg:py-16 z-0' id='projects'>
            <h1 className='text-white text-center md:text-4xl text-2xl md:pt-16 md:pb-32 pt-6 pb-16'>PROJECTS</h1>
            <div className="slider z-10 lg:relative lg:w-[100%] lg:h-[800px] lg:overflow-hidden relative w-[100%] h-[700px] overflow-hidden">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="card text-slate-100 shadow-lg lg:w-[600px] lg:absolute lg:left-[calc(50%-300px)] lg:top-0 w-[300px] absolute left-[calc(50%-150px)]"
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <div>
                            <a href={item.liveLink} target='blank'><img src={item.image} alt='...' className="image rounded-b-[150px] lg:w-[500px] lg:my-0 lg:mx-[5.5%] w-[400px]" /></a>
                        </div>
                        <div className="info">
                            <div className="relative md:block hidden">
                                <h1>
                                    <span className='lg:text-[60px] text-[25px]'>{item.date.split(' ')[0]}</span><br/>
                                    <sup className='absolute lg:text-[15px] text-[10px] lg:top-[85px] top-[36px]' >{item.date.split(' ')[1]}</sup>
                                    <span className='lg:text-[20px] font-light text-[15px]'>{item.date.split(' ')[2]}</span>
                                </h1>
                            </div>
                            <div className="border-l-[2px] border-solid border-[#282828] h-auto hidden md:block" />
                            <div className="flex flex-col gap-4">
                                <h3 className='md:text-2xl text-lg font-semibold'>{item.title}</h3>
                                {/* <p>Lorem ipsum<br />11:00 am</p> */}
                                <p className='text-sm md:text-base'>{item.description}</p>
                                <ul className='list-disc list-inside text-slate-300 text-xs md:text-sm'>
                                    <li>{item.point1}</li>
                                    <li>{item.point2}</li>
                                    <li>{item.point3}</li>
                                    <li>{item.point4}</li>
                                </ul>
                                <div className='flex gap-4'>
                                    <a className='bg-cyan-800 lg:px-4 lg:py-2 lg:mb-4 rounded-sm hover:bg-cyan-700 duration-300 px-2 py-1 md:text-base text-sm' href={item.liveLink} target='blank'>LIVE PREVIEW</a>
                                    <a className='bg-cyan-800 lg:px-4 lg:py-2 lg:mb-4 rounded-sm hover:bg-cyan-700 duration-300 px-2 py-1 md:text-base text-sm' href={item.code} target='blank'>CODE</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
                <button className='absolute lg:left-[50px] lg:top-[40%] top-[30%] left-[10px] z-20' id="prev" onClick={prevSlide}>
                    {'<'}
                </button>
                <button className='absolute lg:right-[50px] lg:top-[40%] top-[30%] right-[10px] z-20' id="next" onClick={nextSlide}>
                    {'>'}
                </button>
            </div>
        </div>

    );
};

export default Slider;