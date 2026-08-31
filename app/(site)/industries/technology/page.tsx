import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Technology",
  description:
    "Helping technology companies accelerate innovation through cloud, AI, software engineering, enterprise platforms and specialist technology talent.",
  alternates: { canonical: absoluteUrl("/industries/technology") },
  openGraph: {
    title: "Technology | Ubique Systems",
    description:
      "Helping technology companies accelerate innovation through cloud, AI, software engineering, enterprise platforms and specialist technology talent.",
    url: absoluteUrl("/industries/technology"),
  },
};

export default function TechnologyPage() {
  return (
    <>
      <IndustryPageTemplate
        title="Technology"
        subtitle="Technology organisations operate in an environment of constant innovation. Ubique Systems helps businesses accelerate product development, modernise cloud platforms, strengthen engineering capabilities and deliver digital transformation at scale."

        priorities={[
          {
            title: "Cloud Modernisation",
            description:
              "Build scalable cloud-native platforms that improve agility, resilience and performance.",
          },
          {
            title: "Artificial Intelligence",
            description:
              "Adopt AI and automation to improve customer experiences, operational efficiency and decision-making.",
          },
          {
            title: "Software Engineering",
            description:
              "Develop high-quality software using modern engineering practices and agile delivery models.",
          },
          {
            title: "Cybersecurity",
            description:
              "Protect critical systems, applications and enterprise data with secure technology architectures.",
          },
          {
            title: "Digital Products",
            description:
              "Deliver innovative digital products and platforms that create competitive advantage.",
          },
          {
            title: "Technology Talent",
            description:
              "Access experienced consultants, architects, developers and engineers for strategic initiatives.",
          },
        ]}

        solutions={[
          "Cloud Strategy & Migration",
          "Artificial Intelligence & Data Solutions",
          "Software Engineering Services",
          "Enterprise Application Development",
          "Technology Consulting",
          "Digital Product Engineering",
        ]}

        technologies={[
          "Microsoft Azure",
          "AWS",
          "Google Cloud",
          "SAP",
          "Microsoft Power Platform",
          ".NET",
          "Java",
          "Python",
          "React",
          "Node.js",
          "Docker",
          "Kubernetes",
          "Artificial Intelligence",
          "Machine Learning",
          "DevOps",
        ]}
      />
    </>
  );
}
