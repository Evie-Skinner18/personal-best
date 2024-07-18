import Chart from 'chart.js/auto';

(async function() {
    const data = [
      { month: 'Jan', personalBest: 10 },
      { month: 'Feb', personalBest: 20 },
      { month: 'Mar', personalBest: 15 },
      { month: 'Apr', personalBest: 25 },
      { month: 'May', personalBest: 27 },
      { month: 'Jun', personalBest: 30 },
      { month: 'Jul', personalBest: 28 },
    ];
  
    new Chart(
      document.getElementById('line-chart'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.month),
          datasets: [
            {
              label: 'PBs by month',
              data: data.map(row => row.personalBest)
            }
          ]
        }
      }
    );
  })();