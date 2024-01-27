import { UserButton } from "@clerk/nextjs";
function Landing() {
return (
    <>
 <UserButton afterSignOutUrl="/"/>
 <div>Landing</div>


    </>


)
}
export default Landing;