import {Window} from "../windows/Window";
import {HomeHeader} from "./HomeHeader";
import {HomeContent} from "./HomeContent";
import { Footer } from './Footer';

export function Home() {
    return (
        <Window>
                <HomeHeader />
                <HomeContent />
                <Footer />
        </Window>
    )
}