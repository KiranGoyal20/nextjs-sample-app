import { useRouter } from "next/router";

const DynamicUserSettingsPage=()=>{
    const {query} = useRouter();
    return (
        <div>
            <h2>This is a {query.username} Settings 
                Page</h2>
        </div>
    )
}

export default DynamicUserSettingsPage;