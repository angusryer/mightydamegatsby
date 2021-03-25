import React from "react"
import SEO from "../components/common/Seo"

export default function Faq() {
  return (
    <>
      <SEO title="FAQ" desription="Mighty Dame Fitness FAQ" />
      <section className="flex flex-col justify-evenly max-w-2xl my-0 mx-auto p-5 items-center">
        <h1 className="font-lemon text-4xl my-5 text-primary">FAQ</h1>
        <article className="">
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            How do I get started?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “It starts with a conversation about what you’re looking for and if
            it’s something we can help you achieve. If it’s a good fit, we book
            a complimentary virtual video consultation and initial assessment.
            After that we discuss the game plan, set up the details on when
            we’ll work together, and fill out the paperwork. Then it’s just a
            matter of showing up to your sessions on the decided days and times
            and working your butt off!”
          </p>
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            How long are the sessions?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “I allot one hour for a session to ensure a proper warm-up and
            properly paced workout. Some workouts may end up only taking 45
            minutes as you progress, possibly even shorter.”
          </p>
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            What do I need to get started?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “I ask all my clients to get resistance bands, preferably a set with
            5 different “weights” and handles and a door anchor. A foam roller
            is also a valuable tool to have. Both are very affordable and easy
            to source online and in stores. Progressing beyond the phase 2 level
            will require proper free weights.”
          </p>
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            Do I need a special computer program?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “No! All virtual sessions can be done through Facebook or FaceTime.
            You will also be set up on the Trainerize program, which does have a
            phone app that I like to use to communicate with clients, and is
            where I will be sharing your workouts with you. You can also sign
            into Trainerize in your web browser on your computer."
          </p>
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            What kind of workouts will I be doing?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “That depends on you and your goals! If you want to focus on weight
            loss, we will go through an initial phase to ensure your form and
            base fitness levels and then move on to workouts that will focus on
            burning calories and building strength. If your goal is to gain
            muscle, then your workouts will look a bit different, but will still
            begin with a starter-phase to ensure your form is good and safe!”
          </p>
          <h3 className="text-primary font-light tracking-wide text-2xl my-5 mt-6">
            How long until I achieve my goal?
          </h3>
          <p className="text-primary my-3 font-extralight">
            “That also depends on your goal and your commitment. I’d love to say
            that hiring a personal trainer/nutrition coach will guarantee
            results, but it’s totally up to you and the work you put into it.
            There may be a learning stage where things progress seemingly slowly
            to you, or there may be a “newbie gains” effect when everything you
            touch turns to gold! Either way, you don’t know until you dive into
            it. During our first conversation, we will go over your goals and I
            will help determine if your time-frame is reasonable for what you
            are looking for. Please keep in mind that permanent, effective
            change takes time, often more of it than we expect!”
          </p>
        </article>
      </section>
    </>
  )
}
