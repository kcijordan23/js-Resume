# js-Resume: Christian Adamson's personal website

A personal résumé/portfolio site for Christian Adamson (FluidSenses Ltd), built with
**Next.js 13**, **Tailwind CSS** and **Framer Motion**.

| Page | What's on it |
| --- | --- |
| **Home** (`/`) | Photo, animated headline, intro, "See my work", Contact, and a Download CV button once a CV is added |
| **About** (`/about`) | Biography, Skills, an Experience timeline, and an Education timeline that is hidden until you add entries |
| **Projects** (`/projects`) | A featured project and cards for the other projects, each linking to GitHub |
| 404 | A custom "page not found" page |

Every page has light and dark mode (it follows the visitor's system setting and remembers a manual switch), a mobile menu and a footer.

---

## Editing the content

**All the words on the site are in one file: [`src/data/site.js`](src/data/site.js).**
Change the text there and every page updates. You shouldn't need to touch the page or component files.

- Search the file for **`TODO`**. Those are the placeholders that still need your real details.
- To hide something, set it to `""` or leave its list empty `[]`. For example, the LinkedIn icon only appears once `social.linkedin` has a URL.
- **CV:** put the PDF in `public/` (e.g. `public/cv.pdf`) and set `cvUrl: "/cv.pdf"`. The Download CV button appears automatically.
- **Projects:** add or remove blocks in `projects.list`. Set `featured: true` on the one to show full-width at the top. For a screenshot, put the image in `public/images/projects/` and set `img` to its path. Without one, a coloured panel with the project type is shown.
- **Photos:** `public/images/profile/christian-home.png` (home page, transparent background) and `christian-about.jpg` (about page).
- **Colours:** `tailwind.config.js` (`primary` is the light-mode accent, `primaryDark` the dark-mode accent).

## Running it on your own computer

You need [Node.js](https://nodejs.org) (LTS) and Git.

```bash
git clone https://github.com/kcijordan23/js-Resume.git
cd js-Resume
npm install
npm run dev
```

Then open <http://localhost:3000>. Changes you save show up straight away.
`npm run build` does a full production build into the `out/` folder, the same build GitHub runs before publishing.

You can also do this with no installs: on GitHub choose **Code → Codespaces → Create codespace**
and run `npm install && npm run dev` in its terminal.

## Putting it online (GitHub Pages)

The site is published free on **GitHub Pages** at <https://kcijordan23.github.io/js-Resume/>.

- `.github/workflows/deploy.yml` builds the site on every pull request (so problems show up before merging) and publishes it whenever `main` changes. You don't have to do anything; just merge or push to `main`.
- The site is exported as plain static files (`output: 'export'` in `next.config.js`), which is what GitHub Pages needs. Images are served as-is rather than resized on the fly, so keep photos to a sensible size (under ~1600px wide).
- **One-time setup:** in the repo on GitHub go to **Settings → Pages** and set **Source** to **GitHub Actions**.
- Progress and any errors show under the repo's **Actions** tab.

### Using your own domain (e.g. fluidsenses.com)

1. In **Settings → Pages → Custom domain**, enter the domain and save. Tick **Enforce HTTPS** once it's offered.
2. At your domain registrar, add the DNS records GitHub shows: four `A` records for the root domain, or a `CNAME` record pointing `www` to `kcijordan23.github.io`.
3. In `.github/workflows/deploy.yml`, change `BASE_PATH: /js-Resume` to `BASE_PATH: ""`, because on its own domain the site sits at the root.

---

## Project history

This site started from CodeBucks' **Next.js Developer Portfolio** starter code, which accompanies the YouTube tutorial
["Create a Stunning Portfolio Website with Next.js, Tailwind CSS and Framer Motion"](https://youtu.be/Yw7yWHigGKI).

| Date | Work |
| --- | --- |
| 28 Mar 2024 | Copied the starter code into this repo |
| 29 Mar 2024 | Set up Tailwind, the app wrapper, the home page and the colour scheme |
| 29 Mar 2024 | Built the nav bar (tutorial to 22:40) |
| 29 Mar 2024 | Added social icons and their animations (tutorial to 45:18) |
| 2 Apr 2024 | Added the animated headline, FluidSenses images, and the Download CV and Contact links (tutorial to 1:12:00) |
| Oct 2026 | Finished the site and published it on GitHub Pages, as described below |

### October 2026: finishing the site

- **New pages:** About (biography, skills, experience and education timelines), Projects, and a custom 404.
- **Dark mode** with a toggle in the nav bar. It applies before the page paints, so there's no white flash.
- **Mobile layout** for every page, plus a hamburger menu on phones and tablets.
- **Footer** with copyright and a contact link.
- **Single content file** (`src/data/site.js`) so content changes don't need any code changes.
- **Real links:** GitHub points to your profile. The placeholder Twitter, Pinterest and Dribbble links are gone, and LinkedIn appears once you add your URL.
- **Real projects** from your GitHub (the Azure serverless résumé API and the Terraform work) instead of the tutorial's sample projects.
- **Fixes:** the CV button no longer downloads the tutorial's `dummy.pdf`; the page description is no longer "Generated by create next app"; the misspelt `AminmatedText.js` was renamed to `AnimatedText.js`; the nested `<main>` elements and invalid class names were fixed; the language is set to `en-GB`.
- **Removed tutorial leftovers:** sample articles, project images, developer photos, the tutorial's screenshots (`website images/`), its text notes (`public/All-Texts/`), `dummy.pdf`, and the sample `/api/hello` route. They are still in the Git history if ever needed.
- **Publishing:** static export plus a GitHub Actions workflow that publishes to GitHub Pages and test-builds every pull request.
- **Left out:** the tutorial's Articles page, because there are no articles yet. It's easy to add later in the same style.

## To do

- [ ] Fill in every `TODO` in `src/data/site.js`: your role title, intro, biography, experience dates and description
- [ ] Add your CV (`public/cv.pdf`) and LinkedIn URL
- [ ] Add more experience, education or certifications
- [ ] Connect your own domain (see above)
- [ ] Update Next.js and the other dependencies. The site is on Next.js 13.5, which no longer gets updates; moving to a current version is a separate, bigger job.
