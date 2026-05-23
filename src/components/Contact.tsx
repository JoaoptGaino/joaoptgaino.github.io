import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import SocialMediaComponent from "./items/SocialMediaComponent";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setFeedback("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not send your message.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message sent. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="w-full bg-slate-50 dark:bg-[#0b0f14]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="section-eyebrow">Contact</p>
        <h2 className="py-4 text-slate-900 dark:text-white">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full surface-card rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/laptop_img.jpg"
                  width={500}
                  height={300}
                  alt="Laptop used for software engineering work"
                />
              </div>
              <div>
                <h2 className="py-2 text-slate-900 dark:text-white">
                  João Pedro Theodoro Gaino
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Backend Software Engineer
                </p>
                <p className="py-4 text-slate-600 dark:text-slate-300">
                  I&apos;m open to backend, platform, cloud, and integration
                  work. Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase py-8 text-slate-900 dark:text-white">
                  Connect with me
                </p>
                <SocialMediaComponent
                  containerStyle="flex items-center justify-between py-4"
                  iconStyle="rounded-full surface-card p-5 cursor-pointer hover:scale-105 hover:text-emerald-600 ease-in duration-300 dark:hover:text-green-400"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto surface-card rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-2 rounded-lg p-3 border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    rows={10}
                    required
                  ></textarea>
                </div>
                {feedback && (
                  <p
                    className={`py-3 text-sm ${
                      status === "success"
                        ? "text-emerald-700 dark:text-green-400"
                        : "text-red-700 dark:text-red-300"
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                )}
                <button
                  className="w-full p-4 mt-4 bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-700 hover:shadow-emerald-900/30 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-green-500 dark:text-slate-950 dark:hover:bg-green-400 dark:focus:ring-green-800 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === "loading"}
                  type="submit"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full surface-card p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-emerald-600 dark:text-green-400"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
