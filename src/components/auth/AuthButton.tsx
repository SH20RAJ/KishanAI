"use client";

import { useUser } from "@stackframe/stack";
import Link from "next/link";
import { UserAvatar } from "./UserAvatar";
import { Button } from "../ui/Button";

export function AuthButton() {
    const user = useUser();

    if (user) {
        return <UserAvatar user={user} />;
    }

    return (
        <Link href="/sign-in">
            <Button
                variant="outline"
                size="sm"
                className="px-4 py-2 text-sm font-medium border-green-600 text-green-600 hover:bg-green-50"
            >
                Sign In
            </Button>
        </Link>
    );
}
