import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Landing() {
return (
<>
    <UserButton afterSignOutUrl="/" />

    <div>Landing</div>
    <div className="flex display-flex justify-center  gap-6">
        <Link href={"/sign-in"}>
            <Button>Login</Button>
        </Link>

        <Link href={"/sign-up"}>
            <Button>Sign-up</Button>
        </Link>
    </div>

</>
);
}
export default Landing;