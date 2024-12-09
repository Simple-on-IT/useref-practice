import Chart from 'chart.js/auto';

class CustomChart extends Chart {
  /**
   * Обновляет данные графика и применяет изменения.
   * @param newData Новый массив данных для обновления.
   */
  updateData(newData: number[]) {
    if (this.data.datasets[0]) {
      this.data.datasets[0].data = newData;
      this.update();
    } else {
      console.warn('Датасет отсутствует!');
    }
  }
}

export default CustomChart;

