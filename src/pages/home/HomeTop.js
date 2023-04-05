import "./css/homeTop.css";

export function HomeTop() {
  return (
    <div className='home__header container'>
      <div className='home__body'>
        <div className='section-left'>
          <h2 className='home__title-context'> Co warto wiedzieć?</h2>
          <p>
            Działalność nierejestrowana pozwala nam zarobić do 50% minimalnego
            wynagrodzenia za pracę (w 2022 minimalne wynagrodzenie wynosi 3490
            zł brutto, co daje nam możliwość osiągnięcia przychodu 1745 zł).
          </p>
          <p>
            Ważne! Nie możesz pomniejszyć tego przychodu (1745 zł) o swoje
            koszty.
          </p>
        </div>
        <div className='section-right' />
      </div>
      <div className='section-bottom'>
        <h2 className='home__title-context'> Zacznij działać!</h2>
        <p>
          Nie masz obowiązku rejestrować swojej działalności (chyba, że musisz
          zostać podatnikiem VAT). Po prostu przygotuj swoją ofertę i zacznij
          działać! Pamiętaj jednak o obowiązkach, które na Tobie spoczywają,
          jeśli chcesz skorzystać z działalności nierejestrowanej.
        </p>
      </div>
    </div>
  );
}
