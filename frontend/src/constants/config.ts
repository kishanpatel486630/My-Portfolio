type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    certificates: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kishan Parvadiya",
    fullName: "Kishan Parvadiya",
    email: "kishanpatel486630@gmail.com",
  },
  hero: {
    name: "Kishan Parvadiya",
    p: ["Product Designer & Product Manager"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Versatile UI/UX Designer and Product Management enthusiast with a strong foundation in user-centered design and product lifecycle management. Skilled in Figma, prototyping, and design systems, with experience creating intuitive, visually engaging web and mobile interfaces. Proficient in Agile practices and roadmap planning, aligning user needs with business objectives to deliver seamless, impactful digital products. Adept at collaborating across teams to transform ideas into scalable solutions that drive both usability and business value.\n\nContact: 9328797998 | kishanpatel486630@gmail.com | linkedin.com/in/kishan-parvadiya-593120268`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    certificates: {
      p: "My Achievements",
      h2: "Certificates.",
      content: `A showcase of my certifications and achievements in design, product management, and technology.`,
    },
  },
};
