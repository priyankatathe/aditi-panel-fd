import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";

const data = [
    { name: "Jan", uv: 20000 },
    { name: "Feb", uv: 25000 },
    { name: "Mar", uv: 35000 },
    { name: "Apr", uv: 42000 },
    { name: "May", uv: 38000 },
    { name: "Jun", uv: 30000 },
    { name: "Jul", uv: 45000 },
];

const SalesPerformanceChart = () => {
    return (
        <div className="bg-[#FFFFFF0A] border border-white/10 rounded-2xl p-6 shadow-lg h-full">
            <h3 className="text-white text-lg font-semibold mb-1">Sales Performance</h3>
            <p className="text-gray-400 text-xs mb-6">Revenue & orders over time</p>

            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00d5ff" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00d5ff" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#020523", borderColor: "#ffffff20", color: "#fff" }}
                            itemStyle={{ color: "#00d5ff" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#00d5ff"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6, fill: "#00d5ff", stroke: "#fff", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesPerformanceChart;
