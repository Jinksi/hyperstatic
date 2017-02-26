import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { Container, Section } from '../components/common'
import Form from '../components/Form'

export default (props) => (
  <Page>
    <PageHeader title={props.title} subTitle='Get in touch' />
    <Section thin>
      <Container>
        <Form />
      </Container>
    </Section>
    <Helmet title='Contact' />
  </Page>
)
