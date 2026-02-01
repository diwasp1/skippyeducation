export const storyBookData = [
  {
    id: 1,
    slug: "why-study-in-australia",
    category: "Education in Australia",
    title: "Why Study in Australia?",
    subtitle: "A Journey Beyond the Classroom",
    description:
      "Australia is more than just a study destination — it's a life experience. With globally ranked universities, industry-focused courses, and internationally recognised qualifications, Australia opens doors to careers across the world. Students also enjoy a safe, multicultural environment and a balanced lifestyle beyond lecture halls.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    article: `
  Australia is more than just a study destination — its a life experience. With globally ranked universities, industry-focused courses, and internationally recognised qualifications, Australia opens doors to careers across the world.
  
  Beyond academics, students enjoy a safe, multicultural environment, part-time work opportunities, and a lifestyle that balances study with nature, culture, and adventure. From modern cities to peaceful regional towns, Australia offers learning that extends far beyond lecture halls.
  
  Australian education focuses on more than exams — it prepares students for real careers. Courses are designed with strong industry involvement, practical training, internships, and project-based learning. Whether you study IT, Business, Health, Engineering, or Hospitality, you gain hands-on experience that employers value. Many graduates move directly into skilled jobs or pathways to post-study work visas, making education in Australia a smart long-term investment.
  
  Being an international student in Australia means learning independence while feeling supported. Students can work part-time while studying, gaining local experience and helping manage living expenses. Outside study hours, student life is vibrant — cafés, beaches, libraries, sports, cultural festivals, and student clubs create a welcoming environment. Universities and colleges also provide counselling, career guidance, and academic support to help students succeed.
  
  Australia offers thousands of courses across universities, TAFEs, and private colleges. Choosing the right one depends on your career goals, academic background, and lifestyle preferences. Big cities like Sydney and Melbourne offer global exposure and job opportunities, while regional areas provide lower living costs and extra migration benefits. With the right guidance, students can align their education choices with long-term career and visa goals.
  
  One of Australia's biggest advantages is what comes after graduation. Eligible international students can apply for post-study work visas, allowing them to gain valuable Australian work experience. This experience can lead to employer sponsorship or skilled migration pathways. With proper planning from the start — course selection, location, and skills — students can turn their education into a future in Australia.
  `
  }
  ,
  {
    id: 2,
    slug: "from-classroom-to-career",
    category: "Real-World Learning",
    title: "From Classroom to Career",
    subtitle: "How Australian Education Builds Skills",
    description:
      "Australian education focuses on employability through practical training, internships, and project-based learning. Graduates gain hands-on experience that helps them move directly into skilled jobs or post-study work pathways.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      article: `
Australian education is designed to bridge the gap between theory and practice. Courses are structured with strong industry involvement, practical training sessions, internships, and project-based learning to ensure students gain real-world skills.

Students studying IT, Business, Health, Engineering, or Hospitality gain hands-on experience that employers value. Industry projects and practical workshops help develop critical thinking, teamwork, and problem-solving skills.

Universities often collaborate with local and international companies, providing students networking opportunities and potential employment pipelines. Internships and mentorship programs allow students to apply classroom knowledge to real-world challenges.

Additionally, practical skill-building is complemented by soft skills development — communication, leadership, and adaptability are key focuses. This holistic approach prepares graduates to enter the workforce confidently and competently.

Graduates often move seamlessly into skilled jobs or post-study work opportunities, making Australian education a strategic investment for long-term career success.
  `
  },
  {
    id: 3,
    slug: "life-as-an-international-student",
    category: "International Students",
    title: "Life as an International Student",
    subtitle: "Balancing Study, Work, and Lifestyle",
    description:
      "International students in Australia enjoy part-time work rights, vibrant campus life, and strong support services. From libraries and cafés to beaches and cultural festivals, student life is rich and welcoming.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      article: `
      Living as an international student in Australia combines independence with strong support. Students can work part-time while studying, gaining valuable local experience and helping manage living costs.
      
      The student lifestyle is vibrant and inclusive. Cafés, beaches, libraries, sports facilities, cultural festivals, and student clubs make everyday life enriching. Universities provide academic support, career guidance, and counselling services to ensure students thrive.
      
      Students often engage in volunteering, student societies, and competitions, which enhance both personal growth and professional networking. Cultural exchange is an integral part of the experience, allowing students to develop intercultural understanding and lifelong friendships.
      
      Balancing study, work, and leisure helps students develop time management and resilience, skills that are valuable in both career and life. The overall experience prepares students for global careers while providing unforgettable memories.
        `
  },
  {
    id: 4,
    slug: "choosing-the-right-course-and-city",
    category: "Planning Your Future",
    title: "Choosing the Right Course and City",
    subtitle: "Your Education, Your Path",
    description:
      "Australia offers thousands of courses across universities, TAFEs, and colleges. From global cities to regional areas, choosing the right course and location can align education with career and migration goals.",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      article: `
      Choosing the right course and city is essential to maximize your study experience in Australia. The country offers thousands of courses across universities, TAFEs, and private colleges, covering every discipline imaginable.
      
      Big cities like Sydney, Melbourne, and Brisbane provide global exposure, networking opportunities, and access to internships and jobs. Regional cities offer lower living costs, smaller class sizes, and sometimes extra migration incentives.
      
      Students must consider career goals, academic background, and lifestyle preferences when selecting a course. Course content, industry links, and learning approaches should align with personal aspirations.
      
      University life is influenced by city choice — metropolitan areas offer a bustling, cosmopolitan experience, while regional towns provide a quieter, focused environment. Both options have unique advantages, and guidance from education consultants can help make the best choice.
      
      With careful planning, students can align their education choices with long-term career, skill development, and migration objectives.
        `
  },
  {
    id: 5,
    slug: "beyond-graduation",
    category: "What Comes Next",
    title: "Beyond Graduation",
    subtitle: "Post-Study Work & Migration Pathways",
    description:
      "Australia provides post-study work opportunities that allow graduates to gain local experience. With the right planning, education can lead to employer sponsorship or skilled migration pathways.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      article: `
      One of the key advantages of studying in Australia is the opportunities available after graduation. Eligible international students can apply for post-study work visas, allowing them to gain valuable local work experience.
      
      This experience often leads to employer sponsorship or pathways to permanent residency. By planning early — choosing the right course, location, and skills — students can transform their education into a long-term career and life in Australia.
      
      Graduates can also explore further studies, professional certifications, or entrepreneurial ventures. Universities provide career services, alumni networks, and mentorship programs to support this transition.
      
      Australia’s post-graduation pathways offer a seamless move from study to work, giving graduates a strong competitive advantage in the global job market and opening doors to personal and professional growth.
        `
  },
];

export type StoryBookItem = (typeof storyBookData)[number];
