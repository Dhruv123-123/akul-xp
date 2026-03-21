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
        title: 'Akul Ramasubban | Portfolio XP', // AKUL: updated
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://akulramasubban.com' // AKUL: updated URL
          },
          {
            name: 'title',
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'description',
            content:
              'Interactive Windows XP portfolio of Akul Ramasubban — Software Engineer' // AKUL: updated
          },
          {
            name: 'keywords',
            content: 'portfolio, akul ramasubban, software engineer, developer, projects' // AKUL: updated
          },
          {
            name: 'author',
            content: 'Akul Ramasubban' // AKUL: updated
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
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'application-name',
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:description',
            content:
              'Interactive Windows XP portfolio of Akul Ramasubban' // AKUL: updated
          },
          {
            name: 'twitter:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Akul Ramasubban' // AKUL: updated
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            property: 'og:description',
            content:
              'Interactive Windows XP portfolio of Akul Ramasubban' // AKUL: updated
          },
          {
            property: 'og:site_name',
            content: 'Akul Ramasubban | Portfolio XP' // AKUL: updated
          },
          {
            property: 'og:url',
            content: 'https://akulramasubban.com' // AKUL: updated
          },
          {
            property: 'og:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Akul Ramasubban' // AKUL: updated
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
        title: 'Desktop | Akul Ramasubban - Portfolio XP', // AKUL: updated
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://akulramasubban.com/office' // AKUL: updated
          },
          {
            name: 'title',
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'description',
            content:
              'Desktop of Akul Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'keywords',
            content: 'desktop, akul ramasubban, software engineer, portfolio, projects' // AKUL: updated
          },
          {
            name: 'author',
            content: 'Akul Ramasubban' // AKUL: updated
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
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'application-name',
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'twitter:description',
            content:
              'Desktop of Akul Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'twitter:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Akul Ramasubban' // AKUL: updated
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'og:description',
            content:
              'Desktop of Akul Ramasubban — Interactive Windows XP portfolio experience' // AKUL: updated
          },
          {
            name: 'og:site_name',
            content: 'Desktop | Akul Ramasubban - Portfolio XP' // AKUL: updated
          },
          {
            name: 'og:url',
            content: 'https://akulramasubban.com/office' // AKUL: updated
          },
          {
            name: 'og:image',
            content: '/img/logo-portfolio-black.webp' // AKUL: updated
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Akul Ramasubban' // AKUL: updated
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
