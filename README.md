# AWS - Fitness Website - Template Adaptado

Este projeto é baseado em um template de site fitness disponível no [HTMLCodex](https://htmlcodex.com/). O objetivo principal deste projeto é demonstrar e adquirir conhecimento com os serviços da **Amazon Web Services (AWS)**, como **S3**, **IAM** e **Buckets**. O template foi modificado para fins educacionais e não tem fins comerciais.

## Objetivo do Projeto

O objetivo deste projeto é hospedar o site fitness na **Amazon Web Services (AWS)** utilizando os seguintes recursos:
- **Amazon S3** para armazenamento de arquivos estáticos (imagens, arquivos CSS, JS, etc.).
- **Buckets S3** para gerenciar o armazenamento de arquivos do site.
- **IAM (Identity and Access Management)** para gerenciar o acesso e as permissões de usuários ao S3.

Este projeto foi criado para fins educacionais e para entender melhor como esses serviços da AWS funcionam. Não há intenções comerciais relacionadas a este template.


## Tecnologias

- Express;
- EJS;
- Github;
- AWS;

## Funcionalidades

- **Interface de site fitness** com design responsivo.
- **Armazenamento de arquivos estáticos** no AWS S3.
- **Acesso controlado** com o uso de IAM para gerenciar permissões no ambiente AWS.
- **Foco educacional**, com modificações realizadas no template original para aprendizado.

## Como Rodar o Projeto AWS

### Pré-requisitos
Antes de rodar o projeto, você precisa ter uma conta na AWS e ter configurado os seguintes serviços:

1. **AWS S3**: Para armazenamento de arquivos estáticos (como imagens e scripts).
2. **AWS IAM**: Para definir as permissões necessárias para acessar o S3 e outros recursos.
3. **AWS Bucket**: Para hospedar os arquivos do site.

### Passos para Hospedar na AWS:

1. Crie um **Bucket S3** na sua conta AWS.
2. Faça o upload dos arquivos do site para o bucket criado.
3. Habilite o **Acesso Público** ao bucket para permitir que os arquivos sejam acessados pela web.
4. Configure o **IAM** para garantir que apenas usuários autorizados possam acessar o conteúdo do bucket.
5. Defina o bucket como um **site estático** através da configuração do S3, com o arquivo de índice configurado para `index.html`.

### Como Modifiquei o Template

- Alterações foram feitas para adaptar o template a uma estrutura mais organizada, além de dar um toque pessoal, mas com ênfase na integração com a AWS.
- A estrutura de arquivos foi organizada para otimizar o uso do S3.
- O template foi modificado para uso sem fins comerciais e com foco apenas em aprendizado.

## Licença

Este projeto não é de autoria própria, sendo baseado em um template do site **HTMLCodex**. O uso do template segue as **condições de uso** do **HTMLCodex**.

- Template original: [HTMLCodex Fitness Template](https://htmlcodex.com/)
- Este projeto é **não comercial** e **educacional**.


### PROVA AWS

- Usar Git log para voltar o commit
- Dia 23;