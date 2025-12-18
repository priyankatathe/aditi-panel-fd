import React from "react";
import { X } from "lucide-react";
import bg1 from "/public/bg1.png"
import { Icon } from "@iconify/react";
const OrderDetails = ({ open, onClose, order }) => {
    if (!open || !order) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">

            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* RIGHT SIDE PANEL */}
            <div className="relative w-[450px] md:w-[520px] h-full bg-[#020523] text-white p-6 overflow-y-auto shadow-2xl border-l border-white/10">

                {/* CLOSE BUTTON */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* ORDER HEADER */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold mt-6">{order.id}</h2>
                        <p className="text-gray-400 text-sm">{order.date}</p>
                    </div>
                    <span className="px-4 py-1 mt-3 inline-block mr-4 rounded-xl bg-green-700/20 text-green-400">
                        {order.status}
                    </span>
                </div>

                {/* SECTIONS */}
                <div className="mt-8 space-y-6">

                    {/* CUSTOMER INFO */}
                    <div className="bg-[#0B1135] p-5 rounded-2xl border border-white/10">
                        <h3 className="text-sm text-gray-400 mb-3  font-manrope">Customer Information</h3>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#1a214a] flex items-center justify-center text-[#00d2ff] font-semibold">
                                {order.name[0]}
                            </div>

                            <div>
                                <p className="font-medium">{order.name}</p>
                                <p className="text-gray-400 text-sm">{order.email}</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs mt-4">
                            Shipping Address
                        </p>

                        <p className="text-sm mt-1">
                            123 Park Avenue, New York NY 1959651
                        </p>
                    </div>

                    {/* ORDER ITEMS */}
                    <div className="bg-[#0B1135] p-5 rounded-2xl border border-white/10">
                        <h3 className="text-sm text-gray-400 mb-3">Order Items</h3>

                        {[1, 2].map((i) => (
                            <div key={i} className="flex justify-between  items-center py-3 border-b border-white/10">
                                <div className="flex items-center shadow   gap-3">
                                    <div className="bg-[#FFFFFF2E] rounded rounded-xl">
                                        <img
                                            src={bg1}
                                            className="w-12 h-12  rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <p className=" font-manrope">Aditi Essence</p>
                                        <p className="text-gray-400 text-xs  font-manrope">Quantity: 1</p>
                                    </div>
                                </div>

                                <p>$520</p>
                            </div>
                        ))}

                        <div className="mt-4">
                            <div className="flex justify-between text-gray-300 text-sm">
                                <p className="text-[#A19F9F]">Subtotal</p><p>$1520</p>
                            </div>
                            <div className="flex mt-3 justify-between text-gray-300 text-sm">
                                <p>Shipping</p><p>$0</p>
                            </div>

                            <div className="flex justify-between text-lg mt-3">
                                <p>Total</p><p>$1,040</p>
                            </div>
                        </div>
                    </div>

                    {/* TIMELINE */}
                    <div className="bg-[#0B1135] p-5 rounded-2xl border border-white/10">
                        <h3 className="text-sm text-gray-400 mb-3">Order Timeline</h3>

                        {[
                            "Order Placed",
                            "Payment Confirmed",
                            "Processing",
                            "Shipped",
                            "Delivered",
                        ].map((step, index) => (
                            <div key={index} className="relative pl-0 pb-8  flex items-center gap-4">

                                {/* ICON BOX */}
                                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#FFFFFF2E] flex items-center justify-center">
                                    <Icon
                                        icon="solar:check-circle-broken"
                                        width="28"
                                        height="28"
                                        className="text-[#00D4FF]"
                                    />
                                </div>

                                {/* VERTICAL LINE */}
                                {index < 4 && (
                                    <div className="absolute left-[29px] top-[60%] w-[1px]  h-10 bg-[#FFFFFF4A]" />
                                )}

                                {/* TEXT BLOCK */}
                                <div>
                                    <p className="font-medium">{step}</p>
                                    <p className="text-gray-400 text-xs">Nov 28, 2024, 10:30 AM</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
