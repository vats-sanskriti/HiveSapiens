import React from 'react'
import {Helmet} from 'react-helmet-async'

const Title = (
    {title = "HiveSapiens",
     description = "this is a Chat App name as HiveSapiens which means the community or hive of wise poeple"},
) => {
  return (
  <Helmet>
  <title>{title}</title>
  <meta name="description" content={description} /> 
  
  
  </Helmet>

  );
}

export default Title