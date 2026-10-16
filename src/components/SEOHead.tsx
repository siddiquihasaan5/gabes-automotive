import { useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: "GABE'S AUTOMOTIVE & TRANSMISSION | Belton, TX",
    description: "Automotive repair, transmission services, engine work, brake service, and mechanical maintenance in Belton, Texas."
  },
  "/services": {
    title: "Automotive Repair Services | GABE'S AUTOMOTIVE & TRANSMISSION",
    description: "Explore our transmission repairs, engine work, brake service, oil changes, and mechanical repairs in Belton, Texas."
  },
  "/about": {
    title: "About GABE'S AUTOMOTIVE & TRANSMISSION | Belton, TX",
    description: "Practical, dependable mechanical repair shop located at 6971 W US Highway 190 in Belton, Texas."
  },
  "/contact": {
    title: "Contact GABE'S AUTOMOTIVE & TRANSMISSION | Belton, TX",
    description: "Email GABE'S AUTOMOTIVE & TRANSMISSION for mechanical repair inquiries and get directions to our Belton, Texas shop."
  },
  "/404": {
    title: "Page Not Found | GABE'S AUTOMOTIVE & TRANSMISSION",
    description: "The requested page could not be found. Return to GABE'S AUTOMOTIVE & TRANSMISSION home."
  }
};

export function SEOHead() {
  const { currentPath } = useNavigation();

  useEffect(() => {
    const meta = PAGE_METADATA[currentPath] || PAGE_METADATA["/404"];
    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", meta.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", meta.title);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute("content", meta.description);
    }
  }, [currentPath]);

  return null;
}
