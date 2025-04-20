## Dependências adicionadas

- react-icons
- react-router-dom
- sass
- axios

### Para instalar

- `npm i react-icons react-router-dom sass axios`

# USAR DEPOIS

```tsx
// Release date formatting
const releaseDate = new Date(game.releaseDate);
const month = releaseDate
  .toLocaleString("pt-BR", { month: "short" })
  .replace(".", "");
const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
const formattedDate = `${releaseDate
  .getDate()
  .toString()
  .padStart(2, "0")} ${formattedMonth} ${releaseDate.getFullYear()}`;
```
