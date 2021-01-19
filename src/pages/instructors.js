import React, { useEffect } from "react"
import SEO from "../components/seo"

export default function Instructors() {
  useEffect(() => {
    // setprograms(programData)
    // axios.get("/api/products").then((res) => {
    // 	setProducts(res.data);
    // });
  }, [])

  return (
    <>
      <SEO
        title="Instructors | Mighty Dame Fitness"
        desription="Mighty Dame Fitness Instructors"
      />
      <h1>Our Instructors</h1>
      <section className="flex flex-col justify-evenly max-w-5xl my-0 mx-auto">
        <h2>Emily Engel</h2>
        <h2>Who I’m not:</h2>
        <ol>
          <li>An elite athlete.</li>
          <li>A life-long sports enthusiast or former player.</li>
          <li>A gym-rat.</li>
          <li>A person with a lot of spare time.</li>
        </ol>
        <h2>Who I am:</h2>
        <ol>
          <li>A mother.</li>
          <li>An artist.</li>
          <li>An introvert.</li>
          <li>A foodie.</li>
        </ol>
        <p>
          I didn’t grow up playing sports. I avoided gym-class like the plague
          in high school and dove into the arts. I also dove into terrible
          eating habits and found myself weighing at least 190lb when I was 19
          years old.
        </p>
        <q>Not doing much physically didn’t help at all.</q>
        <p>
          Moving out of small-town Ontario and into Toronto, I lost some weight
          from the natural shift into city life. Walking everywhere provided my
          body with some healthy movement at last, but it didn’t make me love
          myself. I was still overweight and didn’t understand my body or how my
          habits were hindering me, physically and emotionally.
        </p>
        <p>
          Then, after moving back to the country after graduating from Ryerson
          University (Psychology), I was sitting one day watching TV, thinking
          about a guy I had met. I was feeling all the internal turmoil of
          having a crush and no confidence to do anything about it, just
          negative self-talk.
        </p>
        <p>
          And then, like a light switch being thrown in a dark room, everything
          changed. At that moment, I decided that I was done. I was done with
          losing. I was done with not showing up for the fight. I was done with
          feeling sub-par.
        </p>
        <q>I wanted to get the guy.</q>
        <h2>Flash forward a year:</h2>
        <p>
          I got the guy, I got the fitness, and I was just beginning. Today, I
          am a certified Nutrition Coach from Precision Nutrition (2019) and a
          certified Personal Trainer from the National Academy of Sports
          Medicine (2020). I graduated on the Deans List from George Brown for
          Chef Training in 2017, and started a family that same year.
        </p>
        <p>
          I now have two children and a busy household, so I understand the
          difficulties for parents to find time for their own self care. I am
          passionate about women’s health and intuitive movement and eating. I
          want to help women build their confidence by finding their rhythm and
          learning how to fuel-up and recover efficiently!
        </p>
        <p>
          And since falling in love with my barbell, I’m also on a mission to
          convince you of two things:
        </p>
        <q>
          You don’t have to like sports or have a history of playing them to be
          active; and Women aren’t meant to just do cardio and be meek:
        </q>
        <q>We’re meant to be Mighty Dames!</q>
      </section>
    </>
  )
}
