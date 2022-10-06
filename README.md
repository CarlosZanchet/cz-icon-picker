
# Icon Picker

Componente de seleção e renderização de ícones baseado no Font-Awesome.




## Funcionalidades

- Listagem de Ícones (Font-Awesome)
- Seleção e renderização através do nome


## Autores

- [@CarlosZanchet](https://www.github.com/CarlosZanchet)


## Instalação


```bash
  npm install cz-icon-picker
```


## Exemplo

`IconPicker` : Container com de filtro e listagem dos ícones.

`Icon` : Renderiza o ícone através da informação passada por propriedade.

#### IconPicker

| Propriedade   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `onChange` | `function(icon: string) => void` | **Obrigatório**. função que retorna o ícone selecionado. |

#### Icon

| Propriedade   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `icon`      | `string` |  Nome do ícone |
| `size?`      | `number` |  Tamanho do ícone em unidade rem|
| `color?`      | `string` |  Define a cor do ícone |

```javascript
import { useState } from "react";
import { IconPicker, Icon } from "cz-icon-picker";

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