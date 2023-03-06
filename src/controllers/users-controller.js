
class AuthController {

  constructor() {
    this.usuarios = [];
    this.signin = this.signin.bind(this);
  }

  signin(req, res) {
    const { username, avatar } = req.body;
  
    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }
  
    this.usuarios.push({ username, avatar });
  
    res.status(200).send('OK deu tudo certo');
  }
}

export default new AuthController();