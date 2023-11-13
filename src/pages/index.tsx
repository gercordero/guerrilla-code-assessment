import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';
import { Hero } from '@/components/hero';
import { NextPage } from 'next';
import { Properties } from '@/components/properties';

type HomePageData = Awaited<ReturnType<typeof getStaticProps>>['props'];

const Home: NextPage<HomePageData> = ({ properties }) => {
  console.log(properties);

  return (
    <>
      <Hero />
      <Properties properties={properties} />
    </>
  );
};

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Properties {
        propertyCollection(limit: 6) {
          items {
            id
            title
            address
            category
            image {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      properties: data.propertyCollection.items,
    },
  };
}

export default Home;
