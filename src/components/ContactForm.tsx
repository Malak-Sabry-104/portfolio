import { useForm } from "react-hook-form";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section
      id="contact-form"
      className=" flex justify-center  items-center p-4 pt-[8rem]"
    >
      <div className="glow "></div>

      <form
        method="post"
        className="flex flex-col gap-6 z-10 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
         rounded-2xl p-8 w-full max-w-lg  text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-purple-300  font-semibold  text-center  mb-2">
          Get in Touch
        </h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-purple-200 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder:text-white/70"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-sm px-2 py-1 text-red-500">
              Name Field is required.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-purple-200 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white/20  rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder:text-white/70"
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-sm px-2 py-1 text-red-500">
              Email Field is required.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-purple-200 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="bg-white/20  rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder:text-white/70"
            placeholder="Type your message here..."
            minLength={10}
            {...register("message", { required: true, minLength: 10 })}
          ></textarea>
          {errors.message?.type === "required" && (
            <p className="text-sm px-2 py-1 text-red-500">
              Message Field is required.
            </p>
          )}
          {errors.message?.type === "minLength" && (
            <p className="text-sm px-2 py-1 text-red-500">
              Message Field must be at least 10 chars.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 py-2 px-6 bg-purple-900/50 hover:bg-purple-800/60 cursor-pointer text-white font-semibold rounded-xl transition duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
