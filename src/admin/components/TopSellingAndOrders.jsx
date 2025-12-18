import React from "react";

const topSelling = [
  { id: 1, name: "Aditi Essence", sales: "1245 Sales", price: "$328,500", percent: "+12.5%", percentColor: "text-[#22FF0030]" },
  { id: 2, name: "Mahakali", sales: "1245 Sales", price: "$38,500", percent: "-12.5%", percentColor: "text-red-500" },
  { id: 3, name: "Maheshwari", sales: "1245 Sales", price: "$28,500", percent: "+12.5%", percentColor: "text-[#22FF0030]" },
  { id: 4, name: "Maheshwari", sales: "1245 Sales", price: "$8,500", percent: "+12.5%", percentColor: "text-[#22FF0030]" },
  { id: 5, name: "Maheshwari", sales: "1245 Sales", price: "$0", percent: "-0.1%", percentColor: "text-red-500" },
];

const recentOrders = [
  { orderId: "#ORD-1247", status: "Completed", statusColor: "bg-[#22FF0030] text-[#22FF00]", name: "Sarah Chen", product: "Aditi Essence", time: "2 min ago" },
  { orderId: "#ORD-1247", status: "Processing", statusColor: "bg-[#00D4FF0F] text-[#00D4FF]", name: "Sarah Chen", product: "Aditi Essence", time: "1 hour ago" },
  { orderId: "#ORD-1247", status: "Pending", statusColor: "bg-[#D9FF0030] text-[#D9FF00]", name: "Sarah Chen", product: "Aditi Essence", time: "3 hour ago" },
  { orderId: "#ORD-1247", status: "Completed", statusColor: "bg-[#22FF0030] text-[#22FF00]", name: "Sarah Chen", product: "Aditi Essence", time: "1 day ago" },
  { orderId: "#ORD-1247", status: "Pending", statusColor: "bg-[#D9FF0030] text-[#D9FF00]", name: "Sarah Chen", product: "Aditi Essence", time: "1 day ago" },
];

const TopSellingAndOrders = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">

      {/* LEFT: TOP SELLING PERFUMES */}
      <div className="bg-[#FFFFFF0A] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg">

        <h2 className="text-lg sm:text-xl text-white mb-1">Top Selling Perfumes</h2>
        <p className="text-gray-400 text-[10px] sm:text-xs mb-4 sm:mb-6">
          Best performers this month
        </p>

        <div className="space-y-3 sm:space-y-4">
          {topSelling.map((item) => (
            <div
              key={item.id}
              className="
                w-full bg-[#020523]/40 
                rounded-xl 
                flex justify-between items-center
                p-3 sm:p-4
                hover:bg-[#1e2746]/60
                transition-all duration-300
              "
            >
              {/* Left content */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#141b3d] flex items-center justify-center text-[#00d5ff] text-sm sm:text-base font-bold">
                  {item.id}
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm">{item.name}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">{item.sales}</p>
                </div>
              </div>

              {/* Right content */}
              <div className="text-right">
                <p className="text-white font-semibold text-xs sm:text-sm">{item.price}</p>
                <p className={`text-[10px] sm:text-xs font-medium ${item.percentColor}`}>
                  {item.percent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: RECENT ORDERS */}
      <div className="bg-[#FFFFFF0A] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg">

        <h2 className="text-lg sm:text-xl text-white mb-1">Recent Orders</h2>
        <p className="text-gray-400 text-[10px] sm:text-xs mb-4 sm:mb-6">
          Latest Order Activity
        </p>

        <div className="space-y-3 sm:space-y-4">
          {recentOrders.map((order, index) => (
            <div
              key={index}
              className="
                w-full bg-[#020523]/40 
                rounded-xl
                flex justify-between items-center
                p-3 sm:p-4
                hover:bg-[#1e2746]/60
                transition-all duration-300
              "
            >
              {/* Left side */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 bg-[#00d5ff] rounded-full mt-2 shadow-[0_0_8px_#00d5ff]"></div>

                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1">
                    <p className="text-white text-xs sm:text-sm font-medium">{order.orderId}</p>
                    <span className={`
                        text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md 
                        ${order.statusColor}
                      `}>
                      {order.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-[10px] sm:text-xs">
                    {order.name} <span className="mx-1">•</span> {order.product}
                  </p>
                </div>
              </div>

              {/* Time */}
              <p className="text-gray-400 text-[10px] sm:text-xs  whitespace-nowrap">
                {order.time}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TopSellingAndOrders;
