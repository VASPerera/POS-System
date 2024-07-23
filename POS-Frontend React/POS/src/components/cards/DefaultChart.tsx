
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black"

const DefaultChart:React.FC = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero : true
      },
    },
  }

  return (
    <div>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default DefaultChart;

