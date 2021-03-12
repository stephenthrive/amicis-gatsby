/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Gatsby WordPress Starter`,
        description: `Kick off your next, great Gatsby project with this WordPress starter.`,
        author: `@tomphill`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /\.inline\.svg$/
              }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://amiciswordpress.thriveweb.co.uk/graphql",
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                trickle: false,
                minimum: 0.4
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-KSNX6B9",
                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,
                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: 'djs1jdf'
                }
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-gatsby-cloud`,
    ],
}
