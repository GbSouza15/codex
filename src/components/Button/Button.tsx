import { Button } from "@/components/ui/button"

export default function ButtonComponent(props: {
    title: string,
}) {
    return (
        <Button className="bg-[#D9D9D9] rounded-[5px]">{props.title}</Button>
    )
}