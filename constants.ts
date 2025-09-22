
import type { Post } from './types';

export const posts: Post[] = [
  {
    id: 1,
    title: "On Gradients and Glass",
    date: "July 22, 2024",
    content: [
      "There's an undeniable allure to designs that blend vibrant gradients with the subtle transparency of glassmorphism. It's a dance between color and light, creating a sense of depth and modernity. The background bleeds through, yet the content remains perfectly legible, floating on a frosted pane.",
      "This aesthetic isn't just about looking cool; it's about creating a hierarchy. The blurred background recedes, pushing the focused content forward. It guides the eye, making interfaces feel more intuitive and less cluttered. It's a design choice that feels both futuristic and surprisingly natural."
    ],
  },
  {
    id: 2,
    title: "The Art of Simplicity",
    date: "July 15, 2024",
    content: [
      "In a world saturated with information, simplicity is the ultimate sophistication. A minimalist approach to design and content allows the core message to shine. It respects the user's time and attention, offering a calm and focused experience.",
      "Every element on the page should have a purpose. If it doesn't add to the message or the experience, it's noise. Stripping away the non-essential reveals the true essence of the idea you're trying to convey. This blog is an experiment in that philosophy—saying more with less."
    ],
  },
  {
    id: 3,
    title: "First Post!",
    date: "July 01, 2024",
    content: [
        "Welcome to my little corner of the internet. This is a space for thoughts, experiments, and reflections. The design is simple, the content will be too. Let's see where this journey takes us.",
        "Built with React, Tailwind, and a love for clean aesthetics. More to come soon."
    ],
  }
];
