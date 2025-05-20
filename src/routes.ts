import { Router, Request, Response } from "express";
import userController from './controllers/user'



const routes = Router();

// Rota de teste
routes.get("/", (req: Request, res: Response) : any =>  {
  return res.send("rota de teste!!");
});

// Rota que retorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req: Request, res: Response) : any => {
  return res.json({
    items: [
      {
        id: "1",
        name: "Jean",
        idade: 19,
        cargo: "Aluno",
        custoPorHora: 120,
        temLicenca: false,
      },
      {
        id: "2",
        name: "Adulto",
        idade: 17,
        cargo: "Aluno",
        custoPorHora: 10,
        temLicenca: false,
      },
      {
        id: "3",
        name: "3K",
        idade: 22,
        cargo: "Repositor condor junior",
        custoPorHora: 5,
        temLicenca: false,
      },
    ],
  });
});

routes.get("/images", (req: Request, res: Response) : any => {
  return res.json({
    results: [
      {
        id: "1",
        name: "RS6",
        images: "https://quatrorodas.abril.com.br/noticias/audi-rs6-avant-performance-ganha-novos-turbos-e-agora-chega-aos-630-cv/",
      },
      {
        id: "2",
        name: "McDonald´s",
        images: "https://updateordie.com/2025/01/17/a-evolucao-do-logo-do-mcdonalds-uma-jornada-visual-atraves-das-decadas/",
      },
      {
        id: "3",
        name: "Chicletinho",
        images: "https://www.araujo.com.br/chiclete-trident-melancia-14-unidades-leve-mais-por-menos/77099.html",
      },
    ],
  });
});

routes.post("/user", (req: Request, res: Response) : any => userController.create(req, res))

export default routes;
