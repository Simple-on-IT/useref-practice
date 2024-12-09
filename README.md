# useRef | Frontend Advent #10

## Задача:
Реализовать рейтинг новогодних фильмов через библиотеку chart.js, используя оригинальную библиотеку.

## Как выполнить задание:

Это front-end приложение на React. Вёрстка уже готова, вам нужно заниматься только логикой. Следуйте инструкциям ниже.

В файле `MovieChart.tsx` нужно создать экземпляр класса `Chart` и положить его в `chartInstanceRef`.
Для этого в конструктор класса `Chart` укажите следующие аргументы:
1. `HTMLCanvasElement` - `ref` на тэг `canvas`
2. ChartConfiguration
    - type - 'bar'
    - data - `initialMovieData`
    - options - `chartOptions`

Проверьте результат через сборку проекта.
В рамках усложнения можете расширить класс `Chart` своим классом, обновив конструктор и добавив новый функционал. 
Не используйте `useEffect` для обновления данных графика - в такой реализация в нём нет необходимости.

## Запуск проекта:
* `npm i` - установка библиотек
* `npm run dev` - сборка для разработки

## Дополнительные материалы:
Документация: 
  - `useRef` - https://react.dev/reference/react/useRef
  - `chart.js` - https://www.chartjs.org/docs/latest/getting-started/    

Видео - https://youtube.com/shorts/ORKoKvASo-A?feature=share
