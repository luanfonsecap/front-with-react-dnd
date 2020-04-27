	export function loadLists() {
		return [
			{ 
				title: 'Tarefas', 
				creatable: true,
				cards: [
					{
						id: 1,
						content: 'Estudar sobre o TypeORM',
						labels: ['#2ecc71'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
					{
						id: 2,
						content: 'Iniciar projeto pessoal',
						labels: ['#c53030'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
					{
						id: 3,
						content: 'Estudar módulo 03 de React Native',
						labels: ['#c53030'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
					{
						id: 4,
						content: 'Criar layout para aplicação mobile',
						labels: ['#2ecc71'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
				]
			},
			{ 
				title: 'Fazendo', 
				creatable: false,
				cards: [
					{
						id: 6,
						content: 'Recriando clone do Pipefy',
						labels: [],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					}
				]
			},
			{ 
				title: 'Pausado', 
				creatable: false,
				cards: [
					{
						id: 7,
						content: 'Estudar styled components',
						labels: ['#c53030'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
					{
						id: 8,
						content: 'Ler artigo sobre SOLID',
						labels: ['#2ecc71'],
						user: 'https://avatars3.githubusercontent.com/u/43269295?s=460&u=68c66696b2d12eef17dff32c0c4a857ae19fcba7&v=4'
					},
					{
						id: 9,
						content: 'Ajustes no desafio de ReactJS',
						labels: [],
					}
				]
			},
			{ 
				title: 'Concluído', 
				creatable: false,
				done: true,
				cards: [
					{
						id: 10,
						content: 'Atividade de desenvolvimento web',
						labels: [],
					},
				]
			},
		];
	}
	