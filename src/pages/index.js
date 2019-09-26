import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Header} from 'semantic-ui-react'
import {FaHeartbeat} from 'react-icons/fa'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }

      allMoltinProduct {
        nodes {
          id
          name
          price {
            amount
            currency
          }
          slug
          sku
          mainImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMoltinProduct.nodes')

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          {/* <Image src={logo} alt="logo" /> */}
          <FaHeartbeat />
        </Header.Content>
      </Header>
      <ProductList products={products} />
    </Layout>
  )
}

export default StoreIndex
