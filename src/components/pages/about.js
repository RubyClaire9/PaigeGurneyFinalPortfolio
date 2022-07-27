import React from "react";
import profilePicture from "../../../static/assets/images/paige.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column" 
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <p>Paige Gurney will be in 9th grade for the 2022-2023 school year, and she will be attending Green Canyon High School. Last school year she was in Spring Creek Middle School, where she was a straight-A, honor roll student, and a student of the month in December 2021. Paige was born and raised in Utah and plans to stay there. She enjoys reading, coding, chemistry, France, and ballet.</p>
        <p>She reads voraciously, as she is in the top 25 readers of her grade at school. Some of her favorite authors are Brandon Sanderson, Jennifer A. Nelson, and Shannon Messenger. Some of her favorite book series include “The Stormlight Archive”, “The Ascendance” series, “Keeper of the Lost Cities”, and “Little House on the Praire”.</p>
        <p>As for coding, she started in 5th grade learning Blockly using code.org and Scratch from her computer teacher. When she got into 7th grade, she took another coding class learning more about coding using Blockly. After that, she found the Code to Success Utah program and finished devCamp’s Fantastic Fries website. She thought it was really interesting and fun! She then took an 8th-grade coding class learning how to code using Python. During that same summer, she also completed devCamp's javaScript course and Dissecting React JS program, which built this very website. Becoming a developer probably in the field of Web development/design is her dream job.</p>
        <p>She has loved chemistry ever since the age of eight. Going to science boot camps from USU multiple times has only boosted her love of the subject. She loves making elephant toothpaste and her little brother loves watching it explode. It used to be her dream job to be a chemist.</p>
        <p>France is her secret-but-really-not-a-secret passion, as one look at her room would tell you because it is covered in Eiffel towers. She has been lucky enough to go there twice, once as a baby and again as an 11-year-old. However, she has never been up to the top of the Eiffel Tower because the first time the group didn’t have enough time, and the second time was because her little brother is scared of heights.</p>
        <p>She started ballet when she was 4 years old and has loved it ever since. She is will start on pointe shoes this upcoming semester. She does non-competitive performances twice a year. Her favorite step is called the tour-jete, in which you start with a step back, bring the two feet together, spin, jump into the air, kick one foot back in the air, and land gracefully.</p>
        A few of her other favorites are; Color: Magenta; Food: Alfredo; Subject: all of them! She is also passionate about stopping climate change and getting better waste management.
      </div>
    </div>
  )
}
