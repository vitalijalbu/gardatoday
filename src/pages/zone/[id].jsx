import React, { useState, useEffect } from "react";


// export const revalidate = false
const getNewsDetail = async (slug, previewParams) => {
  const client = cmsClient(previewParams)
  return await client.request(QueryNewsDetailDocument, {
    slug
  })
}

const View = async ({ params }) => {
    const[data, setData] = useState([]);
  
    // const preview = previewData();
    // const isPreviewMode = !!preview && preview.secret === process.env.CRAFT_CMS_PREVIEW_TOKEN;
    // const { entry } = await getNewsDetail(params.slug, preview && isPreviewMode ? preview : {})
    const { entry } = await getNewsDetail(params.id, {})
  
    if (!entry) {
      notFound()
    }
  
  return (
    
   <div className="page">
     <h1 className={"font-serif text-7xl"}>
          {entry?.entryCustomTitle || entry?.title}
        </h1>
        <ul>
          <li>Template: News</li>
          <li>Id: {entry.id}</li>
          <li>Slug: {entry.slug}</li>
          <li>Title: {entry?.title}</li>
        </ul>
   
    </div>
    
  );
};

export default View;
