import { Calendar, Clock, Filter, MapPin, Users } from "lucide-react";
import React, { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: "upcoming" | "past";
  attendees?: number;
}

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const events: Event[] = [
    {
      id: 1,
      title: "সিরাত ﷺ পাঠ প্রতিযোগিতা ",
      date: "comming soon",
      time: "comming soon",
      location: "comming soon",
      description:
        "Join us for an enlightening workshop on Islamic principles and their application in modern life.",
      image:
        "https://i.pinimg.com/736x/14/0f/25/140f25cf88881c52d64f4bd3b3f48a79.jpg",
      type: "upcoming",
      //attendees: 0
    },
    {
      id: 2,
      title: "March for Gaza | SUST x BUTEX",
      date: "2025-04-13",
      time: "12:00 PM - 04:00 PM",
      location: "SUST Main Campus to Sylhet City",
      description:
        "The students of Shahjalal University of Science and Technology and Bangladesh University of Textiles (BUTEX) united for a powerful cause — the MARCH FOR GAZA. From SUST campus to Sylhet city, we walked together in solidarity with the oppressed, raising our voices against injustice and calling for peace in Gaza.",
      image: "/marchForGaza.jpg",
      type: "past",
      attendees: 700,
    },
    {
      id: 3,
      title: "Anti-Valentine's Day Campaign",
      date: "2025-02-06",
      time: "3:00 PM - 6:00 PM",
      location: "SUST Campus",
      description:
        "Spreading the message of Islam through peaceful street dawah activities.",
      image: "/valan.jpg",
      type: "past",
      attendees: 25,
    },
    {
      id: 3,
      title: "শাতিম এবং সকল প্রকার জুলুমের বিরুদ্ধে বিক্ষোভ মিছিল",
      date: "2025-02-25",
      time: "12:50 PM - 2:00 PM",
      location: "SUST Campus",
      description:
        "শাতিম এবং সকল প্রকার জুলুমের বিরুদ্ধে গর্জে ওঠা নবী প্রেমীকদের ঈমানের দাবী",
      image: "/bikhob.jpg",
      type: "past",
      attendees: 250,
    },
  ];

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.type === filter
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0a415d] to-[#c1884f] text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Events & Announcements
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up delay-200">
            Stay updated with our latest events, workshops, and community
            activities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
            Our Events
          </h2>
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-600" size={20} />
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "all"
                    ? "bg-[#0a415d] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter("upcoming")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "upcoming"
                    ? "bg-[#c1884f] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter("past")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "past"
                    ? "bg-[#0a415d] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up delay-200">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === "upcoming"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.type === "upcoming" ? "Upcoming" : "Past Event"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">
                        {event.attendees} attendees
                      </span>
                    </div>
                  )}
                </div>

                {event.type === "upcoming" && (
                  <button
                    //onClick={() => window.open("https://forms.gle/your-google-form-id", "_blank")}
                    className="w-full bg-[#0a415d] text-white py-2 px-4 rounded-lg hover:bg-[#0a415d]/90 transition-colors duration-300 font-medium"
                  >
                    Registration Will Open Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No events found
            </h3>
            <p className="text-gray-500">
              Check back later for upcoming events and activities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
