exports.createPages = async ({actions, graphql, reporter}) =>  {
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          acf_components {
            components {
              __typename
              ... on WpPage_AcfComponents_Components_Header {
                dots
                subtitle
                title
                image {
                  title
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1067
                        height: 690
                        backgroundColor: "#191D35"
                        placeholder: NONE
                      )
                    }
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_Intro {
                contentColumnOne
                contentColumnTwo
                title
                button {
                  target
                  title
                  url
                }
              }
              ... on WpPage_AcfComponents_Components_IndustryLeading {
                content
                title
                image {
                  title
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 894
                        height: 814
                        placeholder: NONE
                      )
                    }
                  }
                }
                button {
                  target
                  title
                  url
                }
              }
              ... on WpPage_AcfComponents_Components_GetToKnowUs {
                title
              }
              ... on WpPage_AcfComponents_Components_ContactForm {
                title
                paragraph
                buttonText
              }
              ... on WpPage_AcfComponents_Components_Logos {
                logosContent {
                  __typename
                  ... on WpPage_AcfComponents_Components_Logos_LogosContent_LogosContentFlexible {
                    logo
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_Icons {
                iconsContent {
                  ... on WpPage_AcfComponents_Components_Icons_IconsContent_IconsContentFlexible {
                    icon
                    title
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_Services {
                backgroundIcon
                blockBackgroundColour
                content
                contentAlignment
                imageIcon
                textColour
                title
              }
              ... on WpPage_AcfComponents_Components_Teams {
                title
                profiles {
                  content
                  contentExcerpt
                  name
                  title
                  linkedinUrl
                  image {
                    altText
                    sourceUrl
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 148
                          height: 148
                          placeholder: DOMINANT_COLOR
                        )
                      }
                    }
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_FullContent {
                content
              }
            }
          }
          seo {
            title
            metaDesc
            metaKeywords
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPage } = result.data

  let template = require.resolve(`./src/templates/index.js`)

  allWpPage.nodes.map(post => {
    actions.createPage({
      path: post.uri,
      component: template,
      context: post
    })
  })

}