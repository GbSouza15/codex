'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { LogOut, UserRound } from "lucide-react";

export default function User() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="bg-[#2651EE] p-2 rounded-full cursor-pointer">
                        <UserRound color="white"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white rounded-[10px]">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-black"/>
                    <DropdownMenuItem>
                        <div className="flex items-center gap-2">
                            <LogOut size="15px"/>
                            <span>Logout</span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}