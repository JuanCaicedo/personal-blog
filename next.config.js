const comicPdfRedirects = {
  'Adrift-in-a-Dream': 'adrift-in-a-dream',
  'Adrift-in-a-Dream_mobile': 'adrift-in-a-dream',
  'pineapple-and-the-circle-of-life': 'pineapple-and-the-circle-of-life',
  'pineapple-drinks-ayahuasca': 'pineapple-drinks-ayahuasca',
  'pineapple-fights-a-trumpet': 'pineapple-fights-a-trumpet',
  'TTPC_Trumpet': 'pineapple-fights-a-trumpet',
  'TTPC_Trumpet_mobile': 'pineapple-fights-a-trumpet',
  'pineapple-goes-to-space': 'pineapple-goes-to-space',
  'TTPC_Space': 'pineapple-goes-to-space',
  'TTPC_Space_mobile': 'pineapple-goes-to-space',
  'pineapple-talks-to-mushrooms': 'pineapple-talks-to-mushrooms',
  'TTPC_Mushrooms': 'pineapple-talks-to-mushrooms',
  'TTPC_Mushrooms_mobile': 'pineapple-talks-to-mushrooms',
  'Tapirs-and-misfits_mobile': 'tapirs-and-misfits',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(comicPdfRedirects).map(([name, slug]) => ({
      source: `/${name}.pdf`,
      destination: `https://www.trippypineappleclub.com/comics/${slug}`,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
