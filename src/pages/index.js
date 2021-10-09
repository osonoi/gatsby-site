import React from 'react'
import { graphql, Link } from 'gatsby'
const IndexPage = ({data}) => {
  return (
    data.allNodePage.nodes.map((node) =>
      <div className='teaser wrapper'>
        {node.body.processed}
//    </div>
  )
 )


}
export const query = graphql`
query IndexPage {
  allNodePage {
    nodes {
      body {
        processed
      }
    }
  }
}
 `

export default IndexPage
