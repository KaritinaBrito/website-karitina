import { Data } from "../interfaces/Data";

import img1 from "../assets/portfolio/gymDesktop.png";
import img2 from "../assets/portfolio/kanban.png";
import img3 from "../assets/portfolio/movflixMobile.png";
import img4 from "../assets/portfolio/recipePageDesktop.png";
import img5 from "../assets/portfolio/checkoutMobile.png";
import img6 from "../assets/portfolio/edieMobile.png";
import img7 from "../assets/portfolio/ecommerceAngular.png";
import img8 from "../assets/portfolio/budget-example.png";
import img9 from "../assets/portfolio/todoAngular.png";
import img10 from "../assets/portfolio/ecommerceReactM.png";
import img11 from "../assets/portfolio/batatabitM.png";
import img12 from "../assets/portfolio/pwitterDesktop.png";
import img13 from "../assets/portfolio/starbucks_clone__home.png";
import img14 from "../assets/portfolio/dashboard-react-desk.png";
import img15 from "../assets/portfolio/top-movies-mobile.png";
import img16 from "../assets/portfolio/deliveryFoodDesktop1.png";
import img17 from "../assets/portfolio/adminPanel.png";
import img18 from "../assets/portfolio/adminSpotifyDesktop.png";
import img19 from "../assets/portfolio/homeDesktop.png";

export const dataReact: Data[] = [
    {
        id: 1,
        image: img13,
        title: "Page with functionality inspired by Starbucks with React and CSS.",
        github: "https://github.com/KaritinaBrito/starbucks-clone",
        demo: "https://effortless-concha-d35e08.netlify.app/",
    },
    {
        id: 2,
        image: img1,
        title: "Gym website developed with React and CSS.",
        github: "https://github.com/KaritinaBrito/gym-typescript",
        demo: "https://charming-chaja-cca4c0.netlify.app/",
    },
    {
        id: 3,
        image: img2,
        title:
            "Task list, CRUD created with React and CSS, allowing dragging tasks and task lists.",
        github: "https://github.com/KaritinaBrito/kanban-to-do",
        demo: "https://dashing-sherbet-4d9814.netlify.app/",
    },
    {
        id: 4,
        image: img3,
        title: "MovFlix page that consumes The movie DB API with React and CSS.",
        github: "https://github.com/KaritinaBrito/movFlix",
        demo: "https://unrivaled-cat-0184f5.netlify.app/",
    },
    {
        id: 5,
        image: img10,
        title: "Ecommerce website developed with React y Tailwind.",
        github: "https://github.com/KaritinaBrito/ecommerce-minimal-react",
        demo: "https://animated-tanuki-02cce1.netlify.app/",
    },
    {
        id: 6,
        image: img12,
        title: "Twitter clone developed with React y Tailwind.",
        github: "https://github.com/KaritinaBrito/pwitter-clone",
        demo: "https://pwitter-clone-lilac.vercel.app/",
    },
    {
        id: 7,
        image: img14,
        title:
            "Dashboard that allows you to navigate between different pages, with independent components with dark mode and light mode option",
        github: "https://github.com/KaritinaBrito/dashboard-app-react",
        demo: "https://dashboard-admin-react123.netlify.app/",
    },
    {
        id: 8,
        image: img15,
        title:
            "Page developed in Next.js, using theMoviedb API, styles with Tailwind and responsive design.",
        github: "https://github.com/KaritinaBrito/top-movies-guros.git",
        demo: "https://main--top-movies-guros.netlify.app/",
    },
];

export const dataAngular: Data[] = [
    {
        id: 2,
        image: img7,
        title: "Ecommerce with angular 17 with API consumption",
        github: "https://github.com/KaritinaBrito/store-angular-17",
        demo: "https://store-angular-17.web.app/?category_id=3",
    },
    {
        id: 3,
        image: img8,
        title:
            "Application that allows you to control expenses and budget balance.",
        github: "https://github.com/KaritinaBrito/budget-application",
        demo: "https://budget-demo.netlify.app/enter-budget",
    },
    {
        id: 4,
        image: img9,
        title: "ToDo list CRUD, allows you to filter by categories",
        github: "https://github.com/KaritinaBrito/todoApp",
        demo: "https://todoapp-2fbdd.web.app/",
    },
];

export const dataResponsive: Data[] = [
    {
        id: 1,
        image: img4,
        title: "Cooking recipe, page with responsive design based on given design",
        github: "https://github.com/KaritinaBrito/Recipe-page",
        demo: "https://karitinabrito.github.io/Recipe-page/",
    },
    {
        id: 2,
        image: img5,
        title: "Cooking recipe, page with responsive design based on given design",
        github: "https://github.com/KaritinaBrito/Recipe-page",
        demo: "https://karitinabrito.github.io/Recipe-page/",
    },
    {
        id: 3,
        image: img6,
        title: "Cooking recipe, page with responsive design based on given design",
        github: "https://github.com/KaritinaBrito/Recipe-page",
        demo: "https://karitinabrito.github.io/Recipe-page/",
    },
    {
        id: 4,
        image: img11,
        title: "Cooking recipe, page with responsive design based on given design",
        github: "https://github.com/KaritinaBrito/Recipe-page",
        demo: "https://karitinabrito.github.io/MobileFirst/",
    },
];

export const dataFullstack: Data[] = [
    {
        id: 1,
        image: img16,
        title: "Page developed with React, CSS, that allows simulating a purchase of different items, using Stripe for payment management, customer registration and login using API created with Express.js",
        github: "https://github.com/KaritinaBrito/delivery-food-fullstack/tree/master/frontend",
        demo: "https://delivery-food-fullstack-frontend.onrender.com/",
    },
    {
        id: 2,
        image: img17,
        title: "Store administration page, allows you to create, modify and delete items, inject them into a database, manage orders received from the frontend, change delivery status, created with Javascript, Node.js and Express.js",
        github: "https://github.com/KaritinaBrito/delivery-food-fullstack/tree/master/admin",
        demo: "https://delivery-food-fullstack-admin.onrender.com/orders",
    },
    {
        id: 3,
        image: img19,
        title: "Spotify clone page made with React and Tailwind, which allows you to play music between lists that are consumed from your own API, created with Node.js and express.js",
        github: "https://github.com/KaritinaBrito/spotify-clone-fullstack/tree/main/Spotify-Frontend",
        demo: "https://spotify-clone-frontend-cxja.onrender.com/",
    },
    {
        id: 4,
        image: img18,
        title: "Spotify clone administration page, allows you to list created songs and albums, create new songs and albums as well as delete records, so that they can be used from the Frontend. Created with Node.js and Express.js, using MongoDB.",
        github: "https://github.com/KaritinaBrito/spotify-clone-fullstack/tree/main/spotify-admin",
        demo: "https://spotify-clone-admin-yt50.onrender.com/",
    },
];