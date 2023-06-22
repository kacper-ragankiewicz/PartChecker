# Auto code review

[![codebeat badge](https://codebeat.co/badges/73a14966-7af4-4392-8d46-c6820562a1e1)](https://codebeat.co/projects/github-com-kacper-ragankiewicz-partchecker-main)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/44eef8dce935421f8cfbd86e6c16acc9)](https://app.codacy.com/gh/kacper-ragankiewicz/PartChecker/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

<br/>

# **Dokumentacja DopasujCZĘŚĆ**

### Witaj w dokumentacji projektu! Ta dokumentacja zapewnia wgląd w projekt oraz jego składniki, w tym kluczowe pliki, funkcjonalności i wytyczne dotyczące rozwoju. Jej celem jest pomoc programistom w zrozumieniu struktury projektu oraz ułatwienie przyszłej konserwacji i współpracy.

<br />

# Spis treści:

### 1. Wstęp
### 2. Budowa
### 3. Struktura Projektu
### 4. Kluczowe Pliki
### 5. Interfacy bazowe
### 6. Interfacy komunikacyjne
### 7. Zasada działania
### 8. Stylistyka

<br />

# Wstęp.

Projekt "**DopasujCZĘŚĆ**" to aplikacja internetowa opracowana przy użyciu frameworka React i Next.js. Ma ona na celu pomóc użytkownikom w wyborze podzespołów komputerowych, udostępniając funkcję wyszukiwania i umożliwiając dodawanie wybranych podzespołów do listy. Aplikacja zapewnia przyjazne interfejs użytkownika oraz zoptymalizowaną wydajność dla płynnego doświadczenia.

Projekt wykorzystuje Next.js, popularny framework zbudowany na bazie React, który oferuje renderowanie po stronie serwera, generowanie statycznych stron i inne zoptymalizowane funkcje. Wykorzystuje on także mechanizmy routingu Next.js do nawigacji między różnymi stronami i komponentami.

Główne funkcje aplikacji "**DopasujCZĘŚĆ**" to:

  - **Funkcjonalność wyszukiwania**: Użytkownicy mogą wyszukiwać podzespoły komputerowe, wprowadzając słowa kluczowe w pasku wyszukiwania. Aplikacja pobiera wyniki wyszukiwania z punktu końcowego API i wyświetla je na bieżąco, w miarę wpisywania przez użytkownika.

  - **Wybór i dodawanie podzespołów**: Użytkownicy mogą wybierać podzespoły spośród wyników wyszukiwania i dodawać je do swojej listy. Wybrane podzespoły są wyświetlane na głównej stronie, dając użytkownikowi przegląd wybranych elementów.

  - **Dynamiczny rozwijany dropdown**: Aplikacja zapewnia rozwijane menu, które umożliwia użytkownikom wybór określonego typu podzespołu. Opcje rozwijane są dynamicznie generowane na podstawie dostępnych typów podzespołów.

  - **Informacje zwrotne dla użytkownika**: Aplikacja dostarcza wizualnych informacji zwrotnych dla użytkowników na podstawie stanu ich działań. Na przykład, wyświetlany jest wskaźnik statusu, który informuje, czy wysłanie formularza zakończyło się sukcesem czy napotkało błąd.

  - **Optymalizacja obrazów**: Aplikacja wykorzystuje komponent "Image" z Next.js do zapewnienia optymalnego ładowania i renderowania obrazów podzespołów. Dzięki temu poprawia się wydajność, automatycznie optymalizując i dostarczając obrazy w odpowiednim formacie i rozmiarze.

  - **Niestandardowe czcionki**: Projekt importuje czcionkę "Inter" za pomocą paczki next/font/google. Pozwala to na używanie atrakcyjnego wizualnie stylu typografii we wszystkich miejscach aplikacji.

Dokumentacja tego projektu będzie obejmować różne aspekty,

<br />

# Budowa projektu NextJS.

Aby rozpocząć pracę nad podstawowym projektem w Next.js, możemy postępować zgodnie z poniższymi krokami:

1. **Utworzenie nowego projektu Next.js**

Możemy utworzyć nowy projekt Next.js, korzystając z narzędzia create-next-app, które jest dostępne za pomocą Node Package Manager (NPM) lub Yarn. W konsoli wpisujemy następujące polecenie:

bash

npx create-next-app my-next-app

2. **Struktura projektu**

Po utworzeniu projektu, otrzymamy gotową strukturę plików. W głównym katalogu projektu będziemy mieli następujące pliki i foldery:

  - **pages/**: Ten folder zawiera pliki, które definiują różne strony aplikacji. Pliki w tym folderze są renderowane jako strony dostępne pod odpowiednimi ścieżkami URL.

  - **public/**: W tym folderze znajdują się pliki statyczne, takie jak obrazy, ikony, pliki CSS itp., które można używać w aplikacji.

  - **styles/**: Ten folder może zawierać pliki stylów CSS lub SASS, które będą używane w projekcie.

  - **components/**: Możemy utworzyć ten folder w celu przechowywania komponentów React, które będą używane w różnych miejscach w aplikacji.

  - **next.config.js**: Ten plik zawiera konfigurację dla Next.js, taką jak dodatkowe moduły, ścieżki aliasów, przepisy dla kompilatora itp.

3. **Tworzenie stron**

Możemy rozpocząć tworzenie stron, dodając pliki do folderu pages/. Każdy plik w tym folderze reprezentuje odrębną stronę aplikacji. Na przykład, jeśli utworzymy plik about.js w folderze pages/, to będzie on renderowany jako strona dostępna pod adresem /about.

W plikach stron możemy pisać kod w React i używać komponentów Next.js, takich jak Head (do zarządzania zawartością sekcji <head>), Link (do nawigacji między stronami) itp.

4. **Stylowanie**

Aby stylować naszą aplikację, możemy używać arkuszy stylów CSS lub inne preprocesory, takie jak SASS. Możemy umieścić pliki stylów w folderze styles/ i importować je w odpowiednich plikach komponentów lub stron.

Next.js umożliwia również używanie modułów CSS, gdzie style są związane z konkretnym komponentem i są importowane wprost do komponentu. Możemy to osiągnąć, dodając .module do rozszerzenia pliku CSS lub SASS i importując go w komponencie za pomocą składni import styles from 'nazwa-pliku.module.css'.

5. **Uruchomienie aplikacji**

Aby uruchomić aplikację, używamy komend:

```
  $ yarn install
  $ yarn dev
```

<br />

# Struktura projektu.

Podstawowe komponenty w projekcie Next.js to klasy, funkcje lub pliki, które definiują interakcje i wygląd poszczególnych elementów aplikacji. Oto kilka podstawowych komponentów, które często spotyka się w projektach Next.js:

  - **Strony (Pages)**: Komponenty, które reprezentują poszczególne strony aplikacji. Każda strona jest oddzielnym plikiem w folderze pages/ i reprezentuje konkretne URL. Na przykład, plik index.js w folderze pages/ reprezentuje stronę główną aplikacji.

  - **Komponenty (Components)**: Komponenty to bloki budujące aplikację, które mogą być używane w różnych miejscach. Mogą to być proste komponenty UI, takie jak przyciski, pola tekstowe, nagłówki, a także bardziej złożone komponenty, które agregują inne komponenty. Komponenty są zwykle przechowywane w folderze components/ lub w odpowiednich folderach tematycznych.

  - **Nawigacja (Navigation)**: Komponenty nawigacji są używane do przechodzenia między różnymi stronami lub sekcjami aplikacji. W Next.js możemy używać komponentu Link do tworzenia linków i nawigacji między stronami. Możemy również używać modułu router z biblioteki next/router do programowego przekierowania na inne strony.

  - **Formularze (Forms)**: Komponenty formularzy są używane do zbierania danych od użytkownika. Możemy używać standardowych elementów formularza HTML, takich jak pola tekstowe, pola wyboru, przyciski itp., oraz obsługiwać ich zdarzenia za pomocą obsługi zdarzeń w React. Możemy również skorzystać z bibliotek trzecich, takich jak Formik lub React Hook Form, które ułatwiają zarządzanie formularzami w Next.js.

  - **Komunikacja z API (API Communication)**: Komponenty odpowiedzialne za komunikację z zewnętrznym API, takim jak pobieranie danych z serwera. Możemy użyć metody getStaticProps lub getServerSideProps w plikach stron, aby pobrać dane podczas generowania statycznych stron lub na serwerze.

  - **Stylowanie (Styling)**: Komponenty stylowania są używane do nadawania wyglądu i stylu aplikacji. W Next.js możemy stosować różne podejścia do stylizacji, takie jak CSS, SASS, styled-components itp. Możemy również wykorzystać CSS Modules lub moduły stylów w celu ograniczenia zakresu stylów do konkretnych komponentów.

<br />

# Kluczowe pliki

Ten projekt składa się z kilku kluczowych plików, które są istotne dla jego funkcjonowania. Oto opis tych plików:

  - **index.html**: Plik index.html jest głównym plikiem HTML, który tworzy strukturę strony internetowej. Zawiera podstawowe znaczniki HTML, takie jak <head>, <body>, a także odwołania do arkuszy stylów i skryptów.

  - **Home.module.css**: Plik style.css zawiera reguły stylów CSS, które nadają wygląd i układ strony. Zawiera selektory CSS, które są stosowane do różnych elementów HTML, takich jak nagłówki, sekcje, przyciski itp. Ten plik definiuje kolorystykę, rozmiary czcionek, marginesy, tła i wiele innych właściwości, które wpływają na wygląd strony.

  - **assets/**: Katalog assets zawiera różne zasoby projektu, takie jak obrazy, ikony, czcionki i inne pliki multimedialne. Może również zawierać podkatalogi, w których przechowywane są zasoby zgrupowane tematycznie lub według typu.

  - **README.md**: Plik README.md zawiera informacje ogólne o projekcie, takie jak opis, instrukcje instalacji, konfiguracji i uruchomienia. Często zawiera również linki do dokumentacji, wskazówki dla deweloperów i inne istotne informacje.

  - **package.json**: Plik package.json jest plikiem konfiguracyjnym dla menedżera pakietów (np. npm lub yarn). Zawiera informacje o zależnościach projektu, skrypcie startowym, wersji i innymi metadanymi. Ten plik jest istotny podczas instalacji zależności, uruchamiania skryptów i zarządzania projektem.

Warto pamiętać, że w większych projektach może istnieć więcej plików i katalogów, które są istotne dla funkcjonowania projektu. Powyższe pliki są jednak kluczowymi elementami, które należy zrozumieć i nad nimi pracować, aby skutecznie rozwijać ten projekt.

# Interfacy bazowe.

**searchPhraze**:       string  - *czego szukamy*

**searchArray**: 		    obj[] 	- *elementy które się wyświetlają po wyszukaniu*

**elementArray**: 		  obj[] 	- *elementy wybrane po wyszukaniu*

**handleInputChange** 	(e) 	  - *api wyłapuje co użytkowik wpisuje*

**handleSubmit** 		    (e) 	  - *api wyłapuje przycisk wysłania*

**elementGenerator** 	  </> 	  - *wyświetla dane z elementList*

**searchGenerator** 	  </> 	  - *wyświetla dane z zdobyte z funkcji serch*

**elementLlist**: 		  (obj) 	- *generator elementów interfjesu*

**searchListL** 		    (obj) 	- *generator elementów wyszukania*

**addElement** 		      (obj)	  - *dodawanie elementów wyszukanych do list elementów*

**filterSearch**		    (obj)	  - *filtracja wyszukania.*

<br />

# Interfacy komunikacyjne.

## Ogólna Budowa

Poniżej przedstawiamy dokumentację pliku search.js znajdującego się w folderze pages/api.

```
  import fetch from 'node-fetch';

  Plik wykorzystuje moduł node-fetch do wykonywania żądań HTTP.
  Funkcja handler
```
```
export default async function handler(req: any, res: any) {
  const { q } = req.query;
  const apiUrl = `https://pccfg.truffel.dev/api/search?q=${encodeURIComponent(q)}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    const data = await response.json();
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```

Zdefiniowana została funkcja **handler**, która obsługuje żądanie **API**. Przyjmuje ona **req (request)** i **res (response)** jako parametry. Wewnątrz funkcji następuje pobranie **parametru q** z zapytania. Następnie tworzony jest **URL** do **zewnętrznego API**, gdzie **parametr q** jest zakodowany. Następuje wywołanie żądania **GET** do tego **URL** za pomocą funkcji **fetch**. Jeśli odpowiedź nie jest **poprawna (response.ok === false)**, zostaje **zgłoszony błąd**. W przeciwnym razie, otrzymane dane zostają przekonwertowane na **format JSON** i zwrócone jako odpowiedź **(res.status(200).json(data))**. W przypadku wystąpienia błędu, wyświetlany jest komunikat o błędzie i zwracany jest kod odpowiedzi 500 z informacją o błędzie.

To jest ogólna dokumentacja dla pliku search.js w API.


## **Wyszukanie**: /api/search <- fetchData(string)

dataset:
```
  [
    {
      id: 1,
      name: 'AMD RAZEN 5 5600',
      description: '',
      type: 2,
      standard: 10,
      price: '900.00'
    }
  ]
```

<br />

# Zasada działania.

### **Kolejka zdarzeń**
<br />

handleInput(e) -> search(string) -> handlesubmit(search) -> searchArray[] -> searchGenerator</br> -> searchList() -> addElement(id) -> elementArray[] -> elementGenerator</> -> elementList() -> filterSearch(obj) ->  removeElement(id)

<br />

### **Komponentu Home (index.tsx)**

Komponent Home jest odpowiedzialny za renderowanie strony głównej aplikacji. Poniżej przedstawiamy dokumentację tego komponentu, opisując jego strukturę, funkcje i właściwości.

<br />

**Importy**

```
  import Head from 'next/head'
  import Image from 'next/image'
  import { Inter } from 'next/font/google'
  import styles from '@/styles/Home.module.css'
  import { useState, useEffect } from 'react'
  import OutsideAlerter from '@/components/Outside'
  import { useRouter } from "next/router"
```
Komponent wykorzystuje różne importy związane z bibliotekami i modułami Next.js oraz React.

**Interfejsy**

```
interface elementType {
  id: number;
  name: string;
  description: string;
  type: number;
  standard: number;
  price: string;
}

interface typesType {
  [key: string]: string;
}
```

Zdefiniowane zostały interfejsy **elementType** i **typesType**, które określają strukturę danych dla elementu i typów.

<br />

**Hooki i deklaracje zmiennych**

```
const router = useRouter()

const [status, setStatus] = useState(false)
const [search, setSearch] = useState("")
const [searchArray, setSearchArray] = useState<elementType[]>([])
const [elementArray, setElementArray] = useState<elementType[]>([])
const [selectedOption, setSelectedOption] = useState('');

const types: typesType = {
  '0': 'Wybierz Typ',
  '2': 'Processor'
}
```

Wykorzystane zostały hooki **useState** oraz **useRouter**. Zadeklarowane zostały zmienne stanu **status**, **search**, **searchArray**, **elementArray** i **selectedOption**, które przechowują różne wartości w trakcie działania komponentu. Zdefiniowana została również zmienna types, która przechowuje dostępne typy.

<br />

**Funkcje obsługi zdarzeń**

```
const handleSelectChange = (e: any) => {
  setSelectedOption(e.target.value);
  console.log(e)
  // router.push(`/submit?mySelect=${event.target.value}`);
};

const fetchData = async () => {
  // ...
};

const removeElement = (id: number) => {
  // ...
};

const clearSearch = () => {
  // ...
};

const addElement = (id: number) => {
  // ...
};

const handleInputChange = (event: any) => {
  // ...
};

const handleSubmit = (e: any) => {
  // ...
};
```
Zdefiniowane zostały różne funkcje obsługujące zdarzenia takie jak zmiana wyboru, pobieranie danych, usuwanie elementu, czy czyszczenie pola wyszukiwania.

<br />

**Komponenty generatorów**

```
const ElementsGenerator = (props: elementType) => {
  // ...
};

const SearchGenerator = (props: any) => {
  // ...
};
```
Zdefiniowane zostały komponenty generatorów, które renderują elementy na podstawie dostarczonych danych.

<br />

**Renderowanie komponentu**

```
return (
  <>
    <Head>
      {/* ... */}
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      {/* ... */}
    </main>
  </>
)
```
Komponent Home zwraca strukturę JSX, która renderuje główny kontener main z odpowiednimi komponentami.

<br />

# Stylistyka.

**global.css** - ogólne zasady stylistyczne dla dokumentu

**home.module.css** - zasady stylistyczne dla pliku index.tsx

<br />

## Struktura

Struktura pliku CSS jest zwykle podzielona na trzy główne części: sekcję importów, sekcję selektorów i deklaracji oraz sekcję mediów zapytań. Oto ogólnikowy opis każdej z tych sekcji:

  **Sekcja importów**:
      Ta sekcja zawiera importy innych plików CSS lub bibliotek stylów.
      Importy umożliwiają korzystanie z predefiniowanych stylów w bieżącym pliku CSS.

  **Sekcja selektorów i deklaracji**:
      W tej sekcji definiuje się selektory, które odnoszą się do elementów HTML na stronie.
      Selektory mogą być identyfikatorami, klasami, elementami HTML lub dowolnym innym selektorem CSS.
      Po zdefiniowaniu selektora, w nawiasach klamrowych umieszcza się deklaracje, które zawierają właściwości i wartości stylów.
      Każda deklaracja składa się z nazwy właściwości, dwukropka i wartości.

  **Sekcja mediów zapytań**:
      Ta sekcja zawiera zapytania media, które pozwalają na dostosowanie stylów w zależności od różnych rozmiarów ekranu i urządzeń.
      Zapytania media definiuje się za pomocą słowa kluczowego @media i określa się warunki dla danego zestawu stylów.
      Wewnątrz zapytania media można używać selektorów i deklaracji tak samo jak w głównej sekcji.

Pamiętaj, że powyższy opis jest ogólnikowy, a struktura pliku CSS może się różnić w zależności od preferencji programisty lub specyfiki projektu.


<br />

### Przykładowe klasy:

```
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
}
```
```
@media only screen and (max-width: 1619px) {

  .elementsItem {
    min-width: 490px;
    width: 48%;
  }

}
```

<br />

Po więcej informacji odsyłam do dokumentacji frameworku **NextJS**.

# Wytyczne rozowju.

Niniejsza dokumentacja ma na celu ułatwienie zrozumienia projektu oraz dostarczenie informacji potrzebnych do dalszego rozwoju i utrzymania. Zachęcamy do korzystania z dokumentacji podczas pracy nad projektem i życzę owocnej współpracy!

## Konwencje nazewnicze

  - Stosuj jasne i opisowe nazwy dla zmiennych, funkcji, klas i innych elementów kodu.
  - Używaj camelCase dla nazw zmiennych i funkcji (np. myVariable, myFunction).
  - Używaj PascalCase dla nazw klas i komponentów (np. MyClass, MyComponent).
  - Używaj UPPER_CASE dla stałych i zmiennych globalnych (np. API_KEY, MAX_COUNT).
  - Unikaj skrótów i skrótowców, aby zwiększyć czytelność kodu.

## Struktura plików i katalogów

  - Organizuj pliki według funkcjonalności, modułów lub komponentów.
  - Utrzymuj czytelną i spójną strukturę katalogów.
  - Unikaj nadmiernie głębokich struktur katalogów, aby uniknąć zbyt długich ścieżek dostępu.

## Zarządzanie zależnościami

  - Używaj menadżera pakietów, takiego jak npm lub yarn, do zarządzania zależnościami.
  - Utrzymuj aktualne wersje zależności i regularnie sprawdzaj dostępne aktualizacje.
  - Dostosuj konfigurację zależności do potrzeb projektu, uwzględniając zarówno wydajność, jak i bezpieczeństwo.

## Komunikacja z serwerem

  - W przypadku komunikacji z serwerem, stosuj sprawdzanie poprawności odpowiedzi serwera i obsługę błędów.
  - Unikaj przekazywania poufnych danych w żądaniach, szczególnie w przypadku publicznie dostępnych funkcji API.
  - Przestrzegaj dobrych praktyk związanych z bezpieczeństwem, takich jak uwierzytelnianie i szyfrowanie danych.

## Testowanie

  - Implementuj testy jednostkowe i testy integracyjne dla kluczowych funkcjonalności.
  - Regularnie uruchamiaj testy, aby upewnić się, że wprowadzane zmiany nie powodują regresji.
  - Używaj narzędzi do testowania, takich jak frameworki testowe, asercje i symulatory, w celu zapewnienia jakości kodu.

## Dokumentacja

  - Utrzymuj aktualną dokumentację projektu, opisującą zarówno architekturę, jak i funkcjonalności.
  - Zawieraj opisy interfejsów, kluczowych komponentów, a także koncepcje i zasady działania.
  - Aktualizuj dokumentację wraz ze zmianami projektu, aby zapewnić jej spójność z kodem.

Zapewnienie spójności, czystości i czytelności kodu oraz stosowanie dobrych praktyk programistycznych ułatwiają rozwój, utrzymanie i skalowanie projektu. Przestrzeganie powyższych wytycznych pomoże Ci w efektywnej pracy nad tym projektem.

