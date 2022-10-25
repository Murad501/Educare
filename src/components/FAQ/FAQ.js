import React from "react";

const FAQ = () => {
  return (
    <div className="lg:px-5">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl mb-4 font-bold">Frequently Asked Questions</h1>
        <p className="text-xl lg:text-3xl">
          We get asked a lot of questions, so we thought the easiest thing to{" "}
          <br /> do would be to compile them in a quick and easy FAQ.
        </p>
      </div>
      <div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
            Q: Should I learn how to program?
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> Do you want to be
            paid for a programming job or you think it's interesting? If you
            want to be paid, there are many job positions to consider -
            businesses lack talents in every field. Though software engineers
            are paid handsomely because of a huge demand, which isn't going to
            decrease, rather hugely will be increasing. More businesses will be
            employing technology to increase profits. Why not, if many tasks can
            be automated and outsourced to an army of robots in a cloud? <br />
            If you think it's interesting, it is. Try to understand what may be
            achieved with coding and if you're motivated, go learn basics, code
            something and see if you like the process.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: Should I be a genius(mathematician, doctor, magician) to understand programming?
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> No. If you have some sort of a computer, spare time, and a desire, you have more than enough. A lot of people doing programming who didn't finish school, college, university or courses.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: I want to be hired for a software engineer position. What should I do?
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> Go to Glassdoor(-like) websites and search for the desired position. Write down the common skills the companies from 20+ listings want("required skills"). The more listings you review, the more reliable data you'll have. See what is the top 3(or 5) skills they want. Learn them. Create some side projects that can prove you have those skills. Apply for the positions. Get hired.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: I don't know what domain I want to try.
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> Go watch videos on YouTube explaining what web/mobile/game/etc. developers do. I'd hint you to consider web development because you can build a lot of stuff that can be delivered to a lot of devices via the Internet, with huge community support and not a difficult programming language - Javascript.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: Why a CS degree doesn't matter?
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> It matters to an extent, but usually, a business doesn't care about degrees if you can solve its problems. You don't need to be a genius to write a code to automate some workflow, so to simplify a living for some business. Of course, if you build rockets, then you need more fundamental knowledge. But most of the businesses don't do difficult stuff, they leverage technology to provide more value to customers, thus receiving more profits.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: When to apply for a job?
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> When you've learned the top skills described in the positions you collected. You'll build some projects in the process, to solidify the skills, so you can show working prototypes. If you don't want to show the projects, it's okay, companies may give you a test task to accomplish. E.g. create an HTML page, write some bot, design a page, etc. Learn something, apply, get feedback, improve, repeat.
          </p>
        </div>
        <div className="my-5 rounded lg:p-5 hover:bg-blue-100">
          <h2 className="text-2xl font-bold">
          Q: I just find it hard to understand X technology/programming language.
          </h2>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Ans:</span> It's okay and happens when you don't have much knowledge because there is a lot to know. Distinguish what exact things you don't understand. Read a theory from multiple resources about a specific topic you picked out. Do exercises by coding some stuff to solidify the knowledge. Don't skip practice. After you practiced one thing and you feel you understand it, do the same for the other things you have a hard time acknowledging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
