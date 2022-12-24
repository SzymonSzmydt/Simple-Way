import {Window} from "../windows/Window";
import {HomeTop} from "./HomeTop";
import {HomeContent} from "./HomeContent";
import { Footer } from './Footer';
import { HomeIntro } from './HomeIntro';
import { useEffect } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { useState } from 'react';
import { Spinner } from './../Spinner';

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80vh"
}

export function Home() {
    const [isLoading, setIsLoading ] = useState(false);
    const { user } = useUserAuth();

    useEffect(()=> {
        const data = window.sessionStorage.getItem('loading');
        if (data) {
            setIsLoading(true);
        }
        if (user) {
            window.sessionStorage.removeItem("loading");
            setIsLoading(false);
        }
    }, []);

    return (
        !isLoading ? 
        <>
            <HomeIntro />
            <Window> 
                <HomeTop />
                <HomeContent />
                <Footer />
            </Window> 
        </> : <Spinner style={style}/>
    )
}