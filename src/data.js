export const currentYear = new Date().getFullYear()

export const profile = {
  name: 'Delvyn',
  role: 'Frontend Developer & Information Technology Student',
  tagline: 'Building thoughtful, modern, and easy-to-use interfaces.',
  location: 'Jakarta, Indonesia',
  email: 'delvyn@email.com',
  photo: '/images/profile.jpg',
  photoPath: 'public/images/profile.jpg',
  about: [
    'I am an Information Technology student focused on frontend development, shaping clear user flows and responsive interfaces.',
    'I enjoy collaborating across design and development, from Figma explorations to implementation with modern web and mobile tools.',
  ],
  skills: [
    'Next.js',
    'TypeScript',
    'React',
    'Flutter',
    'Figma',
    'Tailwind CSS',
    'Firebase',
    'PWA',
  ],
  socials: [
    { label: 'Email', href: 'mailto:delvyn@email.com' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Instagram', href: 'https://instagram.com/' },
  ],
}

const shot = (folder, id, label, device = '') => {
  const nested = device ? `${device}/` : ''
  const extension = folder === 'fti-news' || folder === 'altar' ? 'png' : 'jpg'
  const file = `${nested}${id}.${extension}`
  return {
    id: `${device || 'screen'}-${id}`,
    label,
    src: `/images/projects/${folder}/${file}${folder === 'fti-news' ? '?v=3' : folder === 'wanderwhale' ? '?v=1' : folder === 'altar' ? '?v=2' : ''}`,
    path: `public/images/projects/${folder}/${file}`,
    fullPage: folder === 'fti-news' || folder === 'wanderwhale' || (folder === 'altar' && id.endsWith('-design')),
  }
}

const ftiPages = [
  ['homepage', 'Homepage'],
  ['article', 'Article page'],
  ['kategori', 'Category page'],
  ['search', 'Search results'],
  ['login', 'Login'],
  ['forgot-password', 'Forgot password'],
  ['register', 'Registration'],
  ['profile', 'User profile'],
  ['bookmark', 'Saved articles'],
  ['penerbit', 'Publisher'],
  ['kontak', 'Contact'],
  ['about', 'About us'],
  ['terms', 'Terms of Use'],
  ['privacy', 'Privacy policy'],
  ['admin', 'Admin panel'],
]

export const projects = [
  {
    slug: 'fti-news',
    github: 'https://github.com/Llorente14/ftinews',
    year: '2025',
    title: 'FTI News',
    subtitle: 'News website',
    role: 'Search, Terms of Use, and Privacy Policy pages',
    description:
      'Developed the search, Terms of Use, and Privacy Policy pages for a news website using Next.js and TypeScript. The search connects to the backend in real time, includes pagination, and adapts to desktop, tablet, and smartphone screens.',
    tags: ['Next.js', 'TypeScript'],
    screens: [
      {
        group: 'Desktop',
        device: 'web',
        items: ftiPages.map(([id, label]) => shot('fti-news', id, label, 'desktop')),
      },
      {
        group: 'Smartphone',
        device: 'phone',
        items: ftiPages.map(([id, label]) => shot('fti-news', id, label, 'mobile')),
      },
    ],
  },
  {
    slug: 'wanderwhale',
    github: 'https://github.com/Llorente14/Wanderwhale',
    year: '2025',
    title: 'Wanderwhale',
    subtitle: 'Travel app',
    role: 'Login, registration, hotel checkout, and flight checkout',
    description:
      'Designed the login, registration, hotel checkout, and flight checkout screens in Figma and implemented them in Flutter. The app includes Firebase authentication connected to an Express.js backend, payment options, discount and promo code logic, reusable widgets, and Provider-based state management.',
    tags: ['Flutter', 'Firebase Authentication', 'Express.js', 'Provider'],
    screens: [
      {
        group: 'Mobile app',
        device: 'phone',
        items: [
          shot('wanderwhale', 'login', 'Login'),
          shot('wanderwhale', 'register', 'Register'),
          shot('wanderwhale', 'home', 'Home'),
          shot('wanderwhale', 'search', 'Search'),
          shot('wanderwhale', 'wishlist', 'Wishlist'),
          shot('wanderwhale', 'notification', 'Notification'),
          shot('wanderwhale', 'destination-detail', 'Destination detail'),
          shot('wanderwhale', 'discount', 'Discount'),
          shot('wanderwhale', 'discount-detail', 'Discount detail'),
          shot('wanderwhale', 'trip-list', 'Trip list'),
          shot('wanderwhale', 'create-trip', 'Create trip'),
          shot('wanderwhale', 'trip-detail', 'Trip detail'),
          shot('wanderwhale', 'tips-travel', 'Tips travel'),
          shot('wanderwhale', 'flight-recommendation', 'Flight recommendation'),
          shot('wanderwhale', 'flight-booking', 'Flight booking detail'),
          shot('wanderwhale', 'checkout-flight', 'Checkout flight'),
          shot('wanderwhale', 'hotel-recommendation', 'Hotel recommendations'),
          shot('wanderwhale', 'hotel-booking', 'Hotel booking detail'),
          shot('wanderwhale', 'checkout-hotel', 'Checkout hotel'),
          shot('wanderwhale', 'profile', 'Profile'),
          shot('wanderwhale', 'edit-profile', 'Edit profile'),
          shot('wanderwhale', 'settings', 'Settings'),
          shot('wanderwhale', 'help', 'Help & support'),
          shot('wanderwhale', 'about', 'About us'),
        ],
      },
    ],
  },
  {
    slug: 'altar',
    github: 'https://github.com/KamingLo/altar-frontend',
    year: '2026',
    title: 'ALTAR',
    subtitle: 'Assistant Lecture Tarumanagara',
    role: 'Frontend PWA',
    description:
      'Developed the frontend of a centralized administration system for teaching assistants at the Faculty of Information Technology. Built with Next.js as a Progressive Web App and styled with Tailwind CSS, it supports QR-based attendance, teaching log submissions, and attendance recaps.',
    tags: ['Next.js', 'Tailwind CSS'],
    screens: [
      {
        group: 'Public',
        device: 'web',
        items: [shot('altar', 'landing', 'Landing page')],
      },
      {
        group: 'Public UI designs',
        device: 'phone',
        items: [
          shot('altar', 'landing-design', 'Landing page UI design'),
          shot('altar', 'login-design', 'Login page UI design'),
        ],
      },
      {
        group: 'Coordinator',
        device: 'web',
        items: [shot('altar', 'coord-dashboard', 'Coordinator dashboard')],
      },
      {
        group: 'Coordinator UI designs',
        device: 'phone',
        items: [
          shot('altar', 'coord-dashboard-design', 'Coordinator dashboard UI design'),
          shot('altar', 'generate-qr-design', 'Generate QR UI design'),
          shot('altar', 'manajemen-asdos-design', 'Teaching assistant management UI design'),
          shot('altar', 'manajemen-kp-design', 'Replacement class management UI design'),
          shot('altar', 'manajemen-absensi-design', 'Attendance records UI design'),
          shot('altar', 'rekap-presensi-design', 'Attendance recap UI design'),
        ],
      },
      {
        group: 'Teaching assistant',
        device: 'web',
        items: [shot('altar', 'asdos-dashboard', 'Assistant dashboard')],
      },
      {
        group: 'Teaching assistant UI designs',
        device: 'phone',
        items: [
          shot('altar', 'asdos-dashboard-design', 'Assistant dashboard UI design'),
          shot('altar', 'scan-qr-design', 'Scan QR UI design'),
          shot('altar', 'check-in-design', 'Check-in UI design'),
          shot('altar', 'check-out-design', 'Check-out UI design'),
          shot('altar', 'presensi-online-design', 'Online attendance UI design'),
          shot('altar', 'request-kp-design', 'Replacement class request UI design'),
          shot('altar', 'riwayat-design', 'Attendance and request history UI design'),
          shot('altar', 'jadwal-design', 'Teaching schedule UI design'),
        ],
      },
    ],
  },
]
