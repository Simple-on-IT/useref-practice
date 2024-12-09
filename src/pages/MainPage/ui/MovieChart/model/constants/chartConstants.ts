import { ChartData } from "chart.js";

const movies = [
  { label: 'Ирония судьбы, или С лёгким паром!', rating: 8.1, color: '#FF6384' },
  { label: 'Карнавальная ночь', rating: 7.8, color: '#36A2EB' },
  { label: 'Ёлки', rating: 6.3, color: '#FFCE56' },
  { label: 'Ёлки 2', rating: 6.0, color: '#FF9F40' },
  { label: 'Чародеи', rating: 7.4, color: '#4BC0C0' },
  { label: 'Три орешка для Золушки', rating: 7.8, color: '#9966FF' },
  { label: 'Вечера на хуторе близ Диканьки', rating: 7.5, color: '#FF6384' },
  { label: 'Подарок на Рождество', rating: 5.6, color: '#36A2EB' },
  { label: 'Один дома', rating: 7.7, color: '#FFCE56' },
  { label: 'Санта Клаус', rating: 6.5, color: '#FF9F40' },
];

// Сортировка по рейтингу по убыванию
const sortedMovies = movies.sort((a, b) => b.rating - a.rating);

// Подготовка данных для графика
const labels = sortedMovies.map((movie) => movie.label);
const data = sortedMovies.map((movie) => movie.rating);
const colors = sortedMovies.map((movie) => movie.color);

export const initialMovieData: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Рейтинг IMDb',
      data,
      backgroundColor: colors,
      borderRadius: 12,
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.9)',
      barThickness: 30,
    },
  ],
};