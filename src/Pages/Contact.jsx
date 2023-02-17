import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "../Components/Title";

const Contact = () => {
  const header = "Contact Me";
  const paragraph = "I'd love to hear from you";
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");
  const form = useRef();

  const validation = () => {
    if (nameText === "") {
    } else if (emailText === "") {
    } else if (messageText === "") {
    } else {
      notify();
    }
  };

  const notify = () =>
    toast.success("Email sended!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jhw245",
        "template_onvs51r",
        form.current,
        "omtDK6g9nDwvudHPq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const Label = ({ htmlfor, text }) => (
    <label
      htmlFor={htmlfor}
      className="text-xl font-semibold lg:text-2xl dark:text-light"
    >
      {text}
    </label>
  );
  const inputStyle =
    "w-[80%] xl:w-[60%] pl-2 py-2 text-xl font-semibold border-2 border-black rounded-xl bg-light dark:border-light dark:bg-dark dark:focus:bg-light focus:bg-black focus:text-light dark:text-light dark:focus:text-dark ease-in duration-200";
  return (
    <section>
      <Title header={header} paragraph={paragraph} />
      <div className="mb-14 grid grid-cols-6">
        <form
          id="form1"
          ref={form}
          onSubmit={sendEmail}
          className="w-full py-4 gap-4 flex flex-col justify-center items-center border-2 rounded-xl border-black dark:border-light col-start-2 col-end-6 lg:py-24"
        >
          <Label htmlFor="name" text="Name" />
          <input
            id="name"
            className={inputStyle}
            type="text"
            name="user_name"
            required
            value={nameText}
            onChange={(e) => {
              setNameText(e.target.value);
            }}
          />
          <Label htmlFor="email" text="Email" />
          <input
            id="email"
            className={inputStyle}
            type="text"
            name="user_email"
            required
            value={emailText}
            onChange={(e) => {
              setEmailText(e.target.value);
            }}
          />
          <Label htmlFor="message" text="Message" />
          <textarea
            id="message"
            className={inputStyle}
            type="text"
            name="message"
            required
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
          />
          <button
            className="w-[30%] py-2 xl:mt-8 text-xl font-semibold border-2 border-black rounded-xl bg-light dark:border-light dark:bg-dark hover:bg-black hover:text-light dark:hover:bg-light dark:hover:text-dark ease-in duration-200 cursor-pointer"
            type="submit"
            value="Send"
            onClick={validation}
            aria-label="Send Message"
          >
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
