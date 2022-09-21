import { useState } from 'react';
import emailJS from '@emailjs/browser'
import './App.css';

function App() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === "" || email === "" || message === ""){
      alert("preencha todos os campos")
      return 
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    
    emailJS.send(
      "service_7nb6ptb",
     "template_v1qu6la",
      templateParams,
       "H1teFq_KjTpLPCZVy"
       ).then((response)=>{
        console.log("email enviado", response.status, response.text)
        setName("")
        setEmail("")
        setMessage("")
      },(err)=>{
        console.log("erro", err);
        
      })
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;