import IMG1 from "@/assets/img-shaik.png";
import IMG2 from "@/assets/img-sahul.png";
import IMG3 from "@/assets/img-ramesh.png";
import IMG4 from "@/assets/img-abu.png";
import IMG5 from "@/assets/img-jun.png";
import IMG6 from "@/assets/img-hee.png";

import "@/styles/pages/about/_aboutpage_team_block.scss";

const teamData = [
  {
    id: 1,
    name: "Hassan Shaik Abubacker",
    designation: "Chairman, DUBAI",
    image: IMG1,
    alt: "An image of Hassan Shaik Abubacker",
  },
  {
    id: 2,
    name: "Sahul Hameed Abubacker",
    designation: "Managing Director, DUBAI",
    image: IMG2,
    alt: "An image of Sahul Hameed Abubacker",
  },
  {
    id: 3,
    name: "Ramesh Mahalingam",
    designation: "Associate Director, UK",
    image: IMG3,
    alt: "An image of Ramesh Mahalingam",
  },
  {
    id: 4,
    name: "Abubacker Hasan",
    designation: "BDM, UK",
    image: IMG4,
    alt: "An image of Abubacker Hasan",
  },
  {
    id: 5,
    name: "Jun Yong Lee",
    designation: "Executive Director, South korea",
    image: IMG5,
    alt: "An image of Jun Yong Lee",
  },
  {
    id: 6,
    name: "Hee kyun Lee",
    designation: "Overseas Sales Director, South korea",
    image: IMG6,
    alt: "An image of Hee kyun Lee",
  },
];

function Team() {
  return (
    <section className="aboutpage-team__wrapper">
      <div className="aboutpage-team__container">
        <div className="section-heading__container">
          <h2>Key People</h2>
          <p>
            ETECH brings together a dynamic team with proven track records in
            real estate development, information technology, game development,
            fintech, international trading, and finance. United under the ETECH
            brand, our experts collaborate across continents to build a vibrant,
            innovation-driven environment.
          </p>
        </div>
        <div className="team-members__container">
          {teamData.map((member) => (
            <article className="team-member" key={member.id}>
              <div className="image">
                <img src={member.image} alt={member.alt} />
              </div>
              <div className="content">
                <h3>{member.name}</h3>
                <h4>{member.designation}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
