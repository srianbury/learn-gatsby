import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const LayoutContainer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <LayoutView title={data.site.siteMetadata.title} {...props} />
}
const LayoutView = ({ title, children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to="/">
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {title}
      </h3>
    </Link>
    <Link
      to="/about/"
      css={css`
        float: right;
      `}
    >
      About
    </Link>
    {children}
  </div>
)

export default LayoutContainer
