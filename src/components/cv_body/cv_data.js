export default {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START MAIN INFO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  phone:'+7 999 526 40 09',
  email:'safic1998@gmail.com',

  name:{
    ru:'Никита Cафронов',
    en:'Nikita Safronov',
  },

  language_skills:{
    ru:[
      ['Английский', 'B2'],
      ['Русский', 'Родной'],
      ['Японский', 'Базовый']
    ],
    en:[
      ['English', 'B2'],
      ['Russian', 'Native'],
      ['Japanese', 'Basic']
    ]
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END MAIN INFO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START IT SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  it_skills:[
    [
      'Python',
      ['TensorFlow', 'OpenCV', 'aiohttp', 'SQLAlchemy']
    ],
    [
      'Web',
      ['JavaScript', 'HTML', 'CSS', 'Vue.js']
    ],
    [
      'C/C++',
      ['STM32',  'Raspberry PI', 'other MCUs', 'FreeRTOS']
    ],
    [
      'Android',
      ['Java']
    ],
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END IT SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START TECH SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  tech_skills:[
    [
      'CAD',
      ['NX Siemens', 'Creo Parametric', 'SolidWorks']
    ],
    [
      'OS',
      ['Ubuntu 16.04']
    ],
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END TECH SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START ACHIEVEMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  achievements:[
    {
      ru:{
        events:[
          {
            name:'Всероссийский этап хакатона «Цифровой прорыв»',
            place:'2-е место'
          },
          {
            name:'Хакатон «Цифровой прорыв», Сибирский IT-Hub',
            place:'1-е место'
          },
        ],
      },
      en:{
        events:[
          {
            name:'All-Russian stage of the "Digital Breakthrough" Hackathon',
            place:'2nd place'
          },
          {
            name:'"Digital Breakthrough" hackathon, Siberian IT-Hub',
            place:'1st place'
          },
        ]
      },
      invariant:{
        year:2020
      }
    },
    {
      ru:{
        events:[
          {
            name:'Международный чемпионат FIRST Tech Challenge в Сент-Луисе, США',
            place:'ТОП 10 среди 144 команд'
          },
        ],
      },
      en:{
        events:[
          {
            name:'FIRST Tech Challenge World Championship in St. Louis, USA',
            place:'TOP 10 among 144 teams'
          },
        ]
      },
      invariant:{
        year:2016
      }
    },
    {
      ru:{
        events:[
          {
            name:'Всемирные соревнования World Robot Olympiad (WRO) в Дохе, Катар',
            place:'2-е место из 100+ команд',
          },
          {
            name:'Russian Robotics Olympiad (RRO), 200+ участников',
            place:'1-е место'
          },
        ]
      },
      en:{
        events:[
          {
            name:'World Robot Olympiad (WRO) in Doha, Qatar',
            place:'2nd place among 100+ teams',
          },
          {
            name:'Russian Robotics Olympiad (RRO), 200+ participants',
            place:'1st place'
          },
        ]
      },
      invariant:{
        year:2015
      }
    },
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END ACHIEVEMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START HOBBIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  hobbies:[
    {
      ru:{
        subject:'Научная фантастика',
        values:['чтение', 'написание']
      },
      en:{
        subject:'Sci-fi',
        values:['reading', 'writing']
      },
    },
    {
      ru:{
        subject:'Спорт',
        values:['плавание', 'бег']
      },
      en:{
        subject:'Sports',
        values:['swimming', 'running']
      },
    },
    {
      ru:{
        subject:'Игры',
        values:['Шахматы', 'Го', 'StarCraft II']
      },
      en:{
        subject:'Games',
        values:['Chess', 'Go', 'StarCraft II']
      },
    },
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END HOBBIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  education:[
    {
      ru:{
        name:'Санкт-Петербургский Политехнический университет Петра Великого',
        period:'2016-2020',
        facts:[
          'Кафедра Мехатроники и Робототехники при ЦНИИ РТК',
          'Бакалавр в Мехатронике и Робототехнике (Средний балл 4.7/5.0)',
        ]
      },
      en:{
        name:'Peter the Great St. Petersburg Polytechnic University',
        period:'2016-2020',
        facts:[
          'Department of Mechatronics and Robotics at Russian State Scientific Center for Robotics and Technical Cybernetics',
          'B. Sc. in Mechatronics and Robotics (GPA 4.7/5.0)',
        ]
      }
    },
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START EMPLOYMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  employment:[
    {
      ru:{
        name:'Интернет-магазин орехов и сухофруктов Nut-Nut.ru (стартап)',
        position:'Сооснователь и Full-stack разработчик сайта магазина',
        period:'10.2020-наст. вр.',
        facts:[
          'Разработал кастомный движок интернет-магазина на python (aiohttp, sqlalchemy) и postrgesql',
          'Выполнил дизайн и верстку cайта с использованием реактивного фреймворка Vue.js',
        ],
        resources:[
          {
            text:'сайт магазина',
            href:'https://nut-nut.ru'
          },
        ]
      },
      en:{
        name:'Online shop of nuts and dried fruits Nut-Nut.ru (startup)',
        position:'Co-founder and Full-stack developer of the shop\'s website',
        period:'10.2020-present',
        facts:[
          'Developed a custom online store engine in python (aiohttp, sqlalchemy) and postgresql',
          'Completed the design and layout of the website using a reactive framework Vue.js',
        ],
        resources:[
          {
            text:'shop website',
            href:'https://nut-nut.ru'
          },
        ]
      },
    },

    {
      ru:{
        name:'Air&Soil Technologies (стартап)',
        position:'Сооснователь и Технический директор по информационным технологиям',
        period:'2019-2020',
        facts:[
          'Проектировал и разрабатывал систему для выборочного опрыскивания растений химикатами',
          'Организовал работу по обработке датасета и обучил нейронный классификатор культурных и сорных растений',
          'Принимал участие в разработке серии прототипов системы',
          'Отразил исследования и разработки в университетской выпускной квалификационной работе',
          // 'Познал всю глубину российской бюрократии',
        ],
        resources:[
          {
            text:'выпускная квалификационная работа',
            href:'https://nikitasafronov.ru/static/pdfs/graduation_work_paper.pdf'
          },
        ]
      },
      en:{
        name:'Air&Soil Technologies (startup)',
        position:'Co-founder & Chief Information Technology Officer',
        period:'2019-2020',
        facts:[
          'Designed and developed a system for selective spraying of plants with chemicals',
          'Organized the work on processing the dataset and trained the neural classifier for cultivated and weed plants',
          'Participated in the development of a series of prototypes of the system',
          'Reflected research and development in the university final qualifying work',
        ],
        resources:[
          {
            text:'final qualifying work (in Russian)',
            href:'https://nikitasafronov.ru/static/pdfs/graduation_work_paper.pdf'
          },
        ]
      },
    },

    {
      ru:{
        name:'Центральный научно-исследовательский институт Робототехники и Технической Кибернетики (ЦНИИ РТК)',
        position:'Производственная практика',
        period:'05-08.2019',
        facts:[
          'Разработал систему стерео-зрения для радиоуправляемого охранного робота, позволившую увеличить скорость захвата объекта в 3 раза, автоматизировав его',
        ],
        resources:[
          {
            text:'отчет по производственной практике',
            href:'https://nikitasafronov.ru/static/pdfs/one_turnable_camera_stereo_vision.pdf'
          },
        ]
      },
      en:{
        name:'Russian State Scientific Center for Robotics and Technical Cybernetics',
        position:'Internship',
        period:'05-08.2019',
        facts:[
          'Developed a stereo vision system for a radio-controlled security robot, which allowed to increase the speed of object capture by 3 times, automating it',
        ],
        resources:[
          {
            text:'internship report (in Russian)',
            href:'https://nikitasafronov.ru/static/pdfs/one_turnable_camera_stereo_vision.pdf'
          },
        ]
      },
    },
    {
      ru:{
        name:'ФабЛаб университета ИТМО',
        position:'IT-специалист и заведующий лабораторией',
        period:'10.2017-01.2019',
        facts:[
          'Обучил 30+ новых участников работе с оборудованием (лазерные станки, ЧПУ, 3д-принтеры)',
          'Участвовал в 15+ технических проектах как инженер-конструктор и разработчик ПО',
          // 'Среди этих проектов: НИР "Мобильная роботизированная платформа", распознавание автомобильных номеров, устройство для контроля аккуратности курьерской доставки',
          'Разумно выстраивал приоритеты проектов и распределял время между ними',
          'Консультировал 10+ инновационных проектов в лаборатории',
        ]
      },
      en:{
        name:'ITMO University’s FabLab',
        position:'IT specialist and head of the laboratory',
        period:'10.2017-01.2019',
        facts:[
          'Trained 30+ new participants to work with equipment (laser machines, CNC, 3d printers)',
          'Participated in 15 + technical projects as a design engineer and software developer',
          'Rationally prioritized projects and managed time between them',
          'Consulted 10+ innovative projects in the laboratory',
        ]
      },
    },
    {
      ru:{
        name:'Центр робототехники при Физико-Математическом Лицее №30',
        position:'Преподаватель и куратор',
        period:'09.2016-05.2017',
        facts:[
          'Обучил 20+ учеников старших классов программированию микроконтроллеров на C/C++ и основам схемотехники',
          'Курировал команду лицея по соревнованиям «FIRST Tech Challenge» в 2016-2017 игровом сезоне',
          'Помог организовать соревнования по робототехнике “Полигон ФМЛ 30” в январе 2017, в которых приняли участие 100+ команд',
        ]
      },
      en:{
        name:'Robotics Centre at Physics and Mathematics Lyceum 30',
        position:'Teacher and supervisor',
        period:'09.2016-05.2017',
        facts:[
          'Taught 20+ high school students how to program microcontrollers in C/C++ and the basics of circuit design',
          'Supervised the lyceum\'s team for the "FIRST Tech Challenge" competition in the 2016-2017 game season',
          'Helped to organize the robotics competition “Polygon PML 30" in January 2017, where participated 100+ teams',
        ]
      },
    },
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END EMPLOYMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START PROJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  projects:[
    {
      ru:{
        name:'Сайт клуба ветеранов',
        status:'Некоммерческий университетский проект',
        period:'10.2018-06.2020',
        facts:[
          'Получил легаси-код на чистом javascript и переписал его на Vue.js',
          'Улучшил дизайн и значительно расширил функционал сайта',
          'Занимался поддержкой и непрерывным улучшением сайта в течение 2-х лет',
          'Передал кодовую базу преемнику по окончании университета',
        ],
        resources:[
          {
            text:'сайт клуба ветеранов',
            href:'http://pvolenwo.ru/'
          },
        ]
      },
      en:{
        name:'Veterans club’s website',
        status:'Noncommercial university project',
        period:'10.2018-06.2020',
        facts:[
          'Received the legacy code in pure javascript and rewrote it in Vue.js',
          'Improved design and significantly extended the functionality of the website',
          'Engaged in the support and continuous improvement of the site for 2 years',
          'Handed over the codebase to a successor upon graduation',
        ],
        resources:[
          {
            text:'veterans club’s website',
            href:'http://pvolenwo.ru/'
          },
        ]
      },
    },
    {
      ru:{
        name:'Платный турникет в торговом центре в Вильнюсе, Литва',
        status:'Коммерческий проект',
        period:'06.2018–10.2018',
        facts:[
          'Спроектировал архитектуру многокомпонентной системы',
          'Интегрировал разнородные модули (монетоприемник, pos-терминал, и т. п.) в единое устройство',
          'Разработал отказоустойчивое ПО с обработкой широкого спектра исключительных ситуаций',
          'Собрал промышленную версию устройства, установил ее в торговом центре и ввел в эксплуатацию',
          'Прошел процедуру государственной сертификации устройства',
        ]
      },
      en:{
        name:'Paid turnstile in a shopping center in Vilnius, Lithuania',
        status:'Commercial project',
        period:'06.2018–10.2018',
        facts:[
          'Designed the architecture of a multi-component system',
          'Integrated heterogeneous modules (coin receiver, pos terminal, etc.) into a single device',
          'Developed fault-tolerant software that handles a wide range of exceptional situations',
          'Assembled an industrial version of the devise, installed it in a shopping center, and put it into operation',
          'Passed the procedure of state certification of the device',
        ]
      },
    },
    {
      ru:{
        name:'Звуковая скульптура «STELLA» с интерактивным управлением',
        status:'Коммерческий проект',
        period:'02.2018–08.2018',
        facts:[
          'Разработал программу для системы подсветки, которая визуализирует аудиопоток',
          'Создал панель управления для смены режимов работы',
        ],
        resources:[
          {
            text:'сайт проекта',
            href:'http://sonicsculpture.space/stella'
          },
        ]
      },
      en:{
        name:'Sonic sculpture «STELLA» with interactive control',
        status:'Commercial project',
        period:'02.2018–08.2018',
        facts:[
          'Developed a program for a backlight system that visualizes the audio stream',
          'Created a control panel for changing operating modes',
        ],
        resources:[
          {
            text:'project website',
            href:'http://sonicsculpture.space/en/stella'
          },
        ]
      },
    },
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END PROJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START SELF-EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  self_education:[
    {
      ru:{
        name:'Платформа открытого онлайн-образования «Stepic»',
        period:'2016-2018',
        facts:[
          'Изучил более 20 курсов, получил 6 сертификатов, из которых 3 с отличием (Python, Основы статистики, Введение в архитектуру ЭВМ)',
        ],
        resources:[
          {
            text:'профиль на Stepic',
            href:'https://stepik.org/users/28171578'
          },
        ]
      },
      en:{
        name:'"Stepic" open online education platform',
        period:'2016-2018',
        facts:[
          'Studied 20+ courses, received 6 certificates, of which 3 with distinction (Python, Fundamentals of Statistics, Introduction to Computer Architecture)',
        ],
        resources:[
          {
            text:'profile on Stepic',
            href:'https://stepik.org/users/28171578'
          },
        ]
      },
    }
  ],
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END SELF-EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

}
