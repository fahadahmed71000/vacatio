import React from "react";
import Im from "../../assets/im.png";
import Im2 from "../../assets/im2.png";
import Im3 from "../../assets/im3.png";
import Im4 from "../../assets/im4.png";

function Vision() {
  return (
    <div>
      <div className="container  flex justify-evenly">
        <div className="vision-text p-8 w-2/4 ">
          <h1 className="text-blue-500  text-3xl font-bold">Vision</h1>
          <p className="text-gray-700 max-w-4xl">
            A vision statement explains why a company exists, what its future
            goals are, and the change it's aiming to create in the world. It's
            the company's single dream or north star that unifies and inspires
            every employee-and ideally other stakeholders, too. The statement
            should be aspirational. Though a company may never fully achieve its
            vision, it is committed to doing everything it can to work towards
            it every day. Everything a company does-both large and small-should
            contribute to its vision. For example, the vision statement of
            iconic tech brand, Sony, is: "To fill the world with emotion,
            through the power of creativity." This closely aligns with what we
            know about Sony-a company that makes products that put aesthetics
            and quality
          </p>
        </div>
        <div className="vision-image p-8 w-1/3">
          <img src={Im} alt="vision image" />
        </div>
      </div>
      <div>
        <div className="container flex justify-around">
          <div className="vision-image p-8 w-1/3">
            <img src={Im2} alt="vision image" />
          </div>
          <div className="vision-text p-8 w-2/4">
            <h1 className="text-blue-500 text-3xl font-bold">
              Mission statement
            </h1>
            <p className="text-gray-700 ">
              A mission statement is an equally important statement that is
              distinct from the vision statement. A mission statement is an
              articulation of what you do or deliver as a business every day.
              Though effective mission statements end up looking simple, you’ll
              be investing a lot of time and effort into achieving that
              simplicity. By the time you have crafted yours, it will be a
              short, punchy sentence that explains to the person reading it
              three things about your company:
            </p>
          </div>
        </div>

        <div className="container flex justify-around">
          <div className="vision-text p-8 w-2/4">
            <h1 className="text-blue-500 text-3xl font-bold">start-up's</h1>
            <p className="text-gray-700 mt-4 max-w-4xl">
              At the startup stage, you have a close-knit group of two or three
              co-founders. This is the perfect opportunity to formalize exactly
              what attracted each person to the company. You want to know what
              are they looking to achieve on a personal and professional level
              with this, and why it means something to them. A good first step
              is to actively interview one another. You’ll find by asking
              questions like these, the seeds of your mission and vision
              statements will start to sprout:
            </p>
          </div>
          <div className="vision-image p-8 w-1/3">
            <img src={Im3} alt="vision image" />
          </div>
        </div>

        <div className="container flex justify-around">
          <div className="vision-image p-8 w-1/3">
            <img src={Im4} alt="vision image" />
          </div>
          <div className="vision-text p-8 w-2/4">
            <h1 className="text-blue-500 text-3xl font-bold">
              Information about
            </h1>
            <p className="text-gray-700 mt-4 max-w-4xl">
              As the business adjusts according to trends, new technologies,
              growth, and opportunities, what it’s looking to achieve and its
              goals will naturally shift in kind. For this reason, it’s
              important that the mission and vision statements are written in
              broad, long-term language, rather than in immediate-term
              specifics, to avoid rewriting them on a regular basis. Rewriting
              these foundational statements regularly signals to the outside
              world indecision or even instability.Your organization’s vision
              and mission statements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
