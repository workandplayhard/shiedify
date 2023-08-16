export const header1 = (
  <div className="alerts-qty">
    <div className="qty-data">
      <p>
        <span>1672</span>&nbsp;from Dec 1
      </p>
    </div>
    <div className="rating down">
      <p data-icon="">2.2%</p>
    </div>
  </div>
)

export const header2 = (
  <div className="alerts-qty">
    <div className="qty-data">
      <p>
        <span>1323</span>&nbsp;from Dec 1
      </p>
    </div>
    <div className="rating up">
      <p data-icon="">4.9%</p>
    </div>
  </div>
)

const labels = [
  'Dec 1',
  'Dec 5',
  'Dec 10',
  'Dec 15',
  'Dec 20',
  'Dec 25',
  'Dec 31',
]

export const chartData = {
  line: {
    labels,
    datasets: [
      {
        label: '',
        data: [500, 1000, 1500, 1000, 1000, 500, 1500],
        borderColor: '#9E77ED',
        backgroundColor: '#9E77ED',
        pointBorderColor: '#9E77ED',
        pointBackgroundColor: '#9E77ED',
      },
    ],
  },
  pie: {
    datasets: [
      {
        label: '# of Values',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#9E77ED',
          '#9E77ED',
          '#9E77ED',
          '#9E77ED',
          '#9E77ED',
          '#9E77ED',
        ],
        borderColor: ['white', 'white', 'white', 'white', 'white', 'white'],
        borderWidth: 4,
      },
    ],
  },
  doughnut: {
    datasets: [
      {
        label: '# of Values',
        data: [68, 32],
        backgroundColor: ['#8CC24A', '#021E4C'],
        borderWidth: 0,
        weight: 2,
      },
    ],
  },
}
