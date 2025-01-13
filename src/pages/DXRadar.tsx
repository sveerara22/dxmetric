import React, { useState, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Sliders, Upload } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface TeamMetrics {
  team: string;
  efficiency: number;
  engagement: number;
  quality: number;
  speedOfDelivery: number;
  easeOfDelivery: number;
}

const DXRadar = () => {
  const [teams, setTeams] = useState<TeamMetrics[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      
      const newTeams: TeamMetrics[] = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const values = line.split(',').map(v => v.trim());
          return {
            team: values[0],
            efficiency: Number(values[1]),
            engagement: Number(values[2]),
            quality: Number(values[3]),
            speedOfDelivery: Number(values[4]),
            easeOfDelivery: Number(values[5])
          };
        });

      setTeams(newTeams);
      if (newTeams.length > 0) {
        setSelectedTeam(newTeams[0].team);
      }
    };
    reader.readAsText(file);
  };

  const selectedMetrics = teams.find(t => t.team === selectedTeam);

  const data = {
    labels: [
      'Efficiency',
      'Engagement',
      'Software Quality',
      'Speed of Delivery',
      'Ease of Delivery',
    ],
    datasets: [
      {
        label: selectedTeam || 'Team DX Score',
        data: selectedMetrics ? [
          selectedMetrics.efficiency,
          selectedMetrics.engagement,
          selectedMetrics.quality,
          selectedMetrics.speedOfDelivery,
          selectedMetrics.easeOfDelivery,
        ] : [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 14,
          },
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
        },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Developer Experience Radar
        </h1>
        <p className="text-xl text-violet-200 max-w-2xl mx-auto">
          Upload your team's metrics and analyze the developer experience across key dimensions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Upload className="h-6 w-6 text-violet-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Upload Team Data</h2>
            </div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-300"
            >
              Choose CSV File
            </button>
            <p className="mt-2 text-sm text-violet-200">
              Upload a CSV file with columns: Team, Efficiency, Engagement, Quality, Speed of Delivery, Ease of Delivery
            </p>
          </div>

          {teams.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-violet-200 mb-2">
                Select Team
              </label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                {teams.map((team) => (
                  <option key={team.team} value={team.team} className="bg-gray-900">
                    {team.team}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedMetrics && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Current Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-violet-200">
                  <p>Efficiency: {selectedMetrics.efficiency}/10</p>
                  <p>Engagement: {selectedMetrics.engagement}/10</p>
                  <p>Quality: {selectedMetrics.quality}/10</p>
                </div>
                <div className="text-violet-200">
                  <p>Speed of Delivery: {selectedMetrics.speedOfDelivery}/10</p>
                  <p>Ease of Delivery: {selectedMetrics.easeOfDelivery}/10</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <Radar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default DXRadar;