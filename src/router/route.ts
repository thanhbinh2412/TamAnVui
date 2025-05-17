export const ROUTE = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      // return import('@/pages/HomePage.vue')
      return import('@/pages/ComingSoon.vue')
    },
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('@/pages/AboutUs.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
  },
  {
    path: '/doctor',
    name: 'Doctor',
    component: () => import('@/pages/Doctors.vue'),
  },
]
