import { useState } from "react";
import Button from "./components/Button";
import Badge from "./components/Badge";
import Input from "./components/Input";
import Card from "./components/Card";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest">React + Tailwind CSS</p>
          <h1 className="text-4xl font-bold mt-2">Biblioteca UI</h1>
          <p className="text-gray-300 mt-2">Componentes reutilizáveis e estilizados</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-6">
        <Card title="Button">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </Card>

        <Card title="Badge">
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Card>

        <Card title="Input">
          <div className="max-w-md space-y-4">
            <Input label="Nome" placeholder="Digite seu nome" value={name} onChange={(event) => setName(event.target.value)} />
            <Button variant="primary" onClick={() => alert(`Olá, ${name || "usuário"}!`)}>Enviar</Button>
            {name && <p className="text-sm text-gray-600">Nome digitado: {name}</p>}
          </div>
        </Card>

        <Card title="Alert">
          <div className="space-y-3">
            <Alert variant="success">Operação realizada com sucesso!</Alert>
            <Alert variant="error">Ocorreu um erro na operação.</Alert>
            <Alert variant="warning">Atenção: confira os dados antes de continuar.</Alert>
          </div>
        </Card>

        <Card title="Card">
          <p className="text-gray-600">Componente reutilizável estilizado com Tailwind CSS.</p>
        </Card>

        <footer className="text-center text-gray-500 text-sm py-4">
          Projeto acadêmico • Biblioteca de componentes React
        </footer>
      </main>
    </div>
  );
}

export default App;
