import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(context.parsed.y);
                }
                return label;
            }
        }
    },
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Sprzedaż w miesiącu'
      },
    },
};

export function BarChart() {
    const documents = useSelector(state => state.document.data);
    const choiceMonth = useSelector(state => state.document.defaultMonth);

    const sumValues = documents[choiceMonth] ? Object.values(documents[choiceMonth]).map(e => parseFloat(e.sum)) : 0;
    const labels = documents[choiceMonth] ? Object.values(documents[choiceMonth]).map(e => e.date.slice(-5)) : 0;
    const data = {
        labels,
        datasets: [
          {
            label: choiceMonth[0].toUpperCase() + choiceMonth.slice(1, choiceMonth.length),
            data: sumValues,
            backgroundColor: 'rgba(116, 126, 221, 0.5)',
          }
        ],
    };

    return (
        <div className="window-container__hide">
          { documents ? <Bar options={options} data={data} /> : null }           
        </div>
    )
}