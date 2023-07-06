import classes from "./writer.module.css";
import Image from "next/image";

function Writer() {
  return (
    <section className={classes.writer}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.webp"
          alt="An image showing Writer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Yash</h1>
      <p>
        I blog about web development.<br /><br />
        Incididunt velit fugiat qui officia veniam
        enim. Tempor mollit esse officia labore nulla tempor officia laborum.
        Voluptate velit qui ipsum in exercitation ea elit excepteur laboris anim
        et.
        consectetur officia.
      </p>
    </section>
  );
}

export default Writer;