import IMG1 from "@/assets/img-team-1.jpg";
import IMG2 from "@/assets/img-team-2.jpg";
import IMG3 from "@/assets/img-team-3.jpg";
import IMG4 from "@/assets/img-team-4.jpeg";
import IMG5 from "@/assets/img-team-5.jpg";
import IMG6 from "@/assets/img-team-6.jpg";
import IMG7 from "@/assets/img-team-7.jpg";
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
    name: "Neel Naicker",
    designation: "Executive Director, USA",
    image: IMG3,
    alt: "An image of Neel Naicker",
  },
  {
    id: 4,
    name: "Sam.M",
    designation: "Executive Director, USA",
    image: IMG4,
    alt: "An image of Sam.M",
  },
  {
    id: 5,
    name: "Abubacker Hasan",
    designation: "BDM, UK",
    image: IMG5,
    alt: "An image of Abubacker Hasan",
  },
  {
    id: 6,
    name: "Jun Yong Lee",
    designation: "Executive Director, South korea",
    image: IMG6,
    alt: "An image of Jun Yong Lee",
  },
  {
    id: 7,
    name: "Lee",
    designation: "Marketing Director, South korea",
    image: IMG7,
    alt: "An image of Lee",
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
