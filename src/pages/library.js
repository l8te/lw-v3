import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Collection from "../components/collection"


export default function Library({ data }) {
  return (
    <Layout>
      <h1>Library: corrupted corporation advert bomb</h1>
      <p>
        Advert engine order-flow semiotics concrete boat grenade girl otaku tattoo artisanal RAF alcohol numinous decay. Office j-pop drone carbon soul-delay man otaku. Legba RAF face forwards DIY tattoo media Chiba render-farm engine plastic concrete realism sign. 
      </p>
      <h3>Bookshelf</h3>

      <h4>{data.allMdx.totalCount} books</h4>

      {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
          <Link >
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
          </Link>
            <p>{node.excerpt}</p>

          
          </div>
          ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter:{
    frontmatter:{
      category: {
       in: ["sketchbook"]
      }
    }
  }) 
  {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
          }
          
          excerpt
        }
      }
    }
  }
`