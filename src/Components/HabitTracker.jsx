import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";

const HabitTracker = () => {
  const slides = [
    "https://i.ibb.co.com/RGbrVtKW/ecb2f761-0357-42d7-907e-e206cf850188.jpg",
    "https://i.ibb.co.com/0VnMhKqb/804a4e97-df45-496c-b488-2e2c6e9ae840.jpg",
    "https://i.ibb.co.com/kgPgrVsp/flat-lay-student-using-disinfectant-desk.jpg",
  ];

  return (
    <section className="relative py-24  overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-600 rounded-full absolute -top-24 -left-24"></div>
        <div className="w-[500px] h-[500px] bg-indigo-600 rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center">
          {/* LEFT TEXT SIDE */}
          <div className="md:col-span-2 text-white">
            <p className="uppercase tracking-widest text-purple-300 text-sm mb-3">
              your daily growth partner
            </p>

            <h2 className="text-3xl sm:text-[40px] font-extrabold lg:text-5xl">
              Build Strong{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Habits With Consistency"]}
                  loop={10}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() => console.log(`Done after 5 loops!`)}
                />
              </span>
            </h2>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              Stay motivated every day with a clean and powerful habit tracking
              experience designed to help you grow step-by-step and transform
              small actions into long-term success.
            </p>

            <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold shadow-lg">
              Start Tracking
            </button>
          </div>

          {/* RIGHT SLIDER SIDE */}
          <div className="md:col-span-3 relative">
            {/* CUSTOM ARROWS */}
            <div className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-xl hover:bg-white/40 transition p-3 rounded-full cursor-pointer shadow-lg">
              <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-xl hover:bg-white/40 transition p-3 rounded-full cursor-pointer shadow-lg">
              <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* SLIDER */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={40}
              className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-xl"
            >
              {slides.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-[380px] sm:h-[480px] flex items-center justify-center group">
                    <img
                      src={src}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* CAPTION */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold drop-shadow-lg">
                        Habit Progress
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Track your habits visually
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* CUSTOM PAGINATION STYLES */}
      <style>
        {`
          .custom-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255,255,255,0.4);
            border-radius: 50%;
            margin: 0 6px !important;
            transition: 0.3s;
          }

          .custom-bullet-active {
            width: 14px !important;
            height: 14px !important;
            background: #c084fc !important;
            box-shadow: 0 0 12px #c084fc;
          }
        `}
      </style>
    </section>
  );
};

export default HabitTracker;
