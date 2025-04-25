import BoardAdvisoryServices from "@/components/pages/services/BoardAdvisoryServices";
import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";

const boardAdvisoryServices = [
  {
    title: "Board Effectiveness",
    description:
      "Enhancing board performance through strategic evaluation and development.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    title: "Governance Structure",
    description:
      "Establishing robust corporate governance frameworks and practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop",
  },
  {
    title: "Succession Planning",
    description:
      "Developing comprehensive board succession and transition strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=500&fit=crop",
  },
  {
    title: "Board Composition",
    description:
      "Optimizing board structure and member selection for maximum effectiveness.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=500&fit=crop",
  },
  {
    title: "Risk Management",
    description:
      "Implementing effective risk oversight and management systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop",
  },
];

export const metadata = {
  title: "Board Advisory Services - Empowerment Group",
  description:
    "Empowerment Group is a leading recruitment consultancy offering professional recruitment and talent acquisition services to companies in India and abroad.",
};

export default function BoardAdvisoryServicesPage() {
  return (
    <>
      <BoardAdvisoryServices />
      <WhatWeDo
        services={boardAdvisoryServices}
        title="Our Board Advisory Services"
        description="Comprehensive solutions to enhance board effectiveness and corporate governance."
      />
      <CommonBanner
        title="Partner with us
to strengthen your Board and drive sustainable success through strategic leadership."
      />
    </>
  );
}
