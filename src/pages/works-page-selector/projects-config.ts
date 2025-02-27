import { Routes } from '../../routes'
import { IWorkPage } from './index'
import good_okSlide1 from '../../img/goodok_slide1.jpg'
import good_okSlide2 from '../../img/goodok_slide2.jpg'
import good_okSlide3 from '../../img/goodok_slide3.jpg'
import cwSlide1 from '../../img/cw1.png'
import cwSlide2 from '../../img/cw2.png'
import cwSlide3 from '../../img/cw3.png'
import cwSlide4 from '../../img/cw4.png'
import cwSlide5 from '../../img/cw5.png'
import gsm from '../../img/gsm.jpg'
import crmSlide1 from '../../img/crmSlide1.jpg'
import crmSlide2 from '../../img/crmSlide2.jpg'

export const projectsConfig: Partial<Record<Routes, IWorkPage>> = {
    [Routes.GOODOK]: {
        projectTitle: "MTS GOOD'OK",
        projectDescription:
            'A new service by MTS that allows users to set a melody instead of a standard dial tone.',
        slides: [good_okSlide1, good_okSlide2, good_okSlide3],
        technologiesTitle:
            'The project is built using Next.js, React, TypeScript',
        technologiesList: [
            'Next.js',
            'React',
            'React Hooks',
            'Styled Components',
            'TypeScript',
            'ES6+, axios, REST API',
            'Git',
            'React state management (useRedux, useContext)',
        ],
        contributionsToProjectList: [
            'Developed a prototype of the new service from scratch within three months, laying the foundation for the project architecture.',
            'Successfully brought the project to production release.',
            'Implemented a complex internal routing system within the application.',
            'Integrated lazy loading for application components, optimizing traffic and reducing the bundle size.',
            'Configured Google Analytics to track over 40 different events.',
            'Developed a custom promotional widget specifically for the website, which was featured on the main MTS website.',
            'Migrated the existing front-end to Next.js to enhance SEO accessibility. As a result, daily traffic increased from 2,800 to 4,500 visitors and continues to grow.',
        ],
        projectLink: 'https://goodok.mts.ru/',
    },
    [Routes.CLIENT_WORLD]: {
        projectTitle: 'MVP Version of "Client’s World" Game',
        projectDescription:
            'An MVP version of the "Client’s World" game, introducing users to the products and services of the MTS Group.',
        slides: [cwSlide1, cwSlide2, cwSlide3, cwSlide4, cwSlide5],
        technologiesTitle: 'The project is built using React and TypeScript',
        technologiesList: [
            'React',
            'Effector',
            'Styled Components',
            'TypeScript',
            'ES6+, Centrifuge (WebSocket), REST API',
            'Git',
        ],
        contributionsToProjectList: [
            'Developed a browser-based MVP version of the game for MTS within six months. The game provides users with an interactive way to explore company services, complete daily quests, purchase discount promo codes, and chat with a virtual assistant.',
            'Built an in-game store module from scratch. Implemented the purchasing logic for in-game items (coupons, MTS promo codes) using WebSockets and REST requests.',
            'Configured and integrated WebSockets, establishing backend communication via the WS protocol.',
            'Implemented lazy loading for application components, optimizing traffic and reducing the bundle size.',
            'Created complex CSS animations (keyframes + CSS transitions).',
            'Implemented a sound and music system within the application, including a custom component for managing sound notifications.',
            'Developed multiple custom and reusable React hooks for use throughout the application.',
            'Implemented marker and tooltip functionality within the game.',
            'Configured Google Analytics to track over 100 in-game events.',
        ],
    },
    [Routes.GSM]: {
        projectTitle: 'Global System Monitoring',
        projectDescription:
            'A system for monitoring and controlling the status of servers, switches, and other equipment.',
        slides: [gsm],
        technologiesTitle:
            'The project is built using Angular 6 and TypeScript. The backend is powered by C#.',
        technologiesList: [
            'Angular 6',
            'RxJS',
            'SCSS',
            'TypeScript',
            'SignalR (WebSocket)',
            'BPMN.js',
            'Chart.js',
            'ES6',
            'REST API',
        ],
        contributionsToProjectList: [
            'Enhanced and improved existing application functionality.',
            'Developed multiple components, including a user dashboard, a component for adjusting device sensor threshold ranges (using nouislider), a network map, an automation section, access label management, an event log, and more.',
            'Configured and integrated WebSockets, establishing backend communication via the WS protocol.',
            'Implemented an access control system (roles) within the application, mapping backend permissions using role-based guards (roleGuard).',
            'Created complex CSS animations (keyframes + CSS transitions).',
            'Configured and refined the role-based access control system within the application.',
            'Developed a graphical interface for visualizing devices on a schematic map.',
        ],
    },
    [Routes.CRM_SYSTEM]: {
        projectTitle: 'CRM System "MasterCase" (Mail Module)',
        projectDescription:
            'A corporate CRM system designed to automate routine tasks for small and medium-sized businesses.',
        slides: [crmSlide1, crmSlide2],
        technologiesTitle:
            'The project is built using Angular 7 and TypeScript. The backend is powered by Node.js.',
        technologiesList: [
            'Angular 7 (CLI)',
            'RxJS',
            'SCSS',
            'TypeScript',
            'Socket.IO',
            'Drag & Drop, SVG animation, Icon Fonts',
        ],
        contributionsToProjectList: [
            'Implemented the authentication functionality for system login. The mail module is currently in beta testing and actively being improved.',
            'At present, the core features of the mail client are functioning smoothly.',
        ],
    },
}
