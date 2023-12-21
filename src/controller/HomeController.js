import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Tangerina',
      email: 'gabriel@email.com',
      idade: 18,
      peso: 83,
      altura: 1.83,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
