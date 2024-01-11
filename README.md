<p align="center">
    <img alt="Ionic" src="https://github.com/ionic-team/ionic-framework/blob/main/.github/assets/logo.png?raw=true" width="60" style="margin: 20px" />
    <img alt="Angular" src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" height="60" style="margin: 20px" />
</p>

<h1 align="center">
  Orbisator
</h1>

Projekt pro výuku mobilních aplikací na střední škole Orbis.

## Orientace v projektu

- Jednotlivé commity jsou přidávány podle hodin, které proběhlo a souhrně obsahuje vše, co bylo přidáno nebo
  modifikováno.

## Oficiální dokumentace

- [Ionic Framework](https://ionicframework.com/)
- [Angular Framework](https://angular.io/)

## Instalace projektu

1. Naklonujte si REPO (`branch` - `master` nebo tu, kterou potřebujete podle vaší hodiny)
2. Otevřte projekt ve vámi zvoleném IDE a v příkazovém rádku
3. Nainstalujte všechny NPM knihovny - `npm install`
4. Spusťte Ionic dev server pomocí `ionic serve` nebo `ng serve`

## iOS - zatím není funkšní
~~
1. ~~Proveďtě kroky instalace, není třeba provádět krok 4.~~
2. ~~Vytvořte build složky **www** -  `ionic build`~~
3. ~~Vytvořte synchronizaci www a iOS projektu - `ionic cap sync ios`, pokud nefunguje tak `npx cap sync ios`.~~
4. ~~Otevřete projekt v Xcode - `ionic cap open ios`, `npx cap open ios` nebo otevřete [App.xcworkspace](ios%2FApp%2FApp.xcworkspace) jako projekt v Xcode.~~
5. ~~Vyberte simulátor a spusťte~~

## Android - zatím není funkšní

1. ~~Proveďtě kroky instalace, není třeba provádět krok 4.~~
2. ~~Vytvořte build složky **www** -  `ionic build`~~
3. ~~Vytvořte synchronizaci www a Android projektu - `ionic cap sync Android`, pokud nefunguje tak `npx cap sync Android`.~~
4. ~~Otevřete projekt v Xcode - `ionic cap open Android`, `npx cap open Android` nebo otevřete složku [android](android) jako projekt v Android studiu.~~
5. ~~Vyberte emulátor a spusťte~~

## Oprava když něco nefunguje

Pokud by nějaké kroky nefungovaly je nutné projít kroky z Capacitor nebo Ionic:

Kroky Capacitor jsou ty, které jsou zapsány pomocí `npx`, ionic pomocí příkazu `ionic`.

- [Všechny kroky z Capacitor](https://capacitorjs.com/docs/getting-started)
- [Všechny kroky z Ionic iOS](https://ionicframework.com/docs/developing/ios)
- [Všechny kroky z Ionic Android](https://ionicframework.com/docs/developing/android)
