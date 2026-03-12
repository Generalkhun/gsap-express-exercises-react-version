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
        <div>
            <Link href={"/tweening-basics/delay-and-repeat"}>delay-and-repeat</Link>
        </div>
        <div>
            <Link href={"/tweening-basics/special-property-ease"}>special-property-ease</Link>
        </div>
        <div>
            <Link href={"/tweening-basics/tween-control"}>tween-control</Link>
        </div>
         <div>
            <Link href={"/tweening-basics/tween-glitch"}>tween-glitch</Link>
        </div>
    </div>
}
export default TweeningBasicsPage