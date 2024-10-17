// Sitemap.js
const Sitemap = () => {
    const urls = [
      { url: '/', lastmod: new Date().toISOString() },
      { url: '/Admin', lastmod: new Date().toISOString() },
      { url: '/Profile', lastmod: new Date().toISOString() },
      { url: '/Listing', lastmod: new Date().toISOString() },
      { url: '/AdminPanel', lastmod: new Date().toISOString() },
      { url: '/Pass', lastmod: new Date().toISOString() },
      { url: '/Final', lastmod: new Date().toISOString() },
      { url: '/form-detail', lastmod: new Date().toISOString() },
      { url: '/Navbar', lastmod: new Date().toISOString() },
      { url: '/About', lastmod: new Date().toISOString() },
      { url: '/Contact', lastmod: new Date().toISOString() },
      { url: '/Terms', lastmod: new Date().toISOString() },
      { url: '/Privacy', lastmod: new Date().toISOString() },
      { url: '/Vadodra', lastmod: new Date().toISOString() },
      { url: '/Guwahati', lastmod: new Date().toISOString() },
      { url: '/Noida', lastmod: new Date().toISOString() },
      { url: '/Kanpur', lastmod: new Date().toISOString() },
      { url: '/Varanasi', lastmod: new Date().toISOString() },
      { url: '/Ranchi', lastmod: new Date().toISOString() },
      { url: '/Gwailor', lastmod: new Date().toISOString() },
      { url: '/Surat', lastmod: new Date().toISOString() },
      { url: '/Ludhiana', lastmod: new Date().toISOString() },
      { url: '/Jaipur', lastmod: new Date().toISOString() },  
      { url: '/Kolkata', lastmod: new Date().toISOString() },
      { url: '/Mumbai', lastmod: new Date().toISOString() },
      { url: '/Delhi', lastmod: new Date().toISOString() },
      { url: '/Chennai', lastmod: new Date().toISOString() },
      { url: '/Nashik', lastmod: new Date().toISOString() },
      { url: '/Meerut', lastmod: new Date().toISOString() },
      { url: '/Visakhapatnam', lastmod: new Date().toISOString() },
      { url: '/Jalandhar', lastmod: new Date().toISOString() },
      { url: '/Dehradun', lastmod: new Date().toISOString() },
      { url: '/Lucknow', lastmod: new Date().toISOString() },
      { url: '/Ahmedabad', lastmod: new Date().toISOString() },
      { url: '/Pune', lastmod: new Date().toISOString() },
      { url: '/Goa', lastmod: new Date().toISOString() },
      { url: '/Nagpur', lastmod: new Date().toISOString() },
      { url: '/Rajkot', lastmod: new Date().toISOString() },
      { url: '/Jodhpur', lastmod: new Date().toISOString() },
      { url: '/Udaipur', lastmod: new Date().toISOString() },
      { url: '/Gurugram', lastmod: new Date().toISOString() },
      { url: '/Ambala', lastmod: new Date().toISOString() },
      { url: '/Bhopal', lastmod: new Date().toISOString() },
      { url: '/Indore', lastmod: new Date().toISOString() },
      { url: '/Chandigarh', lastmod: new Date().toISOString() },
      { url: '/Hyderabad', lastmod: new Date().toISOString() },
      { url: '/Patna', lastmod: new Date().toISOString() },
      { url: '/Raipur', lastmod: new Date().toISOString() },
    ];
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
      ${urls
        .map(({ url, lastmod }) => `
          <url>
            <loc>${`https://locandu.com${url}`}</loc>
            <lastmod>${lastmod}</lastmod>
          </url>
        `)
        .join('')}
    </urlset>`;
  
    return xml;
  };
  
  export default Sitemap;
  