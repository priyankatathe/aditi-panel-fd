import React from "react";
import { Search, Filter, Eye } from "lucide-react";
import { useGetUsersQuery } from "../../Redux/Apis/usersApi";

const UserList = () => {
  const { data, isLoading, isError } = useGetUsersQuery();

  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const students =
    data?.users?.map((user) => ({
      name: user.name || "N/A",
      email: user.email || "N/A",
      location:
        user.addresses?.length > 0
          ? `${user.addresses[0].city}, ${user.addresses[0].country}`
          : "N/A",
      contact: user.phone || user.addresses?.[0]?.phone || "N/A",
      orders: user.totalOrders || 0,
      status: "Active",
      date: user.createdAt
        ? new Date(user.createdAt).toLocaleDateString()
        : "N/A",
      spent: `$${user.totalSpent || 0}`,
    })) || [];

  return (
    <div className="bg-[#020523] min-h-screen text-white ">
      {/* Search + Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-[#0B1135] p-3 rounded-lg">
        <div className="bg-[#020523] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 w-full md:w-[400px]">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none text-gray-200 w-full"
          />
        </div>

        <div className="bg-[#131a43] border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 justify-center md:justify-start">
          <Filter size={20} />
          <span>All Status</span>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#0B1135] rounded-2xl border border-white/10 p-4 mt-8 overflow-x-auto">
        <div className="min-w-[1100px]">
          {/* Header */}
          <div className="grid grid-cols-8 text-gray-300 text-sm px-6 py-4 border-b border-white/20">
            <span>Customer</span>
            <span className="ml-20">Location</span>
            <span className="ml-12">Contact</span>
            <span className="ml-10">Orders</span>
            <span className="ml-10">Status</span>
            <span className="ml-10">Joined</span>
            <span className="ml-10">Total Spent</span>
            <span className="ml-10">Action</span>
          </div>

          {/* Rows */}
          {students.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-8 px-6 py-5 border-b border-white/10 text-gray-200"
            >
              {/* Customer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  {getInitials(item.name)}
                </div>
                <div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.email}</p>
                </div>
              </div>

              <span className="ml-20 flex items-center text-xs">{item.location}</span>
              <span className="ml-12 flex items-center text-xs">{item.contact}</span>
              <span className="ml-10 flex items-center text-xs">{item.orders}</span>

              <span
                className={`ml-10 h-6 w-16 flex items-center justify-center rounded-lg text-xs
                  ${
                    item.status === "Active"
                      ? "bg-[#22FF0030] text-[#22FF00]"
                      : "bg-[#A19F9F40] text-[#A19F9F]"
                  }
                `}
              >
                {item.status}
              </span>

              <span className="ml-10 flex items-center text-xs">{item.date}</span>
              <span className="ml-10 flex items-center text-green-400 text-xs">
                {item.spent}
              </span>

              <span className="ml-10 flex items-center cursor-pointer text-[#00eaff]">
                <Eye size={20} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
