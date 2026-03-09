import Link from "next/link"

const TweeningBasicsPage = () => {
    return <div>
        <div>Tweening basics</div>
        <div>
            <Link href={"/tweening-basics/basic-tween"}>basic-tween</Link>
        </div>
        <div>
            <Link href={"/tweening-basics/from-and-from-to"}>from-and-from-to</Link>
        </div>
    </div>
}
export default TweeningBasicsPage