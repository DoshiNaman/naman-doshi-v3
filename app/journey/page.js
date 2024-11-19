import { Timeline } from '@/components/ui/timeline';
import React from 'react'



const Journey = () => {

  const data = [
    {
      title: "June 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Advantf offered me full-time employment as SDE1, where I contribute to building and scaling HR industry-based products, including SAAS applications like ATS (Applicant Tracking System) and a marketplace, integrating AI features.
          </p>
        </div>
      ),
    },
    {
      title: "May 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed my Degree in Computer Engineering with CGPA 8.3.
          </p>
        </div>
      ),
    },
    {
      title: "October 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Advantf Extended Internship untill may
          </p>
        </div>
      ),
    },
    {
      title: "April 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined Advantf, a Japan-based startup, as SDE Intern. I worked on building HR-based products like a marketplace and application tracking systems using Django and React. After my internship, I was offered full-time employment.
          </p>
        </div>
      ),
    },
    {
      title: "Nov 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined Madiee Games as an SDE Intern for next 6 months, a Chennai-based company, where I gained experience in building 2D web-based games.
          </p>
        </div>
      ),
    },
    {
      title: "Jan 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked as a part-time software tutor at IANT next 7 months, where I taught various programming languages to students.
          </p>
        </div>
      ),
    },
    {
      title: "June 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started the process of transitioning from diploma to degree, joining the 2nd year of degree college in Computer Engineering at Gandhinagar Institute of Technology.
          </p>
        </div>
      ),
    },
    {
      title: "May 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed my Diploma in Computer Engineering with a CGPA of 9.6 from Government Polytechnic Ahmedabad.
          </p>
        </div>
      ),
    },
    {
      title: "June 2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my Diploma in Computer Engineering at Government Polytechnic Ahmedabad.
          </p>
        </div>
      ),
    },
    {
      title: "May 2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed 10th Standard with distinction from school in Ahmedabad.
          </p>
        </div>
      ),
    },
    {
      title: "1st April 2002",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I was born in Ahmedabad, India.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
    <div className="w-full">
      <Timeline data={data} />
    </div>
    </>
  )
}

export default Journey