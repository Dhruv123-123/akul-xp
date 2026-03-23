import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Dhruv Ramasubban | Portfolio XP', // AKUL: updated
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://dhruvramasubban.com' // AKUL: updated URL
          },
          {
            name: 'title',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'description',
            content:
              'Interactive Windows XP portfolio of Dhruv Ramasubban — Software Engineer' // AKUL: updated
          },
          {
            name: 'keywords',
            content: 'portfolio, dhruv ramasubban, software engineer, developer, projects' // AKUL: updated
          },
          {
            name: 'author',
            content: 'Dhruv Ramasubban' // AKUL: updated
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'application-name',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:description',
            content:
              'Interactive Windows XP portfolio of Dhruv Ramasubban' // AKUL: updated
          },
          {
            name: 'twitter:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Dhruv Ramasubban' // AKUL: updated
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            property: 'og:description',
            content:
              'Interactive Windows XP portfolio of Dhruv Ramasubban' // AKUL: updated
          },
          {
            property: 'og:site_name',
            content: 'Dhruv Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            property: 'og:url',
            content: 'https://dhruvramasubban.com' // AKUL: updated
          },
          {
            property: 'og:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Dhruv Ramasubban' // AKUL: updated
          },
          {
            property: 'og:locale',
            content: 'en_US' // AKUL: changed to en_US
          },
          {
            property: 'og:locale:alternate',
            content: 'fr_FR'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Desktop | Dhruv Ramasubban - Portfolio XP', // AKUL: updated
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://dhruvramasubban.com/office' // AKUL: updated
          },
          {
            name: 'title',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'description',
            content:
              'Desktop of Dhruv Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'keywords',
            content: 'desktop, dhruv ramasubban, software engineer, portfolio, projects' // AKUL: updated
          },
          {
            name: 'author',
            content: 'Dhruv Ramasubban' // AKUL: updated
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'application-name',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:description',
            content:
              'Desktop of Dhruv Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'twitter:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Dhruv Ramasubban' // AKUL: updated
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'og:description',
            content:
              'Desktop of Dhruv Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'og:site_name',
            content: 'Desktop | Dhruv Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'og:url',
            content: 'https://dhruvramasubban.com/office' // AKUL: updated
          },
          {
            name: 'og:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Dhruv Ramasubban' // AKUL: updated
          },
          {
            name: 'og:locale',
            content: 'en_US' // AKUL: changed to en_US
          },
          {
            name: 'og:locale:alternate',
            content: 'fr_FR'
          }
        ]
      }
    }
  ]
})

export default router
