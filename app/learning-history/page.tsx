"use client";

import { IconFlower } from "../../domains/garden-components/icons/flower";
import { useState } from "react";

interface LearningItem {
  id: string;
  title: string;
  tag: "front-end" | "back-end" | "devops" | "design" | "general";
  date: string;
  content: string;
}

const learningItems: LearningItem[] = [
  {
    id: "1",
    title: "Tailwind CSS v4 with Next.js 15",
    tag: "front-end",
    date: "2025-10-06",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "2", 
    title: "Google Fonts Optimization Strategies",
    tag: "front-end",
    date: "2025-10-06",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper."
  },
  {
    id: "3",
    title: "CSS-first Configuration Approaches", 
    tag: "design",
    date: "2025-10-05",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet lorem nec justo dignissim condimentum. Etiam consectetur, nunc id imperdiet facilisis, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  },
  {
    id: "4",
    title: "Server-side Rendering Optimization",
    tag: "back-end", 
    date: "2025-10-04",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
  }
];

const tagColors = {
  "front-end": "bg-azure-500 text-azure-100",
  "back-end": "bg-puce-500 text-puce-100", 
  "devops": "bg-wenge-500 text-wenge-100",
  "design": "bg-almond-500 text-almond-100",
  "general": "bg-cadet_gray-500 text-cadet_gray-100"
};

export default function LearningHistory() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="container global-x-spacing">
      <section data-ui="learning-history" className="text-wenge mt-6">
        <h1 className="text-8xl font-serif text-midnight-blue font-light mb-4">Learning History</h1>
      
        <div className="space-y-8">
          <p className="text-2xl  font-serif font-light text-midnight-blue">
            A chronological journey through my software development learning path.
          </p>
          
          <ul className="space-y-4 relative">
            <div data-ui="timeline-indicator" className="absolute top-0 left-0 w-[0.5px] h-full bg-dark-pink" />
            {learningItems.map((item) => (
              <li key={item.id} className="rounded-xl overflow-hidden relative">
                <div data-ui="timeline-indicator-circle" className="absolute top-[50px] left-[-5px] w-2 h-2 rounded-full bg-dark-pink" />
                <div 
                  className="flex items-center justify-between px-4 py-8 cursor-pointer hover:bg-gradient-to-r hover:from-dark-pink hover:to-neutral-white hover:text-neutral-white transition-all duration-300"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-serif font-medium">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-sans ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-sans text-wenge-400">{item.date}</span>
                    <span className="text-lg font-sans">
                      {expandedItems.has(item.id) ? "−" : "+"}
                    </span>
                  </div>
                </div>
                
                {expandedItems.has(item.id) && (
                  <div className="px-4 pb-4 border-t border-wenge-200">
                    <p className="text-base font-sans font-light leading-relaxed mt-4">
                      {item.content}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}