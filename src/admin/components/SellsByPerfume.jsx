import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Aditi", value: 40, color: "#EBFFBF" }, // Lime
    { name: "Perfection", value: 20, color: "#0017FA" }, // Soft Blue
    { name: "Strength", value: 20, color: "#AE0000" }, // Red
    { name: "Harmony", value: 10, color: "#D207FF" }, // Purple
    { name: "Wisdom", value: 10, color: "#00D4FF" }, // Cyan
];

const SellsByPerfume = () => {
    return (
        <div className="bg-[#FFFFFF0A]  border font-manrope border-white/10 rounded-2xl left-56 p-6 shadow-lg h-full flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">Sells By Perfume</h3>

            <div className="flex-1 flex items-center justify-center relative">
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                                paddingAngle={3}             // EXACT SAME GAP
                                stroke="#0B1135"            // gives that clean gap border
                                strokeWidth={5}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: "#020523", borderColor: "#ffffff20", color: "#fff", borderRadius: "8px" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Inner Text (Optional, purely decorative or total) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white font-bold text-xl">100%</span>
                    </div> */}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-4 space-y-2">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-gray-300">{item.name}</span>
                        </div>
                        <span className="text-gray-400 font-medium">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SellsByPerfume;
