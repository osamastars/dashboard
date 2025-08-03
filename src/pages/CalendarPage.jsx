import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date
  const [viewMode, setViewMode] = useState("month");

  // Sample events data
  const events = [
    {
      id: 1,
      title: "test",
      subtitle: "test",
      date: 8,
      color: "bg-orange-500",
      type: "test",
    },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday = 0 to Monday = 0
  };

  const getEventsForDate = (day, isNextMonth = false) => {
    return events.filter(
      (event) =>
        event.date === day && (isNextMonth ? event.nextMonth : !event.nextMonth)
    );
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const daysInPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const days = [];

    // Previous month's trailing days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <div
          key={`prev-${day}`}
          className="h-32 border border-[#CC9F2C] bg-[#1a1a1a] p-2"
        >
          <div className="text-gray-500 text-sm font-medium mb-1">{day}</div>
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      days.push(
        <div
          key={day}
          className="h-32 border border-[#CC9F2C] bg-[#000000] p-2 relative"
        >
          <div className="text-white text-sm font-medium mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.map((event, index) => (
              <div
                key={event.id}
                className={`${event.color} text-white text-xs px-2 py-1 rounded font-medium cursor-pointer hover:opacity-80 transition-opacity`}
                title={event.subtitle}
              >
                <div className="font-semibold">{event.title}</div>
                {event.subtitle && (
                  <div className="text-xs opacity-90 truncate">
                    {event.subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Next month's leading days
    const totalCells = 42; // 6 weeks × 7 days
    const remainingCells = totalCells - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      const dayEvents = getEventsForDate(day, true);
      days.push(
        <div
          key={`next-${day}`}
          className="h-32 border border-[#CC9F2C] bg-[#1a1a1a] p-2"
        >
          <div className="text-gray-500 text-sm font-medium mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.map((event, index) => (
              <div
                key={event.id}
                className={`${event.color} text-white text-xs px-2 py-1 rounded font-medium cursor-pointer hover:opacity-80 transition-opacity opacity-60`}
                title={event.subtitle}
              >
                <div className="font-semibold">{event.title}</div>
                {event.subtitle && (
                  <div className="text-xs opacity-90 truncate">
                    {event.subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-[#000000] min-h-full text-white font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center space-x-2 bg-[#1a1a1a] border border-[#CC9F2C] px-4 py-2 rounded-xl">
                <span className="text-lg font-semibold">
                  {monthNames[currentDate.getMonth()]}
                </span>
                <span className="text-lg font-semibold">
                  {currentDate.getFullYear()}
                </span>
              </div>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-[#CC9F2C] text-white rounded-xl hover:bg-[#b8912a] transition-colors">
              Add Event
            </button>
            <div className="flex bg-[#1a1a1a] border border-[#CC9F2C] rounded-xl p-1">
              <button
                onClick={() => setViewMode("month")}
                className={`px-3 py-1 text-sm rounded-xl transition-colors ${
                  viewMode === "month"
                    ? "bg-[#CC9F2C] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setViewMode("week")}
                className={`px-3 py-1 text-sm rounded-xl transition-colors ${
                  viewMode === "week"
                    ? "bg-[#CC9F2C] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Week
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-[#000000] rounded-xl overflow-hidden border border-[#CC9F2C]">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-[#1a1a1a] border-b border-[#CC9F2C]">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-4 text-center text-sm font-semibold text-gray-300 border-r border-[#CC9F2C] last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">{renderCalendarGrid()}</div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-sm text-gray-300">SEO & Analytics</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <span className="text-sm text-gray-300">Design & Development</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded"></div>
            <span className="text-sm text-gray-300">Strategy & Marketing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded"></div>
            <span className="text-sm text-gray-300">Creative</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-300">Launch & Publishing</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
