import React from 'react'
import Helmet from 'react-helmet'
import Marked from 'react-markdown'
import Page from '../components/Page'
import { Container, Section } from '../components/common'
import PageHeader from '../components/PageHeader'

export default ({ page }) => {
  const { title, subtitle } = page
  return (
    <Page>
      <link rel='import' href='/bower_components/simpla-text/simpla-text.html' />
      <link rel='import' href='/bower_components/simpla-img/simpla-img.html' />
      <link rel='import' href='/bower_components/simpla-article/simpla-article.html' />
      <PageHeader title={title} subtitle={subtitle} />
      <Section thin>
        <Container>
          <simpla-article path='/pages/home/content'>
            <Marked source={page.body} />
          </simpla-article>
        </Container>
      </Section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </Page>
  )
}
