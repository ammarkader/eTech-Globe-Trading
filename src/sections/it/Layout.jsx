import Img from "@/assets/img-company.webp";
import ContentSection from "./ContentSection";

function Layout() {
  return (
    <>
      <ContentSection
        title="Digital Ecosystems"
        content={
          <>
            <p>
              We are a specialized digital agency built by a hybrid team of
              software engineers and industry specialists. Rather than treating
              a website as a standalone product, we engineer complete digital
              ecosystems designed to support how a business operates,
              communicates, and grows.
            </p>

            <p>
              Our team combines frontend engineering, backend development, cloud
              infrastructure, digital marketing, and industry-specific expertise
              across healthcare, logistics, infrastructure, energy, and
              professional services. This combination allows us to approach
              every project from both a technical and business perspective.
            </p>

            <p>
              We work with businesses on an ongoing basis, continuously
              improving their digital platforms, visibility, content,
              infrastructure, and lead generation rather than simply delivering
              a website and walking away.
            </p>
          </>
        }
        image={Img}
        background="grey"
      />

      <ContentSection
        title="Web Design & Development"
        content={
          <>
            <p>
              We design and engineer high-performance websites and web
              applications around the needs of each business. From
              conversion-focused marketing websites to complex client-facing
              platforms, our focus is on speed, usability, scalability, and
              maintainability.
            </p>

            <p>
              Our marketing websites are built with modern technologies such as
              Astro and Tailwind, while more complex applications and portals
              can be developed using React and Next.js. Every platform is
              structured with performance, responsive design, accessibility,
              SEO, and long-term maintenance in mind.
            </p>

            <p>
              Development doesn't end when a website goes live. Through our
              ongoing engagement model, we continue to maintain, improve, and
              evolve the platform as the business grows.
            </p>
          </>
        }
        imagePosition="right"
        image={Img}
      />

      <ContentSection
        title="Search Engine Optimization"
        content={
          <>
            <p>
              Visibility is only valuable when it reaches the right people. Our
              SEO approach combines technical performance, search strategy,
              local optimization, and continuous improvement to help businesses
              build sustainable organic visibility.
            </p>

            <p>
              We work across the technical foundation of a website, from page
              speed and crawlability to structured content and on-page
              optimization. For businesses that depend on local customers, we
              also focus on local search visibility and the signals that help
              establish relevance within their target markets.
            </p>

            <p>
              SEO is treated as an ongoing process rather than a one-time
              campaign. We continually analyze performance, identify
              opportunities, and refine the digital platform to support
              long-term growth.
            </p>
          </>
        }
        image={Img}
        background="grey"
      />

      <ContentSection
        title="Digital Marketing"
        content={
          <>
            <p>
              A strong digital platform needs a strategy for bringing the right
              audience to it. We combine targeted digital marketing, paid
              advertising, conversion optimization, and lead generation to turn
              digital visibility into measurable business opportunities.
            </p>

            <p>
              Our approach connects campaigns directly to the underlying website
              and conversion journey. From the first interaction with an
              advertisement or search result to the final enquiry, we focus on
              creating a consistent experience that encourages the right
              audience to take action.
            </p>

            <p>
              By combining marketing execution with our development and
              analytics capabilities, we can continuously test, measure, and
              improve the systems responsible for generating leads and acquiring
              customers.
            </p>
          </>
        }
        imagePosition="right"
        image={Img}
      />

      <ContentSection
        title="Content & Industry Expertise"
        content={
          <>
            <p>
              In industries where trust matters, content cannot simply be
              produced for the sake of filling a website. It needs to
              demonstrate knowledge, accuracy, and authority.
            </p>

            <p>
              We develop blogs, newsletters, website content, and educational
              resources around the real questions and concerns of the audiences
              our clients serve. Our multidisciplinary team allows us to bring
              genuine industry knowledge into the content strategy, particularly
              across healthcare, architecture, logistics, energy, and
              infrastructure.
            </p>

            <p>
              This combination of technical execution and subject-matter
              expertise helps businesses build a stronger digital presence while
              communicating with their audiences in a way that is credible,
              useful, and aligned with their industry.
            </p>
          </>
        }
        image={Img}
        background="grey"
      />

      <ContentSection
        title="Cloud, DevOps & AI"
        content={
          <>
            <p>
              Behind every effective digital ecosystem is infrastructure that is
              secure, reliable, and built to scale. We manage the technical
              foundations that support our clients' websites, applications, and
              digital services, including cloud infrastructure, deployment
              workflows, server management, and ongoing maintenance.
            </p>

            <p>
              We also integrate artificial intelligence where it can provide
              meaningful value to a business. From intelligent workflows and
              custom integrations to AI-powered features within digital
              platforms, we focus on practical applications rather than adding
              AI simply for the sake of it.
            </p>

            <p>
              By bringing development, infrastructure, and AI capabilities
              together under one team, we can build digital systems that are
              designed not only for today's requirements, but for the next stage
              of the business.
            </p>
          </>
        }
        imagePosition="right"
        image={Img}
      />
    </>
  );
}

export default Layout;
