# MarketPro - Aplikacja do przechowywania produktów

MarketPro to zoptymalizowany program do zarządzania sklepem, zbudowany przy użyciu Express i Electron. Jego głównym celem jest bezpieczne przechowywanie produktów z kasy fiskalnej na centralnym serwerze i dostarczanie aktualizacji w czasie rzeczywistym za pomocą przyjaznej dla użytkownika aplikacji desktopowej.

## Przewodnik instalacyjny

### Wymagania
- [Nodejs](https://nodejs.org/en/download)
- [PM2](https://pm2.keymetrics.io/docs/usage/quick-start) (do produkcji)

Sklonuj repozytorium

```shell
git clone https://github.com/Fiji404/MarketPro.git
cd MarketPro
```

Teraz zainstaluj zależności
```shell
cd backend
npm i
cd ..
cd frontend
npm i
```
Jesteśmy prawie gotowi, teraz wystarczy uruchomić serwer developerski.

Dla Frontendu
```shell
cd frontend
npm run dev
```
Dla Backendu

Otwórz kolejny terminal w folderze
```shell
cd backend
npm run dev
```

Gotowe! Program powinien automatycznie pojawić się na ekranie.