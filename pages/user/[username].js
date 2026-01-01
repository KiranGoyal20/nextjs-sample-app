import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useUser = () => ({
    user: 'testuser',
    loading: false
})

const fetcher = (...args) => fetch(...args).then(res => res.json());

const DynamicUserPage = () => {
    const router = useRouter();
    const { query } = router;
    const [userInfo, setUserInfo] = useState({});
    const id = query.username;
    const user = useUser();

    useEffect(() => {
        if (!user.user) {
            router.replace("/");
        }
    })

    const { data, error } = useSWR('https://dummyjson.com/users/' + id, fetcher);
    console.log("🚀 ~ DynamicUserPage ~ data:", data)

    // useEffect(() => {
    //     async function fetchUserInfo() {
    //         if (!id) return;
    //         const response = await fetch(`https://dummyjson.com/users/${id}`);
    //         const data = await response.json();
    //         setUserInfo(data);
    //     }
    //     fetchUserInfo();
    // }, [id]);

    if (error) return <div>Failed to load user data</div>;

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h2>This is a {query.username} Page</h2>
            <h3>{data.firstName} {data.lastName}</h3>
            <button onClick={() => router.push(`${query.username}/settings`)}>Go to Settings</button>
            <button onClick={() => router.push({
                pathname: "[username]/settings",
                query: { username: query.username }
            }
            )}>Go to Settings</button>

            <button onClick={() => router.replace("/")}>Go Home</button>

            <button onClick={() => router.reload()}>Reload</button>
        </div>
    )
}

export default DynamicUserPage;