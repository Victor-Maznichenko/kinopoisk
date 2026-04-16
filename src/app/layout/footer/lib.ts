export const NAVIGATION_DATA = [
  [
    {
      title: 'Меню',
      links: [
        { label: 'Фильмы', route: '/movies' },
        { label: 'Сериалы', route: '/tv' },
        { label: 'Подборки', route: '/collections' }
      ]
    },
    {
      title: 'Подписка',
      links: [
        { label: 'Тарифный план', route: '#' },
        { label: 'Акции', route: '#' },
        { label: 'Подписка за баллы', route: '#' }
      ]
    }
  ],
  [
    {
      title: 'Кино и сериалы',
      links: [
        { label: 'Весь каталог', route: '/catalog' },
        { label: 'Комедии', route: '/catalog/genre/comedy' },
        { label: 'Драмы', route: '/catalog/genre/drama' },
        { label: 'Фэнтези', route: '/catalog/genre/fantasy' },
        { label: 'Триллеры', route: '/catalog/genre/thriller' },
        { label: 'Детективы', route: '/catalog/genre/detective' }
      ]
    }
  ],
  [{
    title: 'Сотрудничество',
    links: [
      { label: 'Размещение рекламы', route: '/advertising' },
      { label: 'Партнерам', route: '/partners' },
      { label: 'Партнерская программа', route: '/affiliate' },
      { label: 'Пользовательское соглашение', route: '/terms' },
      { label: 'Политика конфиденциальности', route: '/privacy' }
    ]
  }, { title: 'Вопросы и ответы', links: [] }]
];

export const CONTACTS = {
  title: 'Техническая поддержка',
  items: [
    { label: '8 800 800 80 80', href: 'tel:89204574579' },
    { label: 'support@mail.ru', href: 'mailto:victor_maznichenko@mail.ru' }
  ]
};

export const SOCIALS = {
  title: 'Подписывайтесь на нас',
  items: [
    { icon: 'Telegram' as const, href: 'https://t.me/victor_maznichenko' },
    { icon: 'Vk' as const, href: 'https://vk.com/victor_maznichenko' }
  ]
};
