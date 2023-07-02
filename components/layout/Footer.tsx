import Link from "next/link";

export default function Footer({}) {
    return (
        <div className="w-100 bg-black">
            <p className="text-white">
                <Link href="http://bimash.com.np/">    
                    Bimash Maharjan
                </Link>

            </p>
        </div>
    );
}