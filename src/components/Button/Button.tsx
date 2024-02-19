import { Button } from "@/components/ui/button"

export default function ButtonComponent(props: {
    title: string,
}) {
    return (
        <Button className="bg-white rounded-[5px]">{props.title}</Button>
    )
}