import React from "react"
import SEO from "../components/common/Seo"
import instructorImage from "../images/emily.png"
import redx from "../images/redx.png"
import check from "../images/greencheck.png"

export default function Instructors() {
  return (
    <>
      <SEO title="Trainers" desription="Mighty Dame Fitness Trainers" />
      <section className="flex flex-col justify-evenly max-w-2xl my-0 mx-auto p-5 items-center">
        <h1 className="font-lemon text-2xl my-5">Meet the Instructor</h1>
        <div className="flex flex-row my-12 self-center">
          <div className=" min-h-32 min-w-32 w-32 h-30 overflow-hidden border-none rounded-full">
            <img
              className="w-32 h-30 min-h-32 min-w-32"
              src={instructorImage}
              alt="Emily Engel"
            />
          </div>
          <h2 className="text-2xl transform -translate-x-4 translate-y-8">
            Hi. I'm Emily.
          </h2>
        </div>
        <h2 className="text-xl font-bold text-center">
          Who I’m{" "}
          <span className="font-lemon text-2xl font-bold text-">not</span>:
        </h2>
        <ol className="my-10 grid nav:grid-rows-none nav:grid-cols-4 grid-rows-4 grid-cols-none">
          <li className="flex items-center p-3">
            <img src={redx} alt="red x" className="w-4 h-4 mr-3" />
            An athlete.
          </li>
          <li className="flex items-center p-3">
            <img src={redx} alt="red x" className="w-4 h-4 mr-3" />A sports
            enthusiast.
          </li>
          <li className="flex items-center p-3">
            <img src={redx} alt="red x" className="w-4 h-4 mr-3" />A gym-rat.
          </li>
          <li className="flex items-center p-3">
            <img src={redx} alt="red x" className="w-4 h-4 mr-3" />
            <span>
              A person with a lot of{" "}
              <span className="font-bold">spare time.</span>
            </span>
          </li>
        </ol>
        <h2 className="text-xl font-bold text-center">
          Who I{" "}
          <span className="font-lemon text-2xl font-bold text-accent">am</span>
          :
        </h2>
        <ol className="my-10 grid nav:grid-rows-none nav:grid-cols-4 grid-rows-4 grid-cols-none">
          <li className="flex items-center p-3">
            <img src={check} alt="red x" className="w-4 h-4 mr-3" />A mother.
          </li>
          <li className="flex items-center p-3">
            <img src={check} alt="red x" className="w-4 h-4 mr-3" />
            An artist.
          </li>
          <li className="flex items-center p-3">
            <img src={check} alt="red x" className="w-4 h-4 mr-3" />
            An introvert.
          </li>
          <li className="flex items-center p-3">
            <img src={check} alt="red x" className="w-4 h-4 mr-3" />
            <span>
              A foodie<span className="font-bold text-lg">!</span>
            </span>
          </li>
        </ol>

        <article className="">
          <h2 className="font-bold text-xl my-5 mt-6">Where I've come from:</h2>
          <p className="my-3">
            I didn’t grow up playing sports. I avoided gym-class like the plague
            in high school and dove into the arts. I also dove into terrible
            eating habits and found myself weighing at least 190lb when I was 19
            years old.
          </p>
          <blockquote className="text-center my-10 italic font-bold">
            Not doing much physically didn’t help at all.
          </blockquote>
          <p className="my-3">
            Moving out of small-town Ontario and into Toronto, I lost some
            weight from the natural shift into city life. Walking everywhere
            provided my body with some healthy movement at last, but it didn’t
            make me love myself. I was still overweight and didn’t understand my
            body or how my habits were hindering me, physically and emotionally.
          </p>
          <p className="my-3">
            Then, after moving back to the country after graduating from Ryerson
            University (Psychology), I was sitting one day watching TV, thinking
            about a guy I had met. I was feeling all the internal turmoil of
            having a crush and no confidence to do anything about it, just
            negative self-talk.
          </p>
          <p className="my-3">
            And then, like a light switch being thrown in a dark room,
            everything changed. At that moment, I decided that I was done. I was
            done with losing. I was done with not showing up for the fight. I
            was done with feeling sub-par.
          </p>
          <blockquote className="text-center my-10 italic font-bold">
            I wanted to get the guy.
          </blockquote>

          <h2 className="font-bold text-xl my-5 mt-6">Flash forward a year:</h2>
          <p className="my-3">
            I got the guy, I got the fitness, and I was just beginning. Today, I
            am a certified Nutrition Coach from Precision Nutrition (2019) and a
            certified Personal Trainer from the National Academy of Sports
            Medicine (2020). I graduated on the Deans List from George Brown for
            Chef Training in 2017, and started a family that same year.
          </p>
          <p className="my-3">
            I now have two children and a busy household, so I understand the
            difficulties for parents to find time for their own self care. I am
            passionate about women’s health and intuitive movement and eating. I
            want to help women build their confidence by finding their rhythm
            and learning how to fuel-up and recover efficiently!
          </p>
          <p className="my-3">
            And since falling in love with my barbell, I’m also on a mission to
            convince you of two things:
          </p>
          <blockquote className="text-center my-10 italic font-bold">
            You don’t have to like sports or have a history of playing them to
            be active; and Women aren’t meant to just do cardio and be meek:
          </blockquote>
          <blockquote className="text-center my-10 text-xl font-bold">
            We’re meant to be{" "}
            <span className="font-lemon text-2xl">Mighty Dames!</span>
          </blockquote>
          <cite className="block text-right mr-5 font-bold">-Emily</cite>
        </article>
      </section>
    </>
  )
}
