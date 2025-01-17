/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import StoryCard from './StoryCard';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

const FormatPageLayout = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <h1
      sx={{
        textAlign: 'center',
        fontSize: [(theme) => `${theme.fontSizes.h5}`, null, (theme) => `${theme.fontSizes.h4}`],
        mb: (theme) => `${theme.space.spacing5}`,
        textTransform: 'capitalize',
      }}
    >
      {item.name}
    </h1>
  );
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        justifyContent: 'space-between',
        borderBottomWidth: [null, null, null, 'px'],
      }}
    >
      <div
        className="main-content"
        sx={{ order: [2, null, null, null, 1], maxWidth: 1560, width: '100%', mx: 'auto' }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
          }}
        >
          {header ? header(item) : defaultHeader(item)}
          <div
            className="tabs"
            sx={{
              lineHeight: '18.4px',
              overflow: 'auto',
              overflowX: 'auto',
              overflowY: 'auto',
              textAlign: 'center',
              textRendering: 'optimizelegibility',
              whiteSpace: 'nowrap',
              borderBottom: '1px solid #919191',
              marginBottom: (theme) => `${theme.space.spacing5}`,
            }}
          >
            <ul
              sx={{
                fontSize: ' inherit',
                fontFamily: 'inherit',
                margin: 0,
                padding: 0,
                border: 0,
                lineHeight: 'inherit',
                listStyle: 'none',
                display: 'inline-flex',
                maxWidth: '100vw',
                li: {
                  fontSize: (theme) => `${theme.fontSizes.h7}`,
                  fontWeight: 700,
                  hyphens: 'auto',
                  lineHeight: '16.8px',
                  marginBottom: '0px',
                  mx: (theme) => `${theme.space.spacing5}`,
                  marginTop: 0,
                  paddingBottom: (theme) => `${theme.space.spacing4}`,
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  paddingTop: (theme) => `${theme.space.spacing5}`,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                },
              }}
            >
              <li>
                <ActiveLink passHref href={`/${type}/${slug}`} activeClassName="active">
                  <a>All</a>
                </ActiveLink>
              </li>
              {formats?.map((tab, index) => (
                <li key={index}>
                  <ActiveLink
                    passHref
                    href={`/${type}/${slug}/format/${tab.slug}`}
                    activeClassName="active"
                  >
                    <a>{tab.name}</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
          {/* <Tabs baseUrl={`/categories/${dega.category.slug}`} /> */}
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                px: [null, null, (theme) => `${theme.space.spacing6}`],
                mt: (theme) => `${theme.space.spacing7}`,
                gridGap: (theme) => `${theme.space.spacing7}`,
              }}
            >
              {filteredPosts?.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormatPageLayout;
