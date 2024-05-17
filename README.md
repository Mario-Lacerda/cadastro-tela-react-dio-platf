# Desafio Dio - Desenvolvendo a Tela de Cadastro da Plataforma Dio com React



Projeto mais completo e aprimorado para criar uma tela de cadastro da plataforma Dio com React:

#### **1. Configuração do projeto**

Crie um novo projeto React usando o seguinte comando:

```plaintext
npx create-react-app cadastro
```



#### Instale as seguintes dependências:

```plaintext
npm install react-hook-form
npm install yup
```



#### **2. Componentes**

**App.js**

```plaintext
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Desabilitar o botão de envio até que o formulário esteja preenchido
    const submitButton = document.querySelector(".submit-button");
    submitButton.disabled = true;

    // Habilitar o botão de envio quando o formulário estiver preenchido
    const isValid = isValidForm(formData);
    submitButton.disabled = !isValid;
  }, [formData]);

  const handleSubmit = (data) => {
    // Enviar os dados do formulário para o backend
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
```



### **Form.js**



```plaintext
import React, { useState, useEffect } from "react";
import { Formik, Form } from "react-hook-form";
import * as yup from "yup";
import { Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required().minLength(6),
});

const Form = ({ formData, setFormData, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Limpar os erros do formulário
    setErrors({});
  }, [formData]);

  const onSubmit = (values) => {
    // Validar os dados do formulário
    const validationErrors = schema.validate(values);
    if (validationErrors) {
      // Mostrar os erros de validação
      setErrors(validationErrors);
    } else {
      // Submeter os dados do formulário para o backend
      handleSubmit(values);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Field name="nome" label="Nome" type="text" />
      <Field name="email" label="Email" type="email" />
      <Field name="senha" label="Senha" type="password" />
      <ErrorMessage name="nome" />
      <ErrorMessage name="email" />
      <ErrorMessage name="senha" />
      <button className="submit-button" disabled={errors.length > 0}>
        Enviar
      </button>
    </Form>
  );
};

export default Form;
```



**3. Estilos**

#### Adicione o seguinte código ao arquivo `src/index.css`:



```plaintext
body {
  font-family: sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input,
button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  cursor: pointer;
}

button[disabled] {
  opacity: 0.5;
}

.error {
  color: #d32f2f;
}
```



**4. Execução**

Inicie o servidor de desenvolvimento usando o seguinte comando:

```plaintext
npm start
```



Abra o navegador e acesse `http://localhost:3000/` para visualizar o projeto.



**Recursos adicionais**

- React Hook Form
- Yup
- React Router



#### Este projeto aprimorado inclui:

- Validação de formulário usando Yup
- Estilos básicos para melhorar a aparência do formulário
- Uso do React Router para criar uma rota para o formulário de cadastro

 

#### Pode-se continuar aprimorando este projeto adicionando mais funcionalidades, como:

- Geração de senhas aleatórias
- Validação de email em tempo real
- Mensagens de erro personalizadas
- Integração com um backend para enviar os dados do formulário









#  Tela de Cadastro da Plataforma DIO

Projeto de construção das telas de login, cadastro, home e usuario logado da DIO com React.

Projeto em desenvolvimento...

<br>

##  Sumário

-  Features
- Temas abordados
-  Desafio
-  Demonstração
-  Autor

<br>

## Features

<br>

## Temas abordados
- Criando SPA com React;
- Utilização dos Hooks do React;
- Utilização e configuração de React Router dom;

<br>

##  **Desafio**

<br>

##  **Demonstração**

<br>

## Autor
Agradecimento especial:  Bruno Oliveria - Desenvolvedor Front-End