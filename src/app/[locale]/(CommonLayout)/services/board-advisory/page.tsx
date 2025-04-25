import BoardAdvisoryServices from "@/components/pages/services/BoardAdvisoryServices";
import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";

const boardAdvisoryServices = [
  {
    title: "Board Effectiveness",
    description:
      "Drive performance through tailored board evaluations and development programs.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    title: "Governance Structure",
    description:
      "Design and implement robust governance frameworks aligned with best practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop",
  },
  {
    title: "Succession Planning",
    description:
      " Ensure leadership continuity with proactive succession and transition strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=500&fit=crop",
  },
  {
    title: "Board Composition",
    description:
      "Build high-impact boards with the right structure and member expertise.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=500&fit=crop",
  },
  {
    title: "Risk Management",
    description:
      "Enhance oversight with effective risk governance and control mechanisms..",
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
        title="Board Advisory Services"
        description="Strategic solutions to strengthen board performance and governance excellence."
      />
      <CommonBanner title="Collaborate with us to elevate your board and achieve lasting success through strategic leadership." />
    </>
  );
}
