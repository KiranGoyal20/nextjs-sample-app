import Link from "next/link";

const UsersPage = (props) => {
  console.log("🚀 ~ IndexPage ~ props:", props)

  return (
    <div>
      <h2>Users</h2>
      {
        props.data.users && props.data.users.map(user => (
          <div key={user.id}>
            <Link href={`/static/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
          </div>
        ))
      }
    </div>
  )
}

export const getStaticProps = async () => {
  console.log('Server Side Props Function Executed');
  const data = await (await fetch('https://dummyjson.com/users')).json();

  return {
    props: {
      name: 'Piyush',
      data
    }
  }
}

export default UsersPage;