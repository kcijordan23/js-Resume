// Adds the site's base path (e.g. "/js-Resume" on GitHub Pages) to a file in /public.
// Next.js does this automatically for <Link> and imported images, but not for plain
// paths such as "/images/projects/foo.png" or "/cv.pdf".
const withBase = (path) => {
    if (!path || !path.startsWith('/')) return path
    return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
}

export default withBase
