export interface WorkType {
  id: string;
  name: string;
  description: string;
  url?: string;
  unavailable?: boolean;
  year: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  code: string;
}

export const WorkData: WorkType[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    description: "当サイト。",
    year: "2022.05",
    url: "https://asatooi-portfolio.netlify.app/",
    thumbnail: "/images/portfolio/portfolio.png",
    images: ["/images/portfolio/portfolio.png"],
    tags: [
      "React.js",
      "styled-components",
      "react-spring",
      "TypeScript",
      "react-router-dom",
    ],
    code: "https://github.com/AsatoOi/portfolio-app.git",
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description: "Reactを使った、スネークゲーム。",
    year: "2022.05",
    url: "https://asatooi.github.io/react-snake-app/",
    thumbnail: "/images/snake/snake.png",
    images: [
      "/images/snake/snake.png",
      "/images/snake/snake1.png",
      "/images/snake/snake2.png",
    ],
    tags: ["React.js", "CSS"],
    code: "https://github.com/AsatoOi/react-snake-app.git",
  },
  {
    id: "scoreboard-app",
    name: "Score Board アプリ",
    description: "Reactを使った、スコアボードとストップウォッチアプリ。",
    year: "2022.05",
    url: "https://fastidious-meringue-2ec656.netlify.app/",
    thumbnail: "/images/score-board-app/score-board.png",
    images: [
      "/images/score-board-app/score-board.png",
      "/images/score-board-app/score-board1.png",
    ],
    tags: ["React.js", "CSS"],
    code: "https://github.com/AsatoOi/score-board.git",
  },
  {
    id: "todo",
    name: "To Do アプリ",
    description: "Reactを使った、To DO アプリ。",
    year: "2021.12",
    url: "https://magenta-gumption-476b85.netlify.app",
    thumbnail: "/images/todo/todo.png",
    images: ["/images/todo/todo.png", "/images/todo/todo1.png"],
    tags: ["React.js", "CSS"],
    code: "https://github.com/AsatoOi/react-todo-app.git",
  },
  {
    id: "tic-tac-toe-app",
    name: "Tic Tac Toe",
    description: "Tic-Tac-Toeゲームアプリ",
    year: "2021.11",
    url: "https://endearing-dasik-457c75.netlify.app",
    thumbnail: "/images/tic-tac-toe/tic.png",
    images: ["/images/tic-tac-toe/tic.png", "/images/tic-tac-toe/tic1.png"],
    tags: ["React.js", "CSS"],
    code: "https://github.com/AsatoOi/tic-tac-toe-app.git",
  },
  {
    id: "box-shadow-maker",
    name: "Box Shadow Maker",
    description:
      "CSSでボックスシャドウを付ける際にイメージが湧くようなボックスシャドージェネレーター。",
    year: "2022.02",
    url: "https://beamish-sunshine-5ecb63.netlify.app/",
    thumbnail: "/images/box-shadow-app/box-shadow-app.png",
    images: [
      "/images/box-shadow-app/box-shadow-app.png",
      "/images/box-shadow-app/box-shadow-app1.png",
    ],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/box-shadow-app.git",
  },
  {
    id: "gradation-generator",
    name: "Gradation Generator",
    description:
      "CSSでバックグラウンドカラーを付ける際にお洒落なグラデーションが簡単に確かめられるバックグラウンドカラージェネレーター。",
    year: "2022.04",
    url: "https://resonant-hotteok-134750.netlify.app",
    thumbnail: "/images/gradation/gradation.png",
    images: [
      "/images/gradation/gradation1.png",
      "/images/gradation/gradation2.png",
    ],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/gradient-generator.git",
  },
  {
    id: "ball-shoot-game",
    name: "Ball Shoot Game",
    description: "matter.jsを用いたシューティングゲーム",
    year: "2022.05",
    url: "https://loquacious-cat-f07bb7.netlify.app",
    thumbnail: "/images/ball/ball.png",
    images: ["/images/ball/ball1.png", "/images/ball/ball2.png"],
    tags: ["Vanilla.js", "matter.js"],
    code: "https://github.com/AsatoOi/ball-shoot-game-app.git",
  },
  {
    id: "bmi-calculator",
    name: "BMI計算機",
    description:
      "身長と体重のレンジを変えることでBMIの数値を出し、身長に対して適切な体重かどうかを計測するアプリ。",
    year: "2022.02",
    url: "https://willowy-bonbon-ba0564.netlify.app",
    thumbnail: "/images/bmi/bmi.png",
    images: ["/images/bmi/bmi.png", "/images/bmi/bmi1.png"],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/bmi-calculator.git",
  },
  {
    id: "age-calculator",
    name: "年齢計算機",
    description:
      "生まれた日を入力することで、現在までの年・月・日を表示するアプリ。",
    year: "2022.02",
    url: "https://capable-toffee-97b611.netlify.app",
    thumbnail: "/images/age/age.png",
    images: ["/images/age/age.png", "/images/age/age1.png"],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/age-calculator.git",
  },
  {
    id: "temperature-converter",
    name: "℃ ⇄ ℉",
    description: "摂氏と華氏を変換するアプリ",
    year: "2021.09",
    url: "https://cheery-cascaron-3e5cbb.netlify.app",
    thumbnail: "/images/temperature/temperature.png",
    images: [
      "/images/temperature/temperature.png",
      "/images/temperature/temperature1.png",
    ],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/temperature-converter.git",
  },
  {
    id: "character-count",
    name: "文字数カウント",
    description: "文章の文字数を数えるアプリ",
    year: "2021.10",
    url: "https://relaxed-kashata-d6c63c.netlify.app",
    thumbnail: "/images/count/count.png",
    images: ["/images/count/count.png", "/images/count/count1.png"],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/character-count.git",
  },
  {
    id: "quiz-app",
    name: "クイズアプリ",
    description:
      "授業内で出された課題を元に自分でカスタマイズし、クイズアプリを作成しました。",
    year: "2021.09",
    url: "https://gentle-bavarois-a546ec.netlify.app",
    thumbnail: "/images/quiz/quiz-app.png",
    images: ["/images/quiz/quiz-app1.png", "/images/quiz/quiz-app2.png"],
    tags: ["Vanilla.js", "HTML", "CSS"],
    code: "https://github.com/AsatoOi/quiz-app.git",
  },
];
