import Link from "next/link";
import { useEffect, useState } from "react";

const IndexPage = (props) => {
    console.log("🚀 ~ IndexPage ~ props:", props)
    const [users, setUsers] = useState([]);
    console.log("🚀 ~ IndexPage ~ users:", users)

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {
                users.users && users.users.map(user => (
                    <div key={user.id}>
                        <Link href={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    console.log('Server Side Props Function Executed');
    const data = await (await fetch('https://dummyjson.com/users')).json();

    return {
        props: {
            name: 'Piyush',
            data
        }
    }
}

export default IndexPage;