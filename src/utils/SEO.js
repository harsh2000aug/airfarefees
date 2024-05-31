import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({title, description}) {


const [pageURL, setPageURL] = React.useState(0);
  React.useEffect(()=>{
    setPageURL(window.location.href);
  })


return (
<Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel="canonical" href={pageURL} />
</Helmet>
)
}