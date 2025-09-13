const express = require('express');
const app = express();

// Serve os arquivos estáticos do frontend
app.use(express.static('../frontend'));

// Permite receber JSON no POST
app.use(express.json());

// Rota para processar o pagamento
app.post('/api/pagamento', (req, res) => {
  const { user } = req.body;

  // Valida se tem carteira conectada
  if (!user) {
    return res.status(400).json({ error: 'Carteira não conectada' });
  }

  console.log(`[DEVNET] Pagamento recebido de: ${user}`);

  // Simula transferência SUI (seria via contrato Move)

  // Gera um ID aleatório e simula URL no Walrus
  const idRecibo = Math.random().toString(36).substr(2, 9);
  const walrus_url = `https://walrus-devnet.mystenlabs.com/v1/objects/${idRecibo}`;

  // Retorna sucesso + link do recibo
  res.json({
    success: true,
    message: 'Pagamento simulado na Devnet',
    walrus_url
  });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 MSP Backend rodando em http://localhost:${PORT}`);
  console.log('💡 Conectado à Sui Devnet (simulado)');
});