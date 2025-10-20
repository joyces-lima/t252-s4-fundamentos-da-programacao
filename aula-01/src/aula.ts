
import videosJson from "../data/videos.json";

export interface Video {
  titulo: string;
  canal: string;
  canalVerificado: boolean;
  duracaoSeg: number;
  views: number;
  like: number;
  dislike: number;
  categoria: string;
  tags: string[];
  descricao: string;
  url: string;
}

const videos: Video[] = videosJson as Video[];

// console.log(videos);

// Exercício – map
// Você recebeu um array de vídeos e precisa exibir apenas as informações principais de cada um, de forma amigável. Voce deve usar o método map para transformar o array original em um novo array de strings no formato:

// "título do vídeo: "aula da jess",
//  autor: "minas programam"
//  visualizações: 1000000000000000 
//  duração (min): 30"

// Dica:
// A duração está em segundos (duracaoSeg), então divida por 60 pra transformar em minutos.
// Depois exiba no console o resultado do map.

const videosDadosTratados = videos.map((videos) => {
  const duracaoMin: number = videos.duracaoSeg / 60
  return {
    título: videos.titulo,
    canal: videos.canal,
    visualizações:videos.views, 
    duraçãoMin: duracaoMin
  }
})

// console.log(videosDadosTratados)

// Exercício – filter
// Agora que você já consegue exibir os vídeos, o time quer aplicar alguns filtros.

// Parte A Liste apenas os vídeos que estão bombando (ou seja, com mais de 2000 visualizações).

const videosBombando = videos.filter((videos) => videos.views > 2000)
// console.log(videosBombando)


// Parte B Liste os vídeos com mais dislikes (aqueles que receberam mais reações negativas).
// Voce deve usar o filter para criar um novo array com vídeos que tenham views > 2000.
// Voce deve usar outro filter para mostrar os vídeos com o maior número de dislikes.

// Dica:
// Use for ou reduce para encontrar o vídeo com maior número de dislike e depois use no filter para fazer a comparaçao.

const numeroMaximoDislikes = videos.reduce((acumulador, video) => {
  if (video.dislike > acumulador) {
    acumulador = video.dislike
  }
  return acumulador
}, 0) // <= Esse zero indica o valor que o meu acumulador deve iniciar
console.log("Maior número de Dislikes: ", numeroMaximoDislikes)

const videosComMaisDislikes = videos.filter((video) => {
  if (video.dislike === numeroMaximoDislikes) {
    return true
  } else {
    return false
  }
})
console.log("Videos com o maior némero de Dislikes: ", videosComMaisDislikes)

