import 'animate.css';
import './App.css';

import { Fragment, useState } from 'react';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import ProfileImg from './assets/me.jpg';
import QuestionMarkImg from './assets/question-mark.png';
import ViteLogo from './assets/vite.svg';
import ReactLogo from './assets/react.svg';
import TailwindLogo from './assets/tailwind.svg';
import HeadlessuiLogo from './assets/headlessui.svg';

import ObserveIntersection from './components/ObserveIntersection.tsx';
import AppNav from './components/AppNav.tsx';

function App() {
  const projects = [] ?? [
    {
      name: 'Your Way - Ministry of Transport and Road Safety',
      link: 'https://your-way.org.il/he',
      content:
        "Special and complex website involving data extraction from the Jerusalem Municipality's GIS system and the Ministry of Transportation's GTFS and receiving real-time information. I was responsible for all frontend development on this website.",
    },
    {
      name: 'HARAMA Golan Heights Project',
      link: 'https://harama.co.il/en',
      content:
        'A luxury project with simple, fast and extremely accessible code (over 96% on the Lighthouse Accessibility Index), developed from scratch using the latest technologies and testing tools, with a fully customized CMS.',
    },
    {
      name: 'Feibel 15',
      link: 'https://feibel-15.co.il',
      content:
        'Showcase of over 100 static mini-sites and landing pages, all meticulously built with modern, cutting-edge web technologies, and best practices, ensuring high performance and a seamless user experience across all devices.',
    },
    {
      name: 'Country Park',
      link: 'https://country-park.co.il/he',
      content:
        'Marketing Website for a Country Club with Near-Perfect Accessibility - almoust 100% on the Lighthouse Accessibility Index! Developed from scratch with a fully customized CMS.',
    },
    {
      name: 'Taaman Real Estate',
      link: 'https://www.taaman-nadlan.com/he',
      content:
        'Real Estate Marketing Website featuring dynamic investor relations data pulled from the stock exchange. Developed from scratch using testing tools, with a fully customized CMS.',
    },
  ];

  const allProjects = projects.map((p) => (
    <SwiperSlide
      key={p.name}
      className="mt-14 bg-white p-2 sm:p-5 lg:py-8 rounded-xl h-auto!">
      <div className="text-sm sm:text-base lg:text-lg font-normal">
        {p.name}
      </div>
      <p className="py-1">{p.content}</p>
      <a
        rel="noreferrer"
        href={p.link}
        target="_blank"
        className="underline hover:text-blue-950">
        View Site
      </a>
    </SwiperSlide>
  ));

  const [visibleMap, setVisibleMap] = useState<Record<string, boolean>>({});

  const handleInViewChange = (id: string, inView: boolean) => {
    setVisibleMap((prev) => ({ ...prev, [id]: inView }));
  };

  const getAnimationClass = (id: string) => {
    return visibleMap[id] ? 'animate__animated animate__fadeIn' : '';
  };

  return (
    <>
      <AppNav />

      <div className="absolute top-0 right-0 z-50 p-3 md:px-5 xmd:mt-8 font-light text-xs lg:text-sm">
        More of a Vue person?
        <a
          href="https://hadasbatmordechai.github.io/vue"
          className="block w-fit mx-auto mt-1 bg-indigo-200 hover:bg-indigo-300 transition-colors rounded-lg lg:rounded-xl px-1.5 py-0.5 lg:px-2.5 lg:py-1">
          Try Vue version
        </a>
      </div>

      <header className="bg-indigo-50 bg-[url('./assets/bg-pattern.png')] bg-size-[60px] px-8 md:px-10 lg:px-20 pb-8 md:pb-10 pt-16 md:pt-28 md:flex items-center">
        <div className="md:w-1/3">
          <img
            className="w-40 sm:w-48 lg:w-72 2xl:w-96 max-w-full mx-auto rounded-full aspect-square object-cover"
            src={ProfileImg}
            alt="Hadas Ben Mordechai profile image"
            width="400"
            height="400"
          />
        </div>
        <div className="md:flex-1 max-md:text-center max-md:pt-5 md:ps-10 lg:ps-20">
          <ObserveIntersection id="header" onChange={handleInViewChange}>
            <h1
              className={`${getAnimationClass('header')} text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-indigo-950 font-bold`}>
              Hadas Ben Mordechai
            </h1>
            <h2
              className={`${getAnimationClass('header')} animate__delay-1s text-lg sm:text-xl lg:text-3xl py-1 md:py-2 lg:py-5`}>
              Frontend Developer
            </h2>
            <p
              className={`${getAnimationClass('header')} animate__delay-2s font-light text-sm sm:text-base lg:text-lg 2xl:text-xl`}>
              Vue.js | JavaScript | Tailwind CSS
            </p>
            <div className="flex justify-center md:justify-start pt-5 lg:pt-10">
              <a
                href="#contact"
                className={`${getAnimationClass('header')} animate__delay-3s text-sm lg:text-base hover:text-white bg-indigo-400 hover:bg-indigo-500 transition-colors rounded-lg lg:rounded-xl px-3 py-1 lg:px-5 lg:py-2.5 mx-2 md:mx-0`}>
                Contact Me
              </a>
              <a
                href="#projects"
                className={`${getAnimationClass('header')} animate__delay-4s text-sm lg:text-base font-light bg-indigo-100 hover:bg-indigo-200 transition-colors rounded-lg lg:rounded-xl px-3 py-1 lg:px-5 lg:py-2.5 mx-2 md:ms-4`}>
                View Projects
              </a>
            </div>
          </ObserveIntersection>
        </div>
      </header>

      <section id="about">
        <h3>My story</h3>
        <h4>About me</h4>
        <p className="max-w-[50rem] pb-2">
          I'm a Full Stack Web Developer (with a strong focus on Frontend) with
          almoust 5 years of experience and a B.Sc. in Software Engineering
          (graduated <em>cum laude</em>).
        </p>
        <h4>What is this page?</h4>
        <div className="md:flex justify-between items-start">
          <div className="flex-1 md:pe-10">
            <p className="max-w-[40rem]">
              This landing page showcases the core technologies I work with
              daily.
              <br />
              As a twist, this time I built the page using{' '}
              <strong>React and TypeScript</strong> - instead of my usual stack
              of <strong>Vue and JavaScript</strong> - to explore a different
              approach and expand my frontend toolkit.
            </p>
            <ul className="list-image-[url(./assets/check.svg)] max-w-[40rem] py-1 [&_strong]:font-bold [&_li]:ms-6 [&_li]:ps-1 [&_li]:py-0.5">
              <li>
                This version was bootstrapped with <strong>Vite</strong>, using{' '}
                <strong>React</strong> frontend library, and{' '}
                <strong>TypeScript</strong>.
              </li>
              <li>
                From here, as in the Vue.js version -{' '}
                <strong>Tailwind CSS</strong> (in this project: version 4).
              </li>
              <li>
                For accessibility and effects, I also installed{' '}
                <strong>HeadlessUI</strong> and <strong>animate.css</strong>.
              </li>
              <li>
                We've recently started using <strong>Prettier</strong> (with
                custom formatting rules) and <strong>ESLint</strong> for code
                analysis - so of course, I added those too.
              </li>
              <li>
                Although I typically work with <strong>PhpStorm</strong> on
                Linux, I developed this page using <strong>VS Code</strong> on
                Windows.
              </li>
              <li>
                The project's codebase is managed with <strong>Git</strong> and
                hosted on GitHub Pages, with deployment automated by GitHub
                Actions.
              </li>
              <li>
                Typically, I implement Figma designs; Here, I used AI
                assistance.
              </li>
              <li>
                <strong>What's next?</strong> I might add some tests, maybe a
                few cool features - or I might decide to explore another new
                technology to broaden my skill set.
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 pt-5 md:pt-0">
            <ObserveIntersection id="techs" onChange={handleInViewChange}>
              <div className="grid grid-cols-4 md:grid-cols-2 gap-3 sm:gap-5 lg:gap-8 2xl:gap-10">
                <a
                  rel="noreferrer"
                  className={`${getAnimationClass('techs')} aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8`}
                  href="https://vite.dev"
                  target="_blank">
                  <img
                    className="block w-20 h-auto"
                    src={ViteLogo}
                    alt="Vite logo"
                    loading="lazy"
                  />
                </a>
                <a
                  rel="noreferrer"
                  className={`${getAnimationClass('techs')} animate__delay-1s aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8`}
                  href="https://react.dev/"
                  target="_blank">
                  <img
                    className="block w-20 h-auto"
                    src={ReactLogo}
                    alt="React logo"
                    loading="lazy"
                  />
                </a>
                <a
                  rel="noreferrer"
                  className={`${getAnimationClass('techs')} animate__delay-2s aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8`}
                  href="https://tailwindcss.com"
                  target="_blank">
                  <img
                    className="block w-20 h-auto"
                    src={TailwindLogo}
                    alt="Tailwind CSS logo"
                    loading="lazy"
                  />
                </a>
                <a
                  rel="noreferrer"
                  className={`${getAnimationClass('techs')} animate__delay-3s aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8`}
                  href="https://headlessui.com/v1"
                  target="_blank">
                  <img
                    className="block w-20 h-auto"
                    src={HeadlessuiLogo}
                    alt="HeadlessUI logo"
                    loading="lazy"
                  />
                </a>
              </div>
            </ObserveIntersection>
          </div>
        </div>
      </section>

      <section
        id="hobbies"
        className="bg-gradient-to-b from-indigo-50/10 via-white">
        <h3>Outside of code</h3>
        <h4>💖 My favorite things when I'm not coding:</h4>
        <ObserveIntersection id="favorite" onChange={handleInViewChange}>
          <ul className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8 max-w-[39rem] lg:max-w-[44rem] text-center pt-3 md:pt-5">
            <li
              className={`${getAnimationClass('favorite')} flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5`}>
              <svg
                className="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto p-1.5 sm:p-2 lg:p-3"
                role="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
              <span className="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
                Singing
              </span>
              <span className="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
                my #1 passion!
              </span>
            </li>
            <li
              className={`${getAnimationClass('favorite')} animate__delay-1s flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5`}>
              <svg
                className="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto mt-1 -mb-1 lg:mt-2 lg:-mb-2"
                role="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 17c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1m-9-5V5.75a1.75 1.75 0 013.5 0V12m0 0V5.75a1.75 1.75 0 013.5 0V12m-12 0h15"
                />
              </svg>

              <span className="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
                Swimming
              </span>
              <span className="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
                my newest obsession
              </span>
            </li>
            <li
              className={`${getAnimationClass('favorite')} animate__delay-2s flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5`}>
              <svg
                className="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto p-1.5 sm:p-2 lg:p-3"
                role="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>

              <span className="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
                Writing
              </span>
              <span className="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
                thoughts to paper
              </span>
            </li>
          </ul>
        </ObserveIntersection>
      </section>

      <section
        id="projects"
        className="text-[0.65rem] sm:text-xs lg:text-sm bg-indigo-50 pb-5">
        <h3 className="-mb-8 md:-mb-10">Selected projects</h3>
        <Swiper
          modules={[Navigation, A11y]}
          loop={true}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1.5}>
          {allProjects}
        </Swiper>
        {/*<swiper-container ref={swiperRef}>{allProjects}</swiper-container>{*/}
      </section>

      <section id="why" className="md:flex">
        <div className="max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <h3>Why me</h3>

          <TabGroup>
            <TabList className="flex justify-center sm:justify-start text-sm sm:text-base lg:text-lg mt-5">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? '' : 'hover:opacity-85'} w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#98FB98]`}>
                    Why work <br className="sm:hidden" />
                    with me?
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? '' : 'hover:opacity-85'} w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#FFDAB9]`}>
                    What am I <br className="sm:hidden" />
                    looking for?
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? '' : 'hover:opacity-85'} w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#B0E0E6]`}>
                    Final B.Sc. <br className="sm:hidden" />
                    Project
                  </button>
                )}
              </Tab>
            </TabList>
            <TabPanels className="text-sm sm:text-base/relaxed border-t border-[#808080]/30 px-1 sm:px-2 py-2 sm:py-3">
              <TabPanel>
                I'm passionate about writing clean code and have a sharp eye for
                detail. I care about crafting great user experiences - and an
                even better team vibe. I'm responsible and motivated, always
                learning, always growing, and above all: someone you can count
                on (just ask anyone I've worked with).
              </TabPanel>
              <TabPanel>
                A frontend position within a dynamic and innovative company,
                where I can continue to develop my skills, in a collaborative
                and supportive team that encourages growth. I want a role that
                makes me genuinely enthusiastic about my work and makes me
                excited to get out of bed in the morning.
              </TabPanel>
              <TabPanel>
                For my final project, I conducted research on anomaly detection.
                I developed and compared multiple methods for identifying
                anomalies and making the decisions according to the majority of
                votes. One of the main techniques I explored was machine
                learning - I was into AI long before it was cool!
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <ObserveIntersection id="ask" onChange={handleInViewChange}>
            <img
              className={`${visibleMap['ask'] ? 'animate__animated animate__fadeIn' : ''} hidden md:block w-24 h-auto`}
              src={QuestionMarkImg}
              alt=""
              loading="lazy"
            />
          </ObserveIntersection>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-b from-indigo-50/50 via-white">
        <h3>Get in touch</h3>
        <h4>I'd love to hear from you!</h4>
        <p className="pt-3">
          Feel free to connect with me on
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/hadas-ben-mordechai/"
            target="_blank"
            className="mx-1.5 inline-block underline hover:text-blue-950">
            LinkedIn
          </a>
          or send me an email to hadasi135 at gmail.com.
        </p>
      </section>

      <footer className="p-5 md:px-10 text-center text-xs lg:text-sm font-light bg-indigo-100">
        Copyright © {new Date().getFullYear()} All rights reserved
        <span className="max-sm:hidden"> | </span>
        <br className="sm:hidden" />
        Hadas Ben Mordechai
      </footer>
    </>
  );
}

export default App;
