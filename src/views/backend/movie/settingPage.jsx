import React, { useState } from "react";
import subimg from "../../../assets/images/subscriptionimg.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Setting = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const [darkMode, setDarkMode] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleNotifications = () => {
    setNotificationsOn((prevState) => !prevState);
  };

  // video quality------------------------------------//
  const [selectedQuality, setSelectedQuality] = useState(null);

  const handleQualitySelection = (quality) => {
    setSelectedQuality(quality);
    console.log(`Selected video quality: ${quality}`);
  };
  // subscription plan ----------------------------//

  const activePlan = {
    name: "Premium",
    price: "$39.00",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  };

  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99",
      features: ["Feature 1", "Feature 2"],
    },
    {
      id: 2,
      name: "Standard",
      price: "$19.00",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 3,
      name: "Premium",
      price: "$39.00",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  //   language-------------------------
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Italian",
    "Russian",
    "Portuguese",
    "Arabic",
    "Dutch",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Greek",
    "Hindi",
    "Turkish",
    "Thai",
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelection = (e) => {
    const selectedOption = e.target.value;
    setSelectedLanguage(selectedOption);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-black dark:text-white">
      <section className="py-12 lg:py-16 xl:py-20 m-5">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className={`space-y-4 ${darkMode ? "dark" : ""}`}>
              <div className="space-y-2">
                <h1
                  className="font-extrabold lg:text-xxl-start tracking-tight sm:text-5xl text-white dark:text-white"
                  style={{ fontSize: "30px" }}
                >
                  <u>Settings</u>
                </h1>{" "}
                
                <p
                  className="max-w-[700px] text-white md:text-lg dark:text-white"
                  style={{ fontSize: "20px" }}
                >
                  Manage your streaming settings here. Update your preferences
                  and security details.
                </p>
              </div>
              <br />
              <div>
                <hr />
                <h2
                  className="text-xl font-semibold text-white dark:text-white ml-3"
                  style={{ fontSize: "18px" }}
                >
                  Mode Settings
                </h2>
                <div className="flex items-center space-x-4 p-4">
                  <p className="text-white dark:text-white ">
                    Dark Mode:
                    <label className="switch1">
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                      />
                      <span className="slider1 "></span>
                    </label>
                  </p>
                </div>
              </div>
              <div>
                <hr />
                <h2
                  className="text-xl font-semibold text-white dark:text-white ml-3"
                  style={{ fontSize: "18px" }}
                >
                  Notification Settings
                </h2>
                <div className="flex items-center space-x-4 p-4">
                  <p className="text-white dark:text-white">
                    Notifications:
                    <label className="switch1">
                      <input
                        type="checkbox"
                        checked={notificationsOn}
                        onChange={toggleNotifications}
                      />
                      <span className="slider1 "></span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20 m-5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2
                  className="text-4xl font-extrabold tracking-tight sm:text-4xl text-white dark:text-white"
                  style={{ fontSize: "30px" }}
                >
                  Your Subscription
                </h2>{" "}
                <hr />
                <div className=" p-5 ">
                  <img
                    alt="Subscription Image"
                    className=" rounded-xl aspect-widescreen  object-cover object-center subimage"
                    height="500px"
                    src={subimg}
                    width="600px"
                  />
                  <h4 className="text-xl font-bold">Your Active Plan</h4>
                  <h5 className="text-xl font-bold mt-3">{activePlan.name}</h5>
                  <p className="text-gray-500 ">
                    {activePlan.price} /3 month's
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 xl:py-20 m-5 p-5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2
                  className="text-4xl font-extrabold tracking-tight sm:text-4xl text-white dark:text-white"
                  style={{ fontSize: "30px" }}
                >
                  Language Preferences
                </h2>{" "}
                <hr />
                <p
                  className="text-white dark:text-white"
                  style={{ fontSize: "20px" }}
                >
                  Choose your preferred language for subtitles and the user
                  interface. Personalize your streaming experience.
                </p>
                <select
                  className="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={selectedLanguage}
                  onChange={handleLanguageSelection}
                  style={{ height: "40px" }}
                >
                  <option value="">Select a language</option>
                  {languages.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20 m-5">
        <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Link to="/help-support" onClick={handleLinkClick}>
                <h2
                  className="text-4xl font-extrabold tracking-tight sm:text-4xl text-white dark:text-white hovehelp"
                  style={{ fontSize: "30px" }}
                >
                  Help & Support
                </h2>
              </Link>
              <hr />
              <p
                className="max-w-[500px] text-white md:text-lg dark:text-white"
                style={{ fontSize: "20px" }}
              >
                Need assistance or have questions? Contact our support team for
                help with any streaming issues or inquiries.
              </p>
            </div>
          </div>
          {/* <div className="space-y-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  className="min-h-[150px]"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button size="lg" type="submit">
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Setting;
