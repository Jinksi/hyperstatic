import React from 'react'
import Helmet from 'react-helmet'

const SocialMeta = ({
  title,
  url,
  description,
  imagePath,
  twitterSiteAccount,
  twitterCreatorAccount
}) => (
  <Helmet>
    <meta property='og:title' content={title} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={url} />
    <meta property='og:image' content={imagePath} />
    <meta property='og:description' content={description} />
    <meta name='twitter:card' content='summary' />
    {twitterSiteAccount && (
      <meta name='twitter:site' content={twitterSiteAccount} />
    )}
    {twitterCreatorAccount && (
      <meta name='twitter:creator' content={twitterCreatorAccount} />
    )}
    <meta name='twitter:url' content={url} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={imagePath} />
  </Helmet>
)
export default SocialMeta
