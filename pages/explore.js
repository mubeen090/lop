import react from "react"
import styles from './Home/PopularCoursesSection/PopularCoursesSection.module.css';
const { pop_course_section, pop_course_container, btn_container, btn } = styles;
import Heading from "./Home/common/Heading/Heading.module.css";
import CourseCard from "/Home/common/CourseCard/CourseCard.module.css";
import Link from "next/link";

const PopularCoursesSection = () => {
  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Most Popular Class"}
          para2={
            "Let's join our famous class, the knowledge provided will definitely be useful for you."
          }
        />
        <div className={styles.pop_course_container}>
          <CourseCard slug={"cyber-security"} />
          <CourseCard slug={"aws"} />
          <CourseCard slug={"web-development"} />
          <CourseCard slug={"orecle"} />
          <CourseCard slug={"sap"} />
          <CourseCard slug={"tally"} />
          <CourseCard slug={"auto-cad"} />
          <CourseCard slug={"catia"} />
          <CourseCard slug={"digital-marketing"} />
          <CourseCard slug={"iot"} />
          <CourseCard slug={"robotics"} />
          <CourseCard slug={"power-bi"} />
          <CourseCard slug={"api-testing"} />
          <CourseCard slug={"devopes"} />
          <CourseCard slug={"java"} />
          <CourseCard slug={"python"} />
          
        </div>
        <div className={styles.btn_container}>
          <Link href="/explore">
            <button className={styles.btn}>Explore All Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCoursesSection;