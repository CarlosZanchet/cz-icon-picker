
# ✔️ Icon Picker

Componente de seleção e renderização de ícones baseado no Font-Awesome.




## Stack utilizada

**Front-end:** ⚛️React, Typescript, styled-componentes


## Screenshots

![App Screenshot](https://uploaddeimagens.com.br/images/004/052/947/original/icon-picker.png?1665143571)

- Exemplo de utilização em aplicação

![App Screenshot](https://uploaddeimagens.com.br/images/004/053/855/full/conpicker2.png?1665167829)



- A estilização do componente fica a cargo do componente da aplicação que vai utiliza-lo, dando mais dinamiso para como trabalhar com o componente.

## 🛠️ Funcionalidades

- Listagem de Ícones (Font-Awesome)
- Seleção e renderização através do nome


## Autores

- [@CarlosZanchet](https://www.github.com/CarlosZanchet)


## 🖥️ Instalação


```bash
  npm i icon-picker-react
```


## Exemplo

`IconPicker` : Container com de filtro e listagem dos ícones.

`Icon` : Renderiza o ícone através da informação passada por propriedade.

#### IconPicker

| Propriedade   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `onChange` | `function(icon: string) => void` | Função que retorna o ícone selecionado. |

#### Icon

| Propriedade   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `icon`      | `string` |  Nome do ícone |
| `size?`      | `number` |  Tamanho do ícone em unidade rem|
| `color?`      | `string` |  Define a cor do ícone |

```javascript
import { useState } from "react";
import { IconPicker, Icon } from "icon-picker-react";

function App() {
  const [iconLabel, setIconLabel] = useState('')
  return (
    <>
        <Icon icon={iconLabel} />
        <IconPicker onChange={setIconLabel} />
    </>
  );
}

export default App;
```
- [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-zanchet-0a6ab016a/)

