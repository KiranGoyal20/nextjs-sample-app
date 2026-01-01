import { useRouter } from "next/router";


const DynamicUserPage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div>
      <h2>This is a {query.id} Page</h2>

    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json();
  const paths = data.users.map(user => ({
    params: { id: user.id.toString() }
  }));

  return {
    paths,
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: { data }
  }
}

export default DynamicUserPage;