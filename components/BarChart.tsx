
import React from 'react';

interface ChartData {
    label: string;
    value: number;
    color: string;
}

interface BarChartProps {
    data: ChartData[];
    title: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-full">
            <h3 className="font-semibold text-primary mb-6 text-center text-lg">{title}</h3>
            <div className="space-y-4">
                {data.map(item => (
                    <div key={item.label} className="group flex items-center">
                        <div className="w-1/4 text-sm text-gray-600 text-right pr-4 truncate">{item.label}</div>
                        <div className="w-3/4 bg-gray-200 rounded-full h-6 relative">
                            <div
                                className="h-6 rounded-full text-white text-xs flex items-center justify-end pr-2 transition-all duration-1000 ease-out"
                                style={{ width: `${(item.value / maxValue) * 100}%`, backgroundColor: item.color }}
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.value.toLocaleString()}
                                </span>
                            </div>
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-700 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                {item.value.toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChart;
