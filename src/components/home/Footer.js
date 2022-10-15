import './css/footer.css';

export function Footer() {

    return (
        <div className="home__header container home__footer">
            <div className="home__footer-box">
                <a href="https://www.linkedin.com/in/szymon-szmydt-5b0992230/" target="_blank" rel="noreferrer">
                    <div className="symbol symbol__linkedin"/> LinkedIn
                </a>
                <a href="https://github.com/SzymonSzmydt" target="_blank" rel="noreferrer">
                    <div className="symbol symbol__gitHub"/> GitHub
                </a>
                <section>
                    Simple Way - Ewidencja działalności nierejestrowanej
                </section>
            </div>
        </div>
    )
}