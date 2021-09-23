import {Routes} from "../../routes";
import {IWorkPage} from "./index";
import good_okSlide1 from '../../img/goodok_slide1.jpg';
import good_okSlide2 from '../../img/goodok_slide2.jpg';
import good_okSlide3 from '../../img/goodok_slide3.jpg';
import cwSlide1 from '../../img/cw1.png';
import cwSlide2 from '../../img/cw2.png';
import cwSlide3 from '../../img/cw3.png';
import cwSlide4 from '../../img/cw4.png';
import cwSlide5 from '../../img/cw5.png';
import gsm from '../../img/gsm.jpg';
import crmSlide1 from '../../img/crmSlide1.jpg';
import crmSlide2 from '../../img/crmSlide2.jpg';








export const projectsConfig: Partial<Record<Routes, IWorkPage>> = {
    [Routes.GOODOK] : {
        projectTitle: 'МТС GOOD\'OK',
        projectDescription: 'Новый сервис установки мелодии вместо гудка от МТС',
        slides: [good_okSlide1, good_okSlide2, good_okSlide3],
        technologiesTitle: 'Проект написан на Next,js, React, TypeScript',
        technologiesList: ['Next.js','React', 'React Hooks', 'Styled Components', 'TypeScript', 'ES6+, axios, rest api', 'Git', 'React state manager (useRedux, useContext)'],
        contributionsToProjectList: ['За 3 месяца с нуля написан прототип нового сервиса, заложена архитектура проекта.',
             'Проект доведен до выпуска в прод',
            'Реализована сложная система маршрутизации внутри приложения.',
            'Реализована lazy load компонентов приложения, оптимизирован трафик, уменьшен размер бандла.',
            'Настроена гугл-аналитика для более чем 40 событий',
            'Специально для сайта создан рекламный виджет, размещенный на главном сайте МТС',
            'Существующий фронт перенесен на Next.js для улучшения SEO доступности сайта. Посещаемость выросла с 2800 человек в день до 4500 и продолжает расти'
        ],
        projectLink: 'https://goodok.mts.ru/'
    },
    [Routes.CLIENT_WORLD] : {
        projectTitle: 'MVP версия игры Мир клиента',
        projectDescription: 'MVP версия игры Мир клиента, знакомящая потребителя с товарами и услугами группы компаний МТС',
        slides: [cwSlide1,cwSlide2, cwSlide3, cwSlide4, cwSlide5],
        technologiesTitle: 'Проект написан на React, TypeScript',
        technologiesList: ['React', 'Effector', 'Styled Components', 'TypeScript', 'ES6+, Centrifuge (websocket), rest api', 'Git'],
        contributionsToProjectList: ['За пол года была написана браузерная MVP версия игры для МТС. В игровой форме пользователю доступно ознакомление с услугами компании, прохождение ежедневных квестов, покупка промокодов со скидками, общение в чате с виртуальным помощником.',
            'Написан с нуля модуль магазина в игре. Реализована логика покупки игровых предметов (купоны, промокоды МТС) с помощью вэб сокетов и REST запросов.',
            'Сконфигурированы и настроены вэб-сокеты, реализована логика общения с backend по ws протоколу.',
            'Реализована lazy load компонентов приложения, оптимизирован трафик, уменьшен размер бандла.',
            'Созданы сложные CSS анимации (keyframes + css transition).',
            'Реализована система звуков и музыки в приложении. Создан компонент настройки звуковых уведомлений.',
            'Создано множество кастомных и переиспользуемых на всём приложение реакт хуков.',
            'Написана логика работы маркеров и всплывающих подсказок в игре.',
            ' Настроена гугл-аналитика для более чем 100 событий в игре'
        ]
    },
    [Routes.GSM] : {
        projectTitle: 'Global System Monitoring',
        projectDescription: 'Система по контролю и мониторингу состояния серверов, коммутаторов и прочего оборудования',
        slides: [gsm],
        technologiesTitle: 'Проект написан на Angular 6, TypeScript. Backend на C#.',
        technologiesList: ['Angular 6', 'RxJS', 'SCSS', 'TypeScript', 'SignalR (websocket)', 'BPMN.js', 'Chart.js', 'ES6', 'REST API'],
        contributionsToProjectList: ['Доработан и улучшен существующий функционал приложения',
            'Создано множество компонентов, таких как личный кабинет пользователя, компонент изменения диапазонов порогов сенсоров устройств (исп. nouislider), карта сети, раздел автоматизации действий, управление метками доступа, журнал событий и прочее.',
            'Сконфигурированы и настроены вэб-сокеты, реализована логика общения с backend по ws протоколу.',
            'Реализована система управления доступом (роли) к разделам приложения на основе мапинга разрешений приходящих с бэка (roleGuard).',
            'Созданы сложные CSS анимации (keyframes + css transition).',
            'Настройка, редактирование системы ролей в приложении',
            'Реализован графический интерфейс вывода устройств на схематическую карту'
        ]
    },
    [Routes.CRM_SYSTEM] : {
        projectTitle: 'CRM система MasterCase (модуль почты)',
        projectDescription: 'Корпоративная CRM система, призванная решить и автоматизировать часть рутинных задач для малого и среднего бизнеса',
        slides: [crmSlide1, crmSlide2],
        technologiesTitle: 'Проект написан на Angular 7, TypeScript. Backend на node.js',
        technologiesList: ['Angular 7 (CLI)', 'RxJS', 'SCSS', 'TypeScript', 'Socket IO', 'Drag n drop, svg-animation, icon-fonts'],
        contributionsToProjectList: ['Реализована функциональность входа в систему. Почтовый модуль находится в стадии beta, активно тестируется и дополняется. \n',
        'В настоящий момент базовые функции почтового клиента работают исправно.'
        ]
    }
}