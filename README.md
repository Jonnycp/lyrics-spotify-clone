# LYRICS SPOTIFY CLONE
<img src="favicon.png" width="30%"/>

Un semplice clone della parte lyrics di Spotify

## Descrizione 
È possibile caricare una canzone con:
- lyrics
- titolo
- autore
- cover

e visualizzarla nel pagina.

Si può quindi inserire qualsiasi lyrics e qualsiasi canzone si voglia.. anche sensa senso

Non serve ringraziarmi. Ma se volete farlo accetto volentieri :)

## Istruzioni
1. Clona la repository
2. Importa la tua canzone in `/assets/audio/`
3. Imposta le variabili principali in <a href="/assets/js/variabiles.js">`/assets/js/variabiles.js`</a>
4. Imposta le variabili secondarie <a href="/assets/css/variabiles.css">`/assets/css/variabiles.css`</a>
5. Avvia il progetto dall' <a href="index.html">index.html</a>

## Possibili configurazioni
| **Variabile** |                             **Default**                            |   **Tipo**   |      **Descrizione**     |                        **File**                        |
|:-------------:|:------------------------------------------------------------------:|:------------:|:------------------------:|:------------------------------------------------------:|
|    songPath   |               `../assets/audio/LifeCouldBeaDream.mp3`              |    `path`    |  Percorso della canzone  |   [assets/js/variabiles.js](assets/js/variabiles.js)   |
|   coverPath   | `https://i.scdn.co/image/ab67616d00001e021c58f5beb4c8740df65d8e6a` |    `path`    |   Percorso della cover   |   [assets/js/variabiles.js](assets/js/variabiles.js)   |
|    songName   |                        Life Could Be a Dream                       |   `string`   |   Titolo della canzone   |   [assets/js/variabiles.js](assets/js/variabiles.js)   |
|   artistName  |                            The Sh-Booms                            |   `string`   |   Artista della canzone  |   [assets/js/variabiles.js](assets/js/variabiles.js)   |
|   background  |                              `#964afa`                             |    `color`   |     Colore di sfondo     | [assets/css/variabiles.css](assets/css/variabiles.css) |
|   text-color  |                               `#000`                               |    `color`   | Colore del testo normale | [assets/css/variabiles.css](assets/css/variabiles.css) |
|  text-active  |                               `#fff`                               |    `color`   |  Colore del testo attivo | [assets/css/variabiles.css](assets/css/variabiles.css) |
|     volume    |                                 93%                                | `percentage` |  Percentuale del volume  | [assets/css/variabiles.css](assets/css/variabiles.css) |

## STACK
Realizzato con semplice Html5, css, e js puro

## TODO
- [ ] Rendere la progress bar cliccabile
- [ ] Rendere il volume modificabile
- [ ] Correggere il font (importando quello normal oltre al bold)
- [ ] Testo e timestamp da file `.lrc`
- [ ] Form per generare pagina
- [ ] Aggiungere pulsanti mancanti nella bottom bar
- [ ] Correggere immagine

## About
Progetto realizzato in meno di 2 ore per mio fratello da [jonathan-caputo@hotmail.com](mailto:jonathan-caputo@hotmail.com)