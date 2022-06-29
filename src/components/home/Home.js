import {Window} from "../windows/Window";
import {HomeHeader} from "./HomeHeader";
import {HomeContent} from "./HomeContent";

export function Home() {

    return (
        <Window>
                <HomeHeader />
                <HomeContent />
        </Window>
    )
}