exports.createPages = async ({ actions, graphql, reporter }) => {
  const pageResult = await graphql(`
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
                title
                contentColumnLeft
                ctaColumnLeft {
                  buttonLeft {
                    url
                    title
                  }
                }
                contentColumnRight
                ctaColumnRight {
                  buttonRight {
                    url
                    title
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_IndustryCyber {
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
              ... on WpPage_AcfComponents_Components_IndustryTraining {
                content
                title
                image {
                  title
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 919
                        height: 562
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
              ... on WpPage_AcfComponents_Components_LatestNews {
                fieldGroupName
              }
              ... on WpPage_AcfComponents_Components_ContactForm {
                fieldGroupName
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
              ... on WpPage_AcfComponents_Components_ServicesType {
                title
                service {
                  titleService
                  contentService
                  iconService {
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
                cta {
                  titleCta
                  linkCta {
                    url
                    title
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_Teams {
                title
                profiles {
                  content
                  name
                  title
                  linkedinUrl
                  image {
                    altText
                    sourceUrl
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: DOMINANT_COLOR)
                      }
                    }
                  }
                }
              }
              ... on WpPage_AcfComponents_Components_FullContent {
                content
              }
              ... on WpPage_AcfComponents_Components_News {
                fieldGroupName
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

  if (pageResult.errors) {
    reporter.error("There was an error fetching posts", pageResult.errors)
  }

  const { allWpPage } = pageResult.data

  let pageTemplate = require.resolve(`./src/templates/index.js`)

  allWpPage.nodes.map(page => {
    actions.createPage({
      path: page.uri,
      component: pageTemplate,
      context: page,
    })
  })

  const postResult = await graphql(`
    {
      allWpPost {
        nodes {
          id
          title
          date
          uri
          acf_components {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE, backgroundColor: "#191D35")
                }
              }
              title
              altText
            }
            mainContent
            excerpt
            subheadingColumnLeft
            contentColumnLeft
            imageColumnRight {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE, backgroundColor: "#191D35")
                }
              }
              title
              altText
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

  if (postResult.errors) {
    reporter.error("There was an error fetching posts", postResult.errors)
  }

  const { allWpPost } = postResult.data

  let postTemplate = require.resolve(`./src/templates/post.js`)

  allWpPost.nodes.map(post => {
    actions.createPage({
      path: post.uri,
      component: postTemplate,
      context: post,
    })
  })
}
