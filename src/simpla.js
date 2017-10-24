import Simpla from 'simpla'
import SimplaNetlify from 'simpla/adapters/netlify'

window.Simpla = Simpla

Simpla.init({
  /**
   * Github Repo
   * Repository where content will be stored (in a '_content' folder)
   */
  repo: 'jinksi/hyperstatic',

  /**
   * Auth adapter
   * Used to authenticate users with Github from your site
   * Included separately to simpla.js core
   */
  auth: new SimplaNetlify({ site: 'hyperstatic' }),

  /**
   * Public content source (optional)
   * Public URL of your content, defaults to fetching directly from GitHub
   * Push your content to a CDN like Netlify in production
   */
  source: 'https://simpla-content--hyperstatic.netlify.com',

  /**
   * Commit branch (optional)
   * Git branch Simpla commits new content to, defaults to 'master'
   * Change this in development to make non-production changes
   */
  branch: 'simpla-content',

  /**
   * Public directory (optional)
   * Base directory to store Simpla's '_content' folder
   * Defaults to the root of the repo
   */
  public: ''
})
