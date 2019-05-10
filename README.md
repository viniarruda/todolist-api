# todolist-api

Sumário:

- [Desafio](#desafio)
- [Api infos](#api-infos)
- [Layout](#layout)
- [lnstalação](#instalacao)


## [](#desafio)Desafio

Criar uma aplicação que deve:
- Ler todos os TODOS cadastrados na api e lislá-los como cards
- Ter um input para escrever o Título do Todolist
- Deve ter uma lista com todos os Todos com os botões DELETE e UPDATE
- Ao finalizar o desafio, suba seu projeto no GIT e me envie


## [](#api-infos)Informações API REST


Ler os todos:

```
  METHOD GET
  localhost:3333/todolist
```

Incluir um todo:

```
  METHOD POST
  localhost:3333/todolist
  
  title: VALOR_DO_INPUT
```

Atualizar um todo:

```
  METHOD PUT
  localhost:3333/todolist
  
  _id: ID_DO_TODO
  title: NOVO_VALOR_DO_INPUT
  done: TRUE ou FALSE
```

Deletar um todo:


```
  METHOD DELETE
  localhost:3333/todolist
  
  _id: ID_DO_TODO
```


## [](#layout)Layout

Você deve seguir o layout 

- Esse teste avaliará como você utilizar FLEXBOX
- Está proibido o uso de Frameworks css: (bootstrap, material, bulma, etc),
- Deve estar preparado para mobile. Sinta-se livre para fazer suas próprias modificações para se adequar ao mobile size.
- Quando clicar no botão EDITAR, deve aparecer um component com um INPUT e um BOTÃO, para digitar o novo Título e MARCAR ou DESMARCAR e quando clicar em ATT deve chamar a API de UPDATE
- Quando o Todo estiver marcado como DONE, a cor dele deve ser PRETA
- Cada CARD novo criado deve ter um cor diferente. Dica: nth-child


![Image of Layout](https://github.com/viniarruda/todolist-api/blob/master/src/assets/todolist.png)



## [](#instalacao)Instalação

```git clone git@github.com:viniarruda/todolist-api.git```

```npm install```

```npm run dev```

```localhost:3333/todolist```



Enjoy and good luck! :)
