## Projekt wykonany jako zadanie rekrutacyjne. <br/>
Założenia:<br/>

- wykonanie projektu wg. makiety
- zastosowanie czcionki Roboto
- wyswietlanie danych json z adresu url oraz dodatkowy ustawieniu header requesta


## W projekcie wykorzystana została biblioteka "React" oraz "SCSS"
<br/>

## Dodatkowe informacje : <br/>
Podgląd projektu online na stronie Github Pages : https://adamcekala1.github.io/Zadanie_rekrutacja/
<br/>
Wersja produkcyjna dosepna w katalogu docs 
<br/>

## Opis projektu : <br/>
Wszystkie style dostępne w pliku: src->css->styles.scss. Szybka edycja niektórych parametrów na początku pliku w "Variables". Plik przekonwertowany na css za pomocą apliakcji "Koala". W celu zwiększenia prędkości strony wczytywany jest plik .css .
<br/><br/>
W stylach zastosowana czcionka Roboto, przy braku połączenia zmiana na sans-serif.
<br/><br/>
Projekt został podzielony na komponenty. W folderze scr->components znajdują : <br/>
-Ranking.js - zawarta jest tu logika aplikacji. Jest to główny komponent stworzony na klasie.<br/>
-DataRow.js - "dumb component"/"functional component" - odpowiedzialny jedynie do wyswietlania informacji w wierszach tabeli. Nie ma w nim logiki<br/>
-Loading.js - również "dumb component"/"functional component" - odpowiedzialny za animację w trakcje pobierania danych. Gdy dane zostaną pobrane lub wystąpi błąd to wyświetlana zostaje główna strona.<br/><br/>
-Footer.js - "dumb component"/"functional component" - wyswietla stopkę 
-Header.js - "dumb component"/"functional component" - wyswietla nagłówek

W Projekcie podzieliłem logikę na mniejsze funkcję oraz umieściłem je w foldrze src->actions. <br/>
Znajdują się tam displayActions, fetchDataActions. <br/>
displayActions.js zawiera logikę odpowiedzialną za:  <br/>
-displayData - wyswietlenie pobranych danych w tabeli  <br/>
-displayMainRow - mapuje oraz wyswietla tablice w której zawarte są wartości w głównym wierszu tabeli (zielony wiersz) <br/>

fetchDataActions.js - zawiera logikę odpowiedzialną za połączenie się z json oraz zwrócenie danych <br/>



Przekazanie aplikacji do pliku html występuje w pliku src->index.js
>ReactDOM.render(<Ranking />, document.getElementById('root'));

gdzie Ranking to nasz główny komponent a 'root' to id do któego chcemy go przekazać.
<br/><br/>

## Uruchomienie projektu:<br/>
Projekt można uruchomić na kilka sposobów. Podam rozwiązanie dla wersji dev oraz prod.<br/>
Pierwszym sposobem do wglądu jest uruchomienie w przeglądarce pliku docs->index.html lub podgląd na stronie GithubPages: https://adamcekala1.github.io/Zadanie_rekrutacja/ <br/>
Drugim sposobem jest pobranie projektu poprzez klonowanie, rozpakowanie. W konsoli przechodzimy do rozpakowanego folderu lub (w przypadku systemu windows) trzymając przycisk shift klikamy prawym przyciskiem myszy na nasz folder i wybieramy otwarcie konsoli w tym miejscu. Kolejnym krokiem jest instalacja modułów zawartych w package.json poprzez wpisanie w konsoli "npm install". Po instalacji wystarczy wpisać "npm start" by nasza strona została uruchomiona.
<br/><br/>

